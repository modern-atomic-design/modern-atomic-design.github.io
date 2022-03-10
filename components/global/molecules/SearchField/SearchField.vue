<template>
  <div class="flex">
    <TextField
      class="h-14 rounded-r-none border-primary"
      type="text"
      placeholder="What is love..."
    />
    <Button class="h-14 rounded-l-none">Search</Button>
  </div>
</template>
<script>
import Button from "@/components/global/atoms/MyButton";
import TextField from "@/components/global/atoms/TextField.vue";
export default {
  components: { TextField, Button },
  name: "SearchField",
};
</script>
