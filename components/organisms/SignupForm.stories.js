export default {
  title: "Organisms/SignupForm",
};

const options = [
  { label: "essential", price: 10, data: 2000 },
  { label: "pro", price: 20, data: 4000 },
  { label: "premium", price: 40, data: 6000 },
];

const SignupFormStory = (args, { argTypes }) => ({
  template: '<SignupForm v-bind="$props"></SignupForm>',
  props: Object.keys(argTypes),
});

export const SignupForm = SignupFormStory.bind({});
SignupForm.args = {
  options,
};
SignupForm.argTypes = {
  options,
};
