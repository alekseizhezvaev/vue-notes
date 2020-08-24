<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <message v-if="getMessage" />

          <newNote />

          <div style="margin: 36px 0" class="note-header">
            <!-- title -->
            <h1>Notes App</h1>

            <!-- search -->

            <search placeholder="Find your note" />

            <!-- icons controls -->
            <div class="icons">
              <svg
                :class="{ active: getGrid }"
                @click="SET_GRID"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              <svg
                :class="{ active: !getGrid }"
                @click="SET_GRID"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3" y2="6" />
                <line x1="3" y1="12" x2="3" y2="12" />
                <line x1="3" y1="18" x2="3" y2="18" />
              </svg>
            </div>
          </div>

          <notes />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from "@/components/Message.vue";
import newNote from "@/components/NewNote.vue";
import notes from "@/components/Notes.vue";
import search from "@/components/Search.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    message,
    newNote,
    notes,
    search,
  },
  created() {},
  computed: {
    ...mapGetters(["getMessage", "getGrid"]),
  },
  methods: {
    ...mapMutations(["SET_GRID"]),
  },
};
</script>

