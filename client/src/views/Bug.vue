<template>
  <div class="bug container-fluid">
    WELCOME TO THE BUG VIEW
    <div class="row">
      <div class="col">
        <button class="btn btn-primary" @click="show">report Bug</button>
        <modal name="bugModal">
          <addBug />
        </modal>
      </div>
      <div class="col">
        <input
          v-if="showOpen"
          type="checkbox"
          name="showOpen"
          v-on:click="showOpen = !showOpen"
        />show open bugs
      </div>
      <div class="col-12">
        <ul>
          <!-- FIXME Add a v-if on 'showOpen' -->
          <li class="d-flex" id="Bugs" v-for="bug in bugs" :key="bug._id">
            <div class="col-3">
              Bug Title:
              <router-link
                :to="{ name: 'bugDetails', params: { id: bug._id } }"
                >{{ bug.title }}</router-link
              >
            </div>
            <div class="col-3">Reporter: {{ bug.reportedBy }}</div>
            <div id="red" class="col-3" v-if="bug.closed === true">
              Bug Current Status: <s>closed</s>
            </div>
            <div id="green" class="col-3" v-if="bug.closed === false">
              Bug Current Satus: open
            </div>
            <div class="col-3">{{ bug.updatedAt }}</div>
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
      showOpen: false
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
      return this.$store.state.bugs;
    },
    filteredBugs() {
      return this.$store.state.bugs.filter(bugs => bug.closed === false);
    },
    //FIXME create computed for "filteredBugs"
    date() {
      let d = new Date(this.bugData.updatedAt);
      return d.toLocalDateString();
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
