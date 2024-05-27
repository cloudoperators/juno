import glob from "glob"
import path from "path"
import fs from "fs"
import json2md from "json2md"

const DIRNAME = path.dirname(process.argv[1])

const availableArgs = [
  "--path=ASSET_PATH",
  "--output=FILE_PATH",
  "--verbose|-v",
  "--help|-h",
]

const options = {
  outputFile: "COMMUNICATOR.md",
  verbose: false,
  v: false,
}

const args = process.argv.slice(2)

// PARSE ARGS
for (let arg of args) {
  const match = arg.match(/^-{1,2}([^=]+)=?(.*)/)
  if (match) {
    let key = match[1].replace(/\W+(.)/g, function (match, chr) {
      console.log(match, chr)
      return chr.toUpperCase()
    })

    options[key] = match[2] ? match[2] : true
    continue
  }
}
if (options.help || options.h) {
  console.log("Usage: " + availableArgs.join(" "))
}

const uniq = (value, index, array) => array.indexOf(value) === index

const readmeIntroduction = [
  { h1: "Communicator Interface" },
  {
    p:
      "This documentation describes the interface for communicating with " +
      "the outside world. This app uses the juno lib communicator which " +
      "provides four methods for sending messages and listening for messages.",
  },
  {
    ul: [
      "`broadcast`, send a message to the whole world",
      "`watch`, listen for a message",
      "`get`, request a message and wait for the reply (one to one communication)",
      "`onGet`, listen for and reply to get messages",
    ],
  },

  {
    p:
      "These methods are always to be considered in pairs as opponents.\n" +
      "`broadcast <-> watch`\n" +
      "`get <-> onGet`",
  },

  {
    p:
      "For example, if an app sends a message with `broadcast`, then this " +
      "message can be received with `watch`. And correspondingly, `get` " +
      "requests are answered with `onGet`. Where `get` is answered directly " +
      "(one to one).",
  },
  { p: "All messages sent or consumed by this app are listed here" },
]

const howToUse = (method, message) => {
  switch (method) {
    case "broadcast":
      return `watch("${message}", (data) => {/* handle data here */})`
    case "watch":
      return `broadcast("${message}", { /*data*/ } )`
    case "get":
      return `onGet("${message}", () => {/* return data here */})`
    case "onGet":
      return `get("${message}", (data) => {/* handle data here */})`
  }
}

const pattern = options.path
  ? `${options.path}/**/*.+(j|t)s?(x)`
  : `${DIRNAME}/../+(libs|apps)/**/*.+(j|t)s?(x)`
console.log("look for", pattern)

const files = glob.sync(pattern, {
  ignore: [
    "**/node_modules/**",
    "**/__mocks__/**",
    "**/*.config.+(j|t)s",
    "**/*.test.+(j|t)s",
    "**/build/**",
  ],
})

// assetName: mdJson
const readmes = {}

files.forEach((file) => {
  const assetNameMatch = file.match(/(apps|libs|apis)\/([^\/]+).+/)

  const assetName = assetNameMatch?.[2]
  if (!assetName) return

  let content = fs.readFileSync(file).toString()

  for (let method of ["broadcast", "watch", "get", "onGet"]) {
    const regex = new RegExp(`${method}\\(["|']([^"|'|\\.|-|\\/]+)["|'],`, "g")
    const matches = [...content.matchAll(regex)]
    const messages = matches.map((match) => match[1]).filter(uniq)

    if (messages.length > 0) {
      // console.log(assetName, messages)
      // console.log(file)
      if (!readmes[assetName]) {
        readmes[assetName] = {
          assetName,
          path: file.substring(0, file.indexOf(assetName) + assetName.length),
          md: [],
        }
      }
      readmes[assetName]["md"] = [
        ...readmes[assetName]["md"],
        { h2: method },
        { ul: messages.map((m) => `**${m}**`) },
        { p: "How to use" },
        {
          code: {
            language: "js",
            content: messages.map((m) => howToUse(method, m)).join("\n"),
          },
        },
      ]
    }
  }
})

for (let key in readmes) {
  const { assetName, path: assetPath, md } = readmes[key]
  const readme = [
    ...readmeIntroduction,
    {
      blockquote: `This documentation was generated automatically based on all communication calls found in ${assetName}.`,
    },
    ...md,
  ]

  console.log(assetPath)
  fs.writeFileSync(path.join(assetPath, options.outputFile), json2md(readme))
}
