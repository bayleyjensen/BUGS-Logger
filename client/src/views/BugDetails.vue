<template>
  <div>
    <div class="bugDetails container-fluid">
      <div class="row"></div>
      <div>
        <h4 class="bugTitle">title</h4>
      </div>
      <div class="row">{{ bug.title }}</div>
      <div class="col-3">Reported by: {{ bug.reportedBy }}</div>
      <div class="col-3">Content: {{ bug.description }}</div>
      <div class="col-3" v-if="bug.closed === true">Bug Status: closed</div>
      <div class="col-3" v-if="bug.closed === false">Bug Status: open</div>
      <button v-if="bug.closed === false" @click="show">Edit Bug</button>
      <modal name="editedBugModal">
        <form @submit.prevent="editBug">
          <input
            type="text"
            name="title"
            v-model="editedBug.title"
            placeholder="New Title..."
          />
          <input
            type="text"
            name="descripton"
            v-model="editedBug.description"
            placeholder="New Descripton..."
          />
          <button @click="hide" class="btn btn-primary">
            Submit Edited Version
          </button>
        </form>
      </modal>
      <button
        v-if="bug.closed === false"
        class="btn btn-danger"
        @click.prevent="closeBug"
      >
        Close Bug
      </button>
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
  data() {
    return {
      editedBug: {
        title: "",
        description: "",
        bug: this.$route.params.id
      }
    };
  },
  mounted() {
    this.$store.dispatch("getActiveBug", this.$route.params.id);
    this.$store.dispatch("getNotesByBugId", this.$route.params.id);
  },
  methods: {
    closeBug() {
      swal({
        title: "Are you sure you want to close this Bug?",
        text: "Once you close this bug it can not be reopened!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(getsDeleted => {
        if (getsDeleted) {
          swal("Alright I Hope You Were Sure... Theres no going back now...", {
            icon: "success"
          });
          this.$store.dispatch("closeBug", this.$route.params.id);
        } else {
          swal("Bug Shall Remain Open.");
        }
      });
    },
    show() {
      this.$modal.show("editedBugModal");
    },
    hide() {
      this.$modal.hide("editedBugModal");
    },
    editBug() {
      let editedBug = { ...this.editedBug };
      this.$store.dispatch("editBug", editedBug);
      this.editedBug = {
        title: this.title,
        description: this.description,
        bug: this.$route.params.id
      };
    },
    hideOther() {
      this.$modal.hide("bugModal");
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
