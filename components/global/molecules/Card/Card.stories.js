export default {
  title: "Molecules/Card",
};

const CardStory = (args, { argTypes }) => ({
  template:
    '<Card v-bind="$props"><p class="text-gray-600 text-xl py-3">Card title</p></Card>',
  props: Object.keys(argTypes),
});

export const Card = CardStory.bind({});
Card.args = {
  link: "",
  buttonLabel: "button",
};
Card.argTypes = {
  link: {
    control: {
      type: "text",
    },
  },
  buttonLabel: {
    control: {
      type: "text",
    },
  },
};
