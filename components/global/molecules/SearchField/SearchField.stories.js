export default {
  title: "Molecules/SearchField",
};

const SearchFieldStory = (args, { argTypes }) => ({
  template: '<SearchField v-bind="$props"></SearchField>',
  props: Object.keys(argTypes),
});

export const SearchField = SearchFieldStory.bind({});
SearchField.args = {};
SearchField.argTypes = {};
