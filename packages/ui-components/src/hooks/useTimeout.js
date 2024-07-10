/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

/* Timeout hook that takes care of clearing timeouts properly when React components rerender.
 * Reference: Dan Abramamov's article on setInterval with hooks: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 * and and adaptation for setTimeout: https://www.joshwcomeau.com/snippets/react-hooks/use-timeout/
*/
export default function useTimeout(callback, delay) {
  const timeoutRef = React.useRef(null);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const tick = () => savedCallback.current();
 
    if (typeof delay === 'number') {
      timeoutRef.current = window.setTimeout(tick, delay);
      
      return () => window.clearTimeout(timeoutRef.current);
    }
  }, [delay]);

  return timeoutRef;
};