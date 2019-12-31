<template>
  <div>
    <div class="bugDetails container-fluid">
      <div class="row">welcome to the glorious bug detials ahhhhhh</div>
      <div class="row">{{bug.title}}</div>
      <div class="col-3">{{bug.reportedBy}}</div>
      <div class="col-3">{{bug.description}}</div>
      <div class="col-3" v-if="bug.closed === false">closed</div>
      <div class="col-3" v-if="bug.closed === true">open</div>
      <button @sumbmit.prevent="editBug">Edit Bug</button>
      <button v-if="bug.closed === true " class="btn btn-danger" @click.prevent="closeBug">Close Bug</button>
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
  methods: {
    closeBug() {
      this.$store.dispatch("closeBug", this.$route.params.id);
    }
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
