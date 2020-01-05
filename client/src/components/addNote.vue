<template>
  <div class="addNote">
    <form @submit.prevent="addNote">
      <input
        type="text"
        name="reportedBy"
        v-model="newNote.reportedBy"
        placeholder="who are you?"
      />
      <input
        type="text"
        name="contents"
        v-model="newNote.content"
        placeholder="type here..."
      />
      <button type="submit" class="btn btn-primary">submit</button>
    </form>
    <div>
      <ol>
        <li v-for="note in notes" :key="note._id">
          {{ note.reportedBy }},{{ note.content }}
          <button class="btn btn-danger" @click.prevent="deleteNote">
            Delete
          </button>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "addNote",
  props: ["noteData"],
  data() {
    return {
      newNote: {
        reportedBy: "",
        content: "",
        bug: this.$route.params.id
      }
    };
  },
  methods: {
    addNote() {
      let note = { ...this.newNote };

      this.newNote = {
        reportedBy: "",
        content: "",
        bug: this.$route.params.id
      };
      this.$store.dispatch("addNote", note);
    },
    deleteNote() {
      let note = {
        noteId: this.newNote._id,
        bugId: this.newNote.bug
      };
    }
  },
  computed: {
    notes() {
      console.log("this is my active notes", this.$store.state.activeNotes);
      return this.$store.state.activeNotes;
    }
  }
};
</script>

<style></style>
