import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import ProjectsList from './pages/ProjectsList';
import ContactMe from './pages/ContactMe';
import AboutMe from './pages/AboutMe';
import SingeProject from './pages/SingeProject';
import NotFoundPage from './pages/NotFoundPage';

const router = createRouter({

    // per far si che le frecce del browser non smettano di funzionare
    history: createWebHashHistory(),

    //array di ogggetti per le rotte da parte di vue
    routes: [

        // Creo un oggetto con il path e il nome ddel moponente da chiamare
        {
            // obbligatori path e component, posso aggiungere anche name ma non è obbligatorio
            path: '/',
            component: HomePage
        },
        {
            path: '/projects',
            component: ProjectsList
        },
        {
            path: '/singleproject/:id',
            component: SingeProject
        },
        {
            path: '/about',
            component: AboutMe
        },
        {
            path: '/contact',
            component: ContactMe
        },
        {
            path: "/:PathMatch(.*)*",
            component: NotFoundPage
        }
    ]

});

export { router };

