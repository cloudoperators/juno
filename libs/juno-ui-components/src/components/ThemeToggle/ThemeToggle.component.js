import React, { useState, useEffect, useId } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/";
import { Icon } from "../Icon/";

export const ThemeToggle = ({
  className,
  disabled,
  id,
  name,
  onToggleTheme,
  theme,
  ...props
}) => {
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const handleClick = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    onToggleTheme && onToggleTheme(newTheme);
  };

  return (
    <Button
      className={`juno-themetoggle ${className}`}
      disabled={disabled}
      name={name}
      onClick={handleClick}
      {...props}
    >
      {currentTheme}
    </Button>
  );
};

ThemeToggle.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onToggleTheme: PropTypes.func,
  theme: PropTypes.oneOf(["dark", "light"]),
};

ThemeToggle.defaultProps = {
  className: "",
  disabled: false,
  id: "",
  name: undefined,
  onToggleTheme: undefined,
  theme: "dark",
};
