import React, { useState, useEffect } from "react";
import { Secret } from "./Secret.component";

export default {
  title: "WIP/Secret",
  component: Secret,
  argTypes: {},
};

const Template = ({ ...args }) => {
  return <Secret {...args} />;
};

export const Default = {
  render: Template,
  args: {},
};
