<template>
  <div>
    <div class="bugDetails container-fluid">
      <div class="row">welcome to the glorious bug detials ahhhhhh</div>
      <div class="row">{{bug.title}}</div>
      <div class="col-3">{{bug.reportedBy}}</div>
      <div class="col-3">{{bug.description}}</div>
      <div class="col-3">{{bug.closed}}</div>
    </div>
    <div class="bugNotes container-fluid">
      <div class="row">
        <h1>Notes</h1>
      </div>
      <div>
        <addNote />
      </div>
    </div>
  </div>
</template>

<script>
import addNote from "../components/addNote";
export default {
  name: "bugDetails",
  mounted() {
    this.$store.dispatch("getActiveBug", this.$route.params.id);
    this.$store.dispatch("getNotesByBugId", this.$route.params.id);
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },
    note() {
      return this.$store.state.ActiveNotes;
    }
  },
  components: {
    addNote
  }
};
</script>

<style></style>
