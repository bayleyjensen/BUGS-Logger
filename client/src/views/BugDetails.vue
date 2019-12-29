<template>
  <div class="bugDetails">
    <div>
      welcome to the glorious bug detials ahhhhhh
    </div>
    <div>
      {{bug}}
    </div>
  </div>
  </div> 
</template>

<script>
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
