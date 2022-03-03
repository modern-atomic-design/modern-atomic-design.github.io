export default {
  title: "Molecules/PlanCard",
};

const options = [
  { label: "essential", price: 10, data: 2000 },
  { label: "pro", price: 20, data: 4000 },
  { label: "premium", price: 40, data: 6000 },
];

const PlanCardStory = (args, { argTypes }) => ({
  template: '<PlanCard v-bind="$props"></PlanCard>',
  props: Object.keys(argTypes),
});

export const PlanCard = PlanCardStory.bind({});
PlanCard.args = {
  option: options[2],
  selected: true,
};
PlanCard.argTypes = {
  selected: {
    options: [false, true],
    control: { type: "radio" },
  },
};
