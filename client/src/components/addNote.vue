<template>
  <div class="addNote">
    <form @submit.prevent="addNote">
      <input type="text" name="reportedBy" v-model="newNote.reportedBy" placeholder="who are you?" />
      <input type="text" name="contents" v-model="newNote.content" placeholder="type here..." />
    </form>
  </div>
</template>

<script>
export default {
  name: "add-note",
  data() {
    return {
      newComment: {
        reportedBy: "",
        content: ""
      }
    };
  },
  methods: {
    addNote() {
      let note = { ...this.newComment };
      this.$store.dispatch("addNote", note);
      this.newComment = {
        reportedBy: "",
        content: ""
      };
    }
  }
};
</script>

<style>
</style>