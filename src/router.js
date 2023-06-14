import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ProjectsList from './pages/ProjectsList.vue';
import ContactMe from './pages/ContactMe.vue';
import AboutMe from './pages/AboutMe.vue';
import SingeProject from './pages/SingleProject.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({

    // per far si che le frecce del browser non smettano di funzionare
    history: createWebHashHistory(),

    //array di ogggetti per le rotte da parte di vue
    routes: [

        // Creo un oggetto con il path e il nome ddel moponente da chiamare
        {
            // obbligatori path e component, posso aggiungere anche name ma non è obbligatorio
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/singleproject/:id',
            name: 'singleproject',
            component: SingeProject
        },
        {
            path: '/about',
            name: 'about',
            component: AboutMe
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactMe
        },
        {
            path: "/:PathMatch(.*)*",
            name: 'Error',
            component: NotFoundPage
        }
    ]

});

export { router };

