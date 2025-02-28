/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Modal, Button } from "@cloudoperators/juno-ui-components"

interface HeaderUserProps {
  login: () => void
}

const WelcomeView: React.FC<HeaderUserProps> = ({ login }) => {
  const [isOpen, setIsOpen] = React.useState(true) // Modal is open initially

  return (
    <Modal title="SAP Mountain Peaks Dashboard" open={isOpen} closeable={false} size="large">
      <div className="flex flex-col justify-center items-center p-8">
        <svg
          className="w-24 h-24 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 17l9-9 4 4L21 7"></path>
        </svg>
        <p className="mb-6 text-center">
          Welcome to the SAP Mountain Peaks Dashboard! Log in to get access to the peaks of the world!
        </p>
        <Button onClick={login} className="w-full" label="Log In" variant="primary" />
      </div>
    </Modal>
  )
}

export default WelcomeView
