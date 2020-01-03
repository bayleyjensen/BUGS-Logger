<template>
  <div class="bug container-fluid">
    WELCOME TO THE BUG VIEW
    <div class="row">
      <div class="col">
        <button class="btn btn-success" @click="show">report Bug</button>
        <modal name="bugModal">
          <addBug />
        </modal>
      </div>
      <div class="col-12">
        <ul>
          <li class="d-flex" id="Bugs" v-for="bug in bugs" :key="bug._id">
            <div class="col-4">
              Bug Title:
              <router-link
                :to="{ name: 'bugDetails', params: { id: bug._id } }"
                >{{ bug.title }}</router-link
              >
            </div>
            <div class="col-4">Reporter: {{ bug.reportedBy }}</div>
            <div class="col-4" v-if="bug.closed === true">
              Bugs Current Status: closed
            </div>
            <div class="col-4" v-if="bug.closed === false">
              Bug Current Satus: open
            </div>
          </li>
        </ul>
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
  methods: {
    show() {
      this.$modal.show("bugModal");
    },
    hide() {
      this.$modal.hide("bugModal");
    }
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

<style>
#Bugs {
  text-align: center;
  margin-top: 2em;
  border: solid;
  height: 2em;
}
</style>
