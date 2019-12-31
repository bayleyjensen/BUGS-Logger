<template>
  <div class="bug container-fluid">
    WELCOME TO THE BUG VIEW
    <div class="row">
      <div class="col">
        <input type="checkbox" v-model="drawAddBug" />add bug
        <br />
        <span v-if="drawAddBug">
          <addBug />
        </span>
        <br />
      </div>
      <div class="col-12">
        <ol>
          <li v-for="bug in bugs" :key="bug._id">
            <router-link :to="{ name: 'bugDetails', params: { id: bug._id } }">{{ bug.title }}</router-link>
            , {{bug.closed}}
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
  data() {
    return {
      drawAddBug: false
    };
  },
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
