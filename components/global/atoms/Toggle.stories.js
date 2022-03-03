export default {
  title: "Atoms/Toggle",
};

const ToggleStory = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<Toggle v-bind="$props" />',
});

export const Toggle = ToggleStory.bind({});
Toggle.args = {
  onText: "on",
  offText: "off",
};
Toggle.argTypes = {
  onText: {
    control: {
      type: "text",
    },
  },
  offText: {
    control: {
      type: "text",
    },
  },
};
