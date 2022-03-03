export default {
  title: "Molecules/PlanSelector",
};

const options = [
  { label: "essential", price: 10, data: 2000 },
  { label: "pro", price: 20, data: 4000 },
  { label: "premium", price: 40, data: 6000 },
];

const PlanSelectorStory = (args, { argTypes }) => ({
  template: '<PlanSelector v-bind="$props"></PlanSelector>',
  props: Object.keys(argTypes),
});

export const PlanSelector = PlanSelectorStory.bind({});
PlanSelector.args = {
  options,
};
