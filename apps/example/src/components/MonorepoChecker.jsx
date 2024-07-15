/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import {
  broadcast,
  watch,
  get,
  onGet,
} from "@cloudoperators/juno-communicator";
import { MessagesProvider } from "@cloudoperators/juno-messages-provider";

import { Stack } from "@cloudoperators/juno-ui-components";
console.log("HI folks from mono")
console.log("==import communicator", {
  broadcast,
  watch,
  get,
  onGet,
});

console.log("==import message provider", {
  MessagesProvider,
});

const MonorepoChecker = () => {
  return <></>;
};

export default MonorepoChecker;
