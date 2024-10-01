/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, ReactNode } from "react"
import { createStore, useStore, StateCreator, StoreApi } from "zustand"

// function to generate a unique id
const uniqueId = (prefix: string): string => {
  return `${prefix}-${(+new Date() + Math.random()).toString(36).slice(-5)}}`
}

// define the MessageProps interface
interface MessageProps {
  text: string
  variant: "error" | "info" | "danger" | "success" | "warning"
  dismissible?: boolean
  autoDismiss?: boolean
  autoDismissTimeout?: number
  className?: string
}

// extend the MessageProps interface add an id property
export interface Message extends MessageProps {
  id: string
}

// define the slice interface
interface MessagesSlice {
  storeId: string
  messages: Message[] // Array of Message objects
  actions: {
    addMessage: (props: MessageProps) => void
    removeMessage: (id: string) => void
    resetMessages: () => void
  }
}

// create a slice for the messages
const createMessagesSlice: StateCreator<MessagesSlice> = (set, get) => ({
  storeId: uniqueId("store-"),
  messages: [], // this is the messages state
  actions: {
    addMessage: (props: MessageProps) => {
      // check if a message with the same text and variant exists
      const index = get().messages.findIndex((item) => {
        return JSON.stringify(item.text) === JSON.stringify(props.text) && item.variant === props.variant
      })
      if (index >= 0) return
      const items = get().messages.slice()
      const messageId = uniqueId("message-")
      items.push({ id: messageId, ...props })

      set((state) => {
        return { ...state, messages: items }
      })
    },
    removeMessage: (id) => {
      let items = get().messages.slice()
      // remove the message with the given id
      items = items.filter((item) => item.id !== id)
      set((state) => {
        return { ...state, messages: items }
      })
    },
    resetMessages: () => {
      set((state) => {
        return { ...state, messages: [] }
      })
    },
  },
})

// Create the StoreContext
const StoreContext = createContext<StoreApi<MessagesSlice> | undefined>(undefined)

interface MessagesProviderProps {
  children: ReactNode
}
// MessagesProvider component
export const MessagesProvider: React.FC<MessagesProviderProps> = ({ children }) => {
  return <StoreContext.Provider value={createStore(createMessagesSlice)}>{children}</StoreContext.Provider>
}

// Hook to access the message store with a selector
const messageStore = (selector: (state: MessagesSlice) => any) => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error("StoreContext not provided")
  }
  return useStore(store, selector)
}

// States
export const useMessages = () => messageStore((state: MessagesSlice) => state.messages)

// Actions
export const useActions = () => messageStore((state: MessagesSlice) => state.actions)
