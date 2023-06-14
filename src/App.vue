<template>
  <HeaderApp />
  <!-- chiama questo pezzo tra questi tag se la url combacia con il nome del componente specificato nelle rotte -->
  <router-view>

  </router-view>
</template>

<script>
import axios from 'axios';
import HeaderApp from './components/HeaderApp.vue';
export default {
  name: 'App',
  components: { HeaderApp },

  data() {
    return {
      projects: [],
      apiBaseUrl: 'http://127.0.0.1:8000/api/',
      endPointProjects: 'projects',
    }

  },

  methods: {
    getProjects() {
      axios.get(this.apiBaseUrl + this.endPointProjects/*, { params: { page: projectsApiPage } }*/).then((res) => {
        this.projects = res.data.results.data;
        console.log('projects : ', this.projects);
        console.log(res.data.results.data);
      })
    }
  },

  mounted() {
    this.getProjects();
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 200px;
  display: block;
}
</style>