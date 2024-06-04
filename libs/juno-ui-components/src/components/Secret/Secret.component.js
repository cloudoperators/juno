import React, { useEffect, useId, useState } from "react";
import PropTypes from "prop-types";
import { Textarea } from "../Textarea/";
import { ButtonRow } from "../ButtonRow/";
import { Button } from "../Button/";

const innerWrapperStyles = `
  jn-relative
`;

const coverStyles = `
  jn-absolute
  jn-top-0
  jn-left-0
  jn-right-0
  jn-bottom-0
  jn-cursor-not-allowed
  jn-backdrop-blur
  jn-bg-theme-textinput/80
  jn-z-10
`;

const textareaStyles = ``;

export const Secret = ({
  onHide,
  onReveal,
  onRevealToggle,
  reveal,
  wrapperClassName,
  ...props
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    setIsRevealed(reveal);
  }, [reveal]);

  const handleToggleClick = () => {
    setIsRevealed(!isRevealed);
  };

  const handleClearClick = () => {};

  const handleCopyClick = () => {};

  return (
    <div className={`juno-secret-wrapper ${wrapperClassName}`}>
      <div className={`juno-secret-wrapper-inner ${innerWrapperStyles}`}>
        {isRevealed ? (
          ""
        ) : (
          <div className={`juno-secret-cover ${coverStyles} `}></div>
        )}
        <Textarea />
      </div>
      <ButtonRow className="jn-mt-2">
        <Button>Clear</Button>
        <Button onClick={handleToggleClick}>
          {isRevealed ? "Hide" : "Reveal"}
        </Button>
        <Button>Copy</Button>
      </ButtonRow>
    </div>
  );
};

Secret.propTypes = {
  reveal: PropTypes.bool,
};

Secret.defaultProps = {
  reveal: false,
};
