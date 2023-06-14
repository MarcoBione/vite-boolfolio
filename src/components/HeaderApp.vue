<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">

        <div class="container-fluid">

            <a class="navbar-brand" href="#">Navbar</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">

                    <li class="nav-item" v-for="(route, index) in routes" :key="index">

                        <!-- per fare routing non si usano le ancore normali -->
                        <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                        <router-link :to="{ name: route.route }" class="nav-link" active-class="active">{{ route.name
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

<style lang="scss" scoped></style>