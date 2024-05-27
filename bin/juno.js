#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

const argv = require("yargs")
  .usage(
    `
Usage: $0 <command> <type> <name> 
`
  )
  .command(`create [type] [name]`, "", (yargs) => {
    yargs.positional("type", {
      describe: "Type of project",
      default: "app",
      choices: ["app", "lib"],
    })
    yargs.positional("name", {
      describe: "Name of project",
      default: "juno-app",
    })
  })
  .options({
    internal: {
      alias: "i",
      describe: "Create an internal app or lib, inside the juno repo",
      type: "boolean",
    },
  })
  .help().argv

const green = "\x1b[32m%s\x1b[0m"
const yellow = "\x1b[33m%s\x1b[0m"

const copyDir = function (src, dest) {
  fs.mkdirSync(dest)
  var files = fs.readdirSync(src)
  for (var i = 0; i < files.length; i++) {
    var current = fs.lstatSync(path.join(src, files[i]))
    if (current.isDirectory()) {
      copyDir(path.join(src, files[i]), path.join(dest, files[i]))
    } else if (current.isSymbolicLink()) {
      var symlink = fs.readlinkSync(path.join(src, files[i]))
      fs.symlinkSync(symlink, path.join(dest, files[i]))
    } else {
      fs.cpSync(path.join(src, files[i]), path.join(dest, files[i]))
    }
  }
}

const replaceInAllFiles = function (src, term, replacement) {
  var files = fs.readdirSync(src)
  for (var i = 0; i < files.length; i++) {
    var current = fs.lstatSync(path.join(src, files[i]))
    if (current.isDirectory()) {
      replaceInAllFiles(path.join(src, files[i]), term, replacement)
    } else if (current.isFile()) {
      const content = fs.readFileSync(path.join(src, files[i]), "utf8")
      const result = content.replace(term, replacement)
      fs.writeFileSync(path.join(src, files[i]), result, "utf8")
    }
  }
}

const copyPropsHelper = function () {
  if (fs.existsSync(`./${argv.name}/esbuild.config.js`)) {
    console.log("copyPropsHelper")
    let content = fs.readFileSync(`./${argv.name}/esbuild.config.js`, "utf8")
    if (content.includes('require("../../helpers/appProps")')) {
      fs.mkdirSync(`./${argv.name}/helpers`)
      fs.cpSync(
        path.resolve(__dirname, "../helpers/appProps.js"),
        `./${argv.name}/helpers/appProps.js`
      )
      content = content.replace(
        'require("../../helpers/appProps")',
        'require("./helpers/appProps")'
      )
      fs.writeFileSync(`./${argv.name}/esbuild.config.js`, content, "utf8")
    }
  }
}

const npmInstall = function () {
  var child_process = require("child_process")
  child_process.execSync(`cd ${argv.name} && npm install`, { stdio: [0, 1, 2] })
}

const create = () => {
  console.log(`Creating ${argv.type} ${argv.name}...`)
  // determine template path
  const templatePath =
    argv.type === "app"
      ? path.resolve(__dirname, "../apps/template")
      : path.resolve(__dirname, "../libs/template-lib")

  // copy template to new project
  console.log(`Copy ${templatePath} to ./${argv.name}`)
  copyDir(templatePath, `./${argv.name}`)

  // replace template with name
  replaceInAllFiles(`./${argv.name}`, "template", argv.name)
  replaceInAllFiles(`./${argv.name}`, "template-lib", argv.name)

  // EXTERNAL
  if (!argv.internal) {
    console.log(
      `External ${argv.type}:`,
      "replace dependencies in package.json"
    )
    copyPropsHelper()
    // libs path
    const libsPath = path.resolve(__dirname, "../libs")
    // read package.json of all libs in juno
    const junoLibs = fs.readdirSync(libsPath)
    // select the name from package.json
    const junoLibNames = junoLibs.map((lib) => {
      const packageJson = JSON.parse(
        fs.readFileSync(path.resolve(libsPath, `${lib}/package.json`), "utf8")
      )
      return packageJson.name
    })

    // this package.json
    const packageJson = JSON.parse(
      fs.readFileSync(`./${argv.name}/package.json`, "utf8")
    )

    // delete peerDependencies
    delete packageJson.peerDependencies

    //url="https:\/\/assets\.juno\.global\.cloud\.sap\/libs\/$folder@latest\/package\.tgz"

    const replaceJunoLibPaths = (dependencies) => {
      if (!dependencies) return
      const keys = Object.keys(dependencies)
      keys.forEach((key) => {
        const junoLibName = junoLibNames.find((lib) => key === lib)
        if (junoLibName) {
          let version = (dependencies[key] || "*").replace(/[\^~]/g, "")
          if (version === "*") version = "latest"
          dependencies[
            key
          ] = `https://assets.juno.global.cloud.sap/libs/${junoLibName}@${version}/package.tgz`
        }
      })
    }

    replaceJunoLibPaths(packageJson.dependencies)
    replaceJunoLibPaths(packageJson.devDependencies)
    fs.writeFileSync(
      `./${argv.name}/package.json`,
      JSON.stringify(packageJson, null, 2),
      "utf8"
    )
  }

  fs.rmSync(`./${argv.name}/.git`, { recursive: true, force: true })
  fs.rmSync(`./${argv.name}/node_modules`, { recursive: true, force: true })
  fs.rmSync(`./${argv.name}/package-lock.json`, {
    recursive: true,
    force: true,
  })

  npmInstall()

  console.log(green, `Done!`)
  if (argv.type === "app") {
    console.log("Go to the project folder:")
    console.log(yellow, `cd ${argv.name}`)
    console.log(yellow, "To start a webserver: npm run start")
  }
  console.log(yellow, "To build the project: npm run build")
  console.log(yellow, "To test the project: npm run test")
  console.log(green, "Enjoy!")
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Check if project already exists
if (fs.existsSync(`./${argv.name}`)) {
  readline.question(
    `The ${argv.type} ${argv.name} already exists. Do you want to replace it? (y/n)`,
    (answer) => {
      if (answer === "y") {
        console.log("Delete existing...")
        fs.rmSync(`./${argv.name}`, { recursive: true, force: true })
        create()
        readline.close()
      } else {
        console.log("Aborting...")
        readline.close()
        process.exit(1)
      }
    }
  )
} else {
  create()
  process.exit(1)
}
