<template>
    <nav class="navbar navbar-expand-lg">

        <div class="container _mytextnav">

            <!-- <a class="navbar-brand" href="#">Marco Bione Dev.</a> -->
            <router-link :to="{ name: home }" class="nav-link _mytextnav">MarcoBione
                Dev</router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">

                    <li class="nav-item" v-for="(route, index) in routes" :key="index">

                        <!-- per fare routing non si usano le ancore normali -->
                        <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                        <router-link :to="{ name: route.route }" class="nav-link _mytextnav" active-class="_myactive">{{
                            route.name
                        }}</router-link>


                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'HeaderApp',
    data() {
        return {
            routes: [
                {
                    name: 'Home',
                    route: 'home'
                },
                {
                    name: 'Projects',
                    route: 'projects'
                },
                {
                    name: 'About',
                    route: 'about'
                },
                {
                    name: 'Contact',
                    route: 'contact'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as*;

.navbar {
    background: rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    height: 50px;
    width: 100%;
    z-index: 900;
}

._mytextnav {
    color: $bg-color;
}

._myactive {
    color: $jungle-green;
}
</style>