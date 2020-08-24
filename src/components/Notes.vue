<template>
  <div class="notes">
    <div class="note" :class=" {full: !getGrid} " v-for="(note, index) in getNotes" :key="index">
      <div class="note-header" :class=" {full: !getGrid} ">
        <p :class="note.priority">{{ note.title }}</p>
        <p style="cursor: pointer" @click="deleteNote(index)">x</p>
      </div>
      <div class="note-body">
        <p>{{note.descr}}</p>
        <span>{{note.date}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      notes: null,
    };
  },
  methods: {
    ...mapActions(["deleteNote", "noteFiltered"]),
  },
  computed: {
    ...mapGetters(["getNotes", "getGrid", "getSearch"]),
  },
};
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}

.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #fff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba($color: #000000, $alpha: 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba($color: #000000, $alpha: 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
}

.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 20px;

    &.important {
      color: red;
    }

    &.general {
      color: rgb(37, 8, 202);
    }

    &.not-important {
      color: #ccc;
    }
  }
  svg {
    margin-right: 12px;
    color: #999;
    cursor: pointer;
    &.active {
      color: cornflowerblue;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  &.full {
    justify-content: center;

    p {
      margin-right: 16px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}

.note-body {
  p {
    margin: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999;
  }
}
</style>