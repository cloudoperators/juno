/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as x509 from "@peculiar/x509"

export const generateCsr = (algorithm, keys) => {
  const extensions = []
  // add key usages if needed
  // extensions.push(new x509.KeyUsagesExtension(keyUsages, true));

  const attributes = []
  // add attributes if needed
  // x509.SubjectKeyIdentifierExtension or
  // attributes.push(new x509.ChallengePasswordAttribute(password));

  return x509.Pkcs10CertificateRequestGenerator.create({
    name: "",
    signingAlgorithm: algorithm,
    keys: keys,
    extensions,
    attributes,
  })
}

// generates a private and public key
export const generateKeys = (algorithm) => {
  return crypto.subtle.generateKey(algorithm, true, ["sign", "verify"])
}

// Export a key and return an exported-key space.
export const pemEncodeKey = (key) => {
  // set the format
  // KeyFormat = "jwk" | "pkcs8" | "raw" | "spki";
  let KeyFormat = "raw"
  if (key?.type === "public") KeyFormat = "spki"
  else if (key?.type === "private") KeyFormat = "pkcs8"

  // export crypto key and pem encode
  return crypto.subtle.exportKey(KeyFormat, key).then((exportedKey) => {
    return x509.PemConverter.encode(exportedKey, "private key")
  })
}

export const getAlgorithm = (keyAlgorithm) => {
  const alg = {
    name: "RSASSA-PKCS1-v1_5",
    hash: "SHA-256",
  }
  switch (keyAlgorithm) {
    case "RSA-2048":
      alg.modulusLength = 2048
      alg.publicExponent = new Uint8Array([1, 0, 1])
      break
    case "RSA-4096":
      alg.modulusLength = 4096
      alg.publicExponent = new Uint8Array([1, 0, 1])
      break
    case "EC-P-256":
      alg.name = "ECDSA"
      alg.namedCurve = "P-256"
      break
    case "EC-P-384":
      alg.name = "ECDSA"
      alg.namedCurve = "P-384"
      break
    case "EC-P-521":
      alg.name = "ECDSA"
      alg.namedCurve = "P-521"
      break
    default:
  }
  return alg
}
