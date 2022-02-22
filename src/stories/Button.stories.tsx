import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "components/Button/Button";
import { ICommonProps } from "utils";

export interface IButtonProps extends ICommonProps {
  type?: "primary" | "default";
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  console.log("args", args);

  return <Button {...args}>{args.children}</Button>;
};

export const Primary = (args: IButtonProps) => (
  <Button {...args}>Primary</Button>
);
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: true,
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;
