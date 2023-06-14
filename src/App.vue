<template>
  <div>
    <div class="page-bg"></div>



    <div class="animation-wrapper">

      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
      <div class="particle particle-4"></div>

      <HeaderApp />

      <main>
        <!-- chiama questo pezzo tra questi tag se la url combacia con il nome del componente specificato nelle rotte -->
        <router-view class="_myview">

        </router-view>
      </main>

      <FooterApp />

    </div>


  </div>
</template>

<script>
import axios from 'axios';
import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';
export default {
  name: 'App',
  components: { HeaderApp, FooterApp },

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
        //console.log('projects : ', this.projects);
        //console.log(res.data.results.data);
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

._myview {
  height: calc(100vh - 100px);
  width: 100%;
  display: block;
}
</style>