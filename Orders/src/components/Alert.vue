<template>
  <v-alert
    v-model="show"
    color="color"
    title="title"
    text="text"
    closable
  ></v-alert>
</template>

<script>
  export default {
    props: {
      show: { type: Boolean },
      color: { type: String },
      title: { type: String },
      text: { type: String }
    },

    setup(props) {
      return {}
    },
  }
</script>