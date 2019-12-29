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
      <!-- make this its own view and have a report bug button at the top of the page like "Bug" is and it will pull up a page and you can report the bug then back in the bug (home) view it will list there  and as a streach goal after you submit the bug have it return you to the bug (home) page -->
      <div>reported by</div>
      <input
        type="text"
        name="reportedBy"
        v-model="newBug.reportedBy"
        placeholder="who are you..."
      />
      <button class="btn btn-success" @submit="addBug">submit</button>
    </form>
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
