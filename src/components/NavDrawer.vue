<template>
  <v-navigation-drawer
    v-model="isToggled"
    absolute
    temporary
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        active-class="deep-blue--text text--accent-4"
      >
        <v-list-item @click="go('/')">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item @click="go('/learn/alphabet')">
          <v-list-item-icon>
            <v-icon>mdi-alphabetical</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Alphabet</v-list-item-title>
        </v-list-item>

        <v-list-item @click="go('/learn/words')">
          <v-list-item-icon>
            <v-icon>mdi-book-open</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Words</v-list-item-title>
        </v-list-item>

        <v-list-item @click="go('/learn/symbols')">
          <v-list-item-icon>
            <v-icon>mdi-ampersand</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Symbols</v-list-item-title>
        </v-list-item>

        <v-list-item @click="go('/learn/arrows')">
          <v-list-item-icon>
            <v-icon>mdi-arrow-right-bold</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Arrows</v-list-item-title>
        </v-list-item>

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: [
      'showDrawer'
    ],
    computed: {
      isToggled: { 
        get: function () {
          return this.showDrawer || null;
        },
        set: function (e) {
          if (e !== this.showDrawer) this.$emit('toggleDrawer', e);
        }
      },
    },
    methods: {
      go: function(link) {
        console.log('going ', link);
        if (this.$router.currentRoute.path === link) return;
        this.$router.push(link)
      }
    }
  }
</script>

<style scoped>

</style>