<template>
    <footer class="d-flex">
        <div class="container d-flex align-items-center justify-content-between">
            <div>
                <h3 class="m-0">Marco Bione Dev.</h3>
            </div>


            <div>
                <ul class="m-0">
                    <li class="list-unstyled m-0">
                        {{ credits }} <a href="https://github.com/MarcoBione" class="text-decoration-none">@Marco Bione</a>
                    </li>
                </ul>
            </div>



        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterApp',
    data() {
        return {
            credits: 'Made with 💖 by',
            rights: 'All rights reserved',
            year: '2023'
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as*;

footer {
    background: rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    height: 50px;
    width: 100%;
}

li {
    color: $jungle-green;

    a {
        color: $jungle-green;
    }

    a:hover {
        color: $tiffany-blue;
    }
}
</style>