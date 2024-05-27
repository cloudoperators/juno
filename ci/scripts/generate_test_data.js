const fs = require("fs")
const path = require("path")
const glob = require("glob")

const rootPath = path.resolve(__dirname, "../../")

const PACKAGES_PATHS = ["apps", "libs"]
const globPattern = `${rootPath}/@(${PACKAGES_PATHS.join("|")})/**/package.json`
const pathRegex = new RegExp(`^${rootPath}/(.+)/package.json$`)
const files = glob.sync(globPattern, { ignore: [`**/node_modules/**`] })

// delete test data
fs.rmSync(path.resolve(__dirname, "test_data"), {
  recursive: true,
  force: true,
})
fs.mkdirSync(path.resolve(__dirname, "test_data"))

for (let file of files) {
  const assetPath = file.match(pathRegex)[1]
  const testDir = path.resolve(__dirname, "test_data", assetPath)
  const pkg = JSON.parse(fs.readFileSync(file))
  // run npm build
  console.log("npm build", assetPath)
  const { stdout, stderr } = require("child_process").spawnSync(
    "npm",
    ["run", "build"],
    {
      cwd: path.resolve(__dirname, "../../", assetPath),
      stdio: "inherit",
    }
  )

  fs.mkdirSync(`${testDir}@${pkg.version}`, { recursive: true })
  fs.mkdirSync(`${testDir}@latest`, { recursive: true })
  fs.copyFileSync(file, `${testDir}@${pkg.version}/package.json`)
  fs.copyFileSync(file, `${testDir}@latest/package.json`)
  fs.cpSync(
    path.join(rootPath, assetPath, "build"),
    `${testDir}@${pkg.version}/build`,
    {
      recursive: true,
    }
  )
  fs.cpSync(
    path.join(rootPath, assetPath, "build"),
    `${testDir}@latest/build`,
    {
      recursive: true,
    }
  )
  for (let file of ["README.md", "LICENSE", "COMMUNICATOR.md"]) {
    if (fs.existsSync(path.join(rootPath, assetPath, file))) {
      fs.cpSync(
        path.join(rootPath, assetPath, file),
        `${testDir}@${pkg.version}/${file}`,
        { overwrite: true }
      )
      fs.cpSync(
        path.join(rootPath, assetPath, file),
        `${testDir}@latest/${file}`
      )
    }
  }

  if (assetPath.includes("apps")) {
    fs.rmSync(path.join(rootPath, assetPath, "build"), {
      recursive: true,
      force: true,
    })
  }
}

console.log("DONE!")
