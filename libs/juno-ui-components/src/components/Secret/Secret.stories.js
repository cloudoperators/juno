import React from "react";
import { Secret } from "./index.js";

const Template = ({ ...args }) => {
  return <Secret {...args} />;
};

export default {
  title: "WIP/Secret",
  component: Secret,
};

export const Default = {
  render: Template,
  args: {},
};
