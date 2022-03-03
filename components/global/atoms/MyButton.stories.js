export default {
  title: "Atoms/Button",
};

const ButtonStory = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<MyButton v-bind="$props">{{ label }}</MyButton>',
});

export const Button = ButtonStory.bind({});
Button.args = {
  label: "Button",
};

Button.argTypes = {
  type: {
    control: {
      type: "select",
      options: ["primary", "secondary"],
    },
  },
  label: {
    control: {
      type: "text",
    },
  },
};
