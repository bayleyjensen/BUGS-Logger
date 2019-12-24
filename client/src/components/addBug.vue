<template>
  <div class="addBug">
    <form @submit.prevent="addBug">
      <div>title</div>
      <input
        type="text"
        name="title"
        v-model="newBug.title"
        placeholder="Title..."
      />
      <div>description</div>
      <input
        type="text"
        name="description"
        v-model="newBug.description"
        placeholder="description..."
      />
      <div>reported by</div>
      <input
        type="text"
        name="reportedBy"
        v-model="newBug.reportedBy"
        placeholder="who are you..."
      />
    </form>
    <button class="btn btn-success" @submit="addBug">submit</button>
  </div>
</template>

<script>
export default {
  name: "add-bug",
  data() {
    return {
      newBug: {
        closed: false,
        description: "",
        title: "",
        reportedBy: ""
      }
    };
  },
  methods: {
    addBug() {
      let bug = { ...this.newBug };
      this.$store.dispatch("addBug", bug);
      this.newBug = {
        closed: false,
        description: "",
        title: "",
        reportedBy: ""
      };
    }
  }
};
</script>

<style></style>
