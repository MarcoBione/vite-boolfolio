<template>
  <div>

    <div class="container border border-2">
      <div class="row">
        <div class="col">

          <div class="card" v-for="project in projects">

            <img :src="project.image" class="card-img-top" alt="...">

            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text">//</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      projects: [],
      apiBaseUrl: 'http://127.0.0.1:8000/api/',
      endPointProjects: 'projects',
    }

  },

  methods: {
    getProjects() {
      axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
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

<style lang="scss" scoped></style>