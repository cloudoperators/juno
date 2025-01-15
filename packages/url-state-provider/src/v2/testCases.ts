/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DecodedObject } from "./types"

type TestCase = {
  id: number
  encoded: string
  decoded: DecodedObject
}

const testCases: TestCase[] = [
  {
    encoded: "aString=someId1&aNumber=2&aBoolean=true&aNull&anEmptyString=&anArray=1,true,something",
    decoded: {
      aString: "someId1",
      aNumber: 2,
      aBoolean: true,
      aNull: null,
      anEmptyString: "",
      anArray: [1, true, "something"],
    },
  },
  {
    encoded: "aStringWithSpaces=some%20id%20and",
    decoded: { aStringWithSpaces: "some id and" },
  },
  {
    encoded: "regularExpression=%2Fw3schools%2Fi",
    decoded: { regularExpression: /w3schools/i },
  },
  {
    encoded: "aStringWithSpecialCharacter=A%26B",
    decoded: { aStringWithSpecialCharacter: "A&B" },
  },
]
  //assign 'id' to each test case to better identify which one is failing
  .map((item, idx) => ({ id: idx + 1, ...item }))

export default testCases
