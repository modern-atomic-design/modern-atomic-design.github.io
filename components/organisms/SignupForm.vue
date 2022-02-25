<template>
  <div class="p-4">
    <div class="grid grid-cols-2 mb-8 items-end place-items-end">
      <h2 class="text-4xl">
        Choose the amount of storage that's right for you.
      </h2>
      <Toggle on-label="Bill monthly" off-label="Bill yearly" />
    </div>
    <div class="border-b-2 my-8"></div>
    <div class="grid grid-cols-2">
      <div class="grid gap-4 pr-8">
        <TextField
          class="w-full"
          placeholder="Full name"
          type="text"
          name="fullName"
          v-model="form.name"
        />
        <TextField
          class="w-full"
          placeholder="Email"
          type="email"
          name="email"
          v-model="form.email"
        />
        <TextField
          class="w-full"
          placeholder="Password"
          type="password"
          name="password"
          v-model="form.password"
        />
        <TextField
          class="w-full"
          placeholder="Card number"
          type="number"
          name="cardnumber"
          v-model="form.cardnumber"
        />
        <div class="w-full self-end">
          <Button class="w-full"><span>Create Account</span></Button>
        </div>
      </div>
      <div><PlanSelector :options="options" /></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignupForm",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        cardnumber: "",
      },
    };
  },
};
</script>
