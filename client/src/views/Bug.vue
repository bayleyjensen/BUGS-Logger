<template>
  <div class="bug container-fluid">
    WELCOME TO THE BUG VIEW
    <div class="row">
      <div class="col">
        <addBug />
      </div>
      <div class='col-12'>
        <ol>
          <li v-for="bug in bugs" :key="bug._id">
            <router-link :to="{ name: 'bugDetails', params: { id: bug._id } }">
              {{ bug.title }}</router-link
            >
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import addBug from "../components/addBug";
export default {
  name: "bug",
  mounted() {
    this.$store.dispatch("getAllBugs");
  },
  components: {
    addBug
  },
  computed: {
    bugs() {
      console.log(this.$store.state.bugs);
      return this.$store.state.bugs;
    }
  }
};
</script>
