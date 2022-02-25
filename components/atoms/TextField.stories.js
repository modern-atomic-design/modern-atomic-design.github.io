export default {
  title: "Atoms/TextField",
};

const TextFieldStory = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<TextField v-bind="$props" />',
});

export const TextField = TextFieldStory.bind({});

TextField.args = {
  placeholder: "placeholder",
};

TextField.argTypes = {
  placeholder: {
    control: {
      type: "text",
    },
  },
};
