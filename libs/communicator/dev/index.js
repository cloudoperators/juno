/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const buttonCss =
  "padding: 10px; margin: 0 10px; background-color: rgb(67 75 95); border: 1px solid rgb(67 75 95); color: white; border-radius: 5px; cursor: pointer"
const displayCss = "margin: 20px 10px 0 10px;"

import("./build.js").then(({ broadcast, watch, get, onGet }) => {
  console.log("================READY")

  self.broadcast = broadcast
  self.watch = watch
  self.get = get
  self.onGet = onGet

  const root = document.getElementById("root")

  Tester(root)
})

const logTemplate = ({ source, target, text, data }) => `
<div style="margin: 10px 0; padding: 0 0 10px 0; border-bottom: 1px solid #ccc; display: flex; flex-direction: column;">
  <div style="display: flex; flex-direction: row; font-size: 12px; color: #333;">
    <span>Date: ${new Date().toLocaleString()}</span>
    <span style="color: red; margin-left: 20px;">Source tab: ${source}</span>
    <span style="color: green; margin-left: 20px;">Target tab: ${target}</span>
  </div>
  <p style="margin: 10px 0;">${text}</p>
  <div style="display: none;">
    ${JSON.stringify(data, null, 2)}
  </div>
</div>`

const Tester = (root) => {
  const buttonGet = document.createElement("button")
  const buttonBroadcast = document.createElement("button")
  const buttonGetIntraWindow = document.createElement("button")
  const buttonBroadcastIntraWindow = document.createElement("button")

  buttonGet.style.cssText = buttonCss
  buttonBroadcast.style.cssText = buttonCss
  buttonGetIntraWindow.style.cssText = buttonCss
  buttonBroadcastIntraWindow.style.cssText = buttonCss

  const display = document.createElement("div")
  display.style.cssText = displayCss
  const header = `<div style="display: flex; justify-content: space-between;"><span>Log</span><button style="padding:10px; " onclick="getElementById('content').innerHTML=''">Clear</button></div>`
  display.innerHTML = header
  const content = document.createElement("div")
  content.id = "content"
  display.appendChild(content)

  const log = (source, target, text, data) => {
    content.innerHTML = `${content.innerHTML}<br>${logTemplate({
      source,
      target,
      text,
      data,
    })}`
  }

  watch(
    "TEST_BROADCAST",
    (data, { sourceWindowId, thisWindowId }) => {
      log(
        sourceWindowId,
        thisWindowId,
        `${thisWindowId} (watch): receive data for event TEST_BROADCAST from ${sourceWindowId}`,
        data
      )
    },
    { crossWindow: true }
  )

  watch(
    "TEST_BROADCAST_INTRA_WINDOW",
    (data, { sourceWindowId, thisWindowId }) => {
      log(
        sourceWindowId,
        thisWindowId,
        `${thisWindowId} (watch): receive data for event TEST_BROADCAST_INTRA_WINDOW from ${sourceWindowId}`,
        data
      )
    }
  )

  onGet(
    "TEST_GET",
    (getOptions, { sourceWindowId, thisWindowId }) => {
      log(
        sourceWindowId,
        thisWindowId,
        `${thisWindowId} (onGet): send data for event TEST_GET to ${sourceWindowId}`,
        getOptions
      )
      return `data for event TEST_GET`
    },
    { crossWindow: true, debug: false }
  )

  onGet(
    "TEST_GET_INTRA_WINDOW",
    (getOptions, { sourceWindowId, thisWindowId }) => {
      log(
        sourceWindowId,
        thisWindowId,
        `${thisWindowId} (onGet): send data for event TEST_GET_INTRA_WINDOW to ${sourceWindowId}`,
        getOptions
      )
      return `data for event TEST_GET_INTRA_WINDOW`
    }
  )

  buttonGet.innerHTML = "GET (CROSS WINDOW)"
  buttonGet.addEventListener("click", () => {
    log("", "", `Requesting data for event TEST_GET`, "")
    get(
      "TEST_GET",
      (data, { sourceWindowId, thisWindowId }) =>
        log(
          sourceWindowId,
          thisWindowId,
          `${thisWindowId} (get): receive data for event TEST_GET from ${sourceWindowId}`,
          data
        ),
      {
        debug: false,
        crossWindow: true,
      }
    )
  })

  buttonBroadcast.innerHTML = "BROADCAST (CROSS WINDOW)"
  buttonBroadcast.addEventListener("click", () => {
    log("", "", `Broadcasting data for event TEST_BROADCAST`, "")
    broadcast("TEST_BROADCAST", `TEST_BROADCAST_DATA`, {
      debug: false,
      crossWindow: true,
    })
  })

  buttonGetIntraWindow.innerHTML = "GET (INTRA WINDOW)"
  buttonGetIntraWindow.addEventListener("click", () => {
    log("", "", `Requesting data for event TEST_GET_INTRA_WINDOW`, "")
    get("TEST_GET_INTRA_WINDOW", (data, { sourceWindowId, thisWindowId }) =>
      log(
        sourceWindowId,
        thisWindowId,
        `${thisWindowId} (get): receive data for event TEST_GET_INTRA_WINDOW from ${sourceWindowId}`,
        data
      )
    )
  })

  buttonBroadcastIntraWindow.innerHTML = "BROADCAST (INTRA WINDOW)"
  buttonBroadcastIntraWindow.addEventListener("click", () => {
    log("", "", `Broadcasting data for event TEST_BROADCAST_INTRA_WINDOW`, "")
    broadcast("TEST_BROADCAST_INTRA_WINDOW", `TEST_BROADCAST_INTRA_WINDOW_DATA`)
  })

  root.appendChild(buttonGet)
  root.appendChild(buttonBroadcast)
  root.appendChild(buttonGetIntraWindow)
  root.appendChild(buttonBroadcastIntraWindow)

  root.appendChild(display)
  //console.log(root)
}
