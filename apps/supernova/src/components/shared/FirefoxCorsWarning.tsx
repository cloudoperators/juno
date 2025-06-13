import React from "react"

export const FirefoxCorsWarning = () => (
  <p>
    Firefox detected. Please ensure that you have activated <b>allow_client_cert</b> to enable the retrieval of alerts
    and silences from the API.
    <ul>
      <li>1. Go to about:config (via address bar)</li>
      <li>
        2. Change <b>network.cors_preflight.allow_client_cert</b> to <b>true</b>
      </li>
      <li>3. Reload Greenhouse</li>
    </ul>
  </p>
)
