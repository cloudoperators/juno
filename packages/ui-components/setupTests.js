/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom"
import "regenerator-runtime/runtime"

/*  
Mock ResizeObserver. 
Required to test Radix-UI-based components.
https://github.com/ZeeCoder/use-resize-observer/issues/40
https://stackoverflow.com/questions/64558062/how-to-mock-resizeobserver-to-work-in-unit-tests-using-react-testing-library
*/
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver

/**
 * Required to test Radix-UI-based components:
 * JSDOM doesn't implement PointerEvent so we need to mock our own implementation
 * Default to mouse left click interaction
 * https://github.com/radix-ui/primitives/issues/1822
 * https://github.com/jsdom/jsdom/pull/2666
 */

class MockPointerEvent extends Event {
  constructor(type, props) {
    super(type, props)
    this.button = props.button || 0
    this.ctrlKey = props.ctrlKey || false
    this.pointerType = props.pointerType || "mouse"
  }
}

window.PointerEvent = MockPointerEvent
window.HTMLElement.prototype.scrollIntoView = jest.fn()
window.HTMLElement.prototype.releasePointerCapture = jest.fn()
window.HTMLElement.prototype.hasPointerCapture = jest.fn()
