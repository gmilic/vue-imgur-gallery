<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">
      Image Storage
    </router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="ui item" >
          Galleries
        </router-link>
        <router-link to="/upload" class="ui item" >
          Upload
        </router-link>
        <a class="ui item" @click="logout">
          Logout
        </a>
      </div>
      <a class="ui item" @click="login" v-else>
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
}
</script>

<style scoped>
  .horizontal {
    display: flex;
    flex-direction: row;
  }
</style>
