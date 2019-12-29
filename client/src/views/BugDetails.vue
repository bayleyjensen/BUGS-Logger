<template>
  <div>
    <div class="bugDetails container-fluid">
      <div class="row">welcome to the glorious bug detials ahhhhhh</div>
      <div class="row">{{bug.title}}</div>
      <div class="col-6">{{bug.reportedBy}}</div>
      <div class="col-6">{{bug.description}}</div>
    </div>
    <div class="butNotes container-fluid">
      <div class="row">
        <h1>Notes</h1>
      </div>
      <div>
        <addNote />
        <ol>
          <li v-for="comment in comments" :key="comment._id">{{note}}</li>
        </ol>
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
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  },
  components: {}
};
</script>

<style></style>
