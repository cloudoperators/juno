import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const textareaWrapperStyles = `
  jn-relative
`;

const textareaStyles = `
  jn-absolute
  jn-top: 0
  jn-right: 0
  jn-bottom: 0
  jn-left: 0
`;

const hideAreaStyles = `
  jn-opacity-0
`;

const showAreaStyles = `
  jn-opacity-100
`;

const focusStyles = `
 jn-outline-none
 jn-ring-2
 jn-ring-theme-focus
`;

const maskTextValue = (text) => {
  // exclude spaces and line breaks from masking:
  return text.replace(/[^ \n]/g, "•");
};

// TODO: snyc width
// TODO: styles
export const Secret = ({ mask, onChange, value, ...props }) => {
  const [theValue, setTheValue] = useState("");
  const [theMaskedValue, setTheMaskedValue] = useState("");
  const [isMasked, setIsMasked] = useState(true);
  // Track if either of the two textareas has focus, this allows to render focus styles to whatever textarea is visible:
  const [secretHasFocus, setSecretHasFocus] = useState(false);

  const maskedTextareaRef = useRef(null);
  const unmaskedTextareaRef = useRef(null);
  const containerRef = useRef(null);

  const syncDimensions = () => {
    if (
      maskedTextareaRef.current &&
      unmaskedTextareaRef.current &&
      containerRef.current
    ) {
      const unmaskedHeight = unmaskedTextareaRef.current.scrollHeight;
      maskedTextareaRef.current.style.height = `${unmaskedHeight}px`;
      unmaskedTextareaRef.current.style.height = `${unmaskedHeight}px`;
      containerRef.current.style.height = `${unmaskedHeight}px`;
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      syncDimensions();
    });

    resizeObserver.observe(unmaskedTextareaRef.current);

    syncDimensions();
  }, []);

  useEffect(() => {
    setTheValue(value);
    setTheMaskedValue(maskTextValue(theValue));
  }, [value]);

  useEffect(() => {
    setIsMasked(mask);
  }, [mask]);

  const handleChange = (event) => {
    setTheValue(event.target.value);
    setTheMaskedValue(maskTextValue(event.target.value));
    onChange && onChange(event);
  };

  const handleToggleClick = () => {
    setIsMasked(!isMasked);
  };

  const handleFocus = () => {
    setSecretHasFocus(true);
  };

  const handleBlur = () => {
    setSecretHasFocus(false);
  };

  const handleCopyClick = () => {};

  return (
    <div>
      <div
        className={`
          juno-secret-textarea-wrapper 
          ${textareaWrapperStyles}
        `}
        ref={containerRef}
      >
        <textarea
          className={`
              juno-secret-textarea-masked
              ${textareaStyles}
              ${secretHasFocus ? focusStyles : ""}
              ${isMasked ? showAreaStyles : hideAreaStyles}
            `}
          onBlur={handleBlur}
          onFocus={handleFocus}
          readOnly="readonly"
          ref={maskedTextareaRef}
          value={theMaskedValue}
        />
        <textarea
          className={`
              juno-secret-textarea-clear
              ${textareaStyles}
              ${secretHasFocus ? focusStyles : ""}
              ${isMasked ? hideAreaStyles : showAreaStyles}
            `}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          ref={unmaskedTextareaRef}
          value={theValue}
        />
      </div>

      <div>
        <button onClick={handleToggleClick}>Toggle</button>
        <button onClick={handleCopyClick}>Copy</button>
      </div>
    </div>
  );
};

Secret.defaultProps = {
  mask: true,
  onChange: undefined,
  value: "",
};
