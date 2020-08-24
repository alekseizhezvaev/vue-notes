<template>
  <div class="new-note">
    <div class="new-note__header">
      <h2>Title</h2>
      <p>
        select the priority note
        <select v-model="priority">
          <option value="general">general</option>
          <option value="important">important</option>
          <option value="not-important">not important</option>
        </select>
      </p>
    </div>

    <input v-model="title" type="text" />
    <label>Description</label>
    <textarea v-model="descr"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "",
      descr: "",
      priority: "general",
    };
  },
  methods: {
    addNote() {
      this.$store.dispatch("addNote", {
        title: this.title,
        descr: this.descr,
        priority: this.priority,
      });
      this.title = this.descr = "";
      this.priority = "general";
    },
  },
};
</script>

<style lang="scss" >
.new-note {
  text-align: center;
  textarea {
    margin-bottom: 30px;
  }

  &__header {
    position: relative;
    display: flex;
    justify-content: center;

    p {
      position: absolute;
      right: 0;
    }
  }
}
</style>