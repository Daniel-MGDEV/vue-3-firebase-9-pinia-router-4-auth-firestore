import {createRouter, createWebHistory} from 'vue-router'
import { useUserStore } from './stores/user'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

const requireAuth = async (to, from, next) => {
    const userStore = useUserStore();  // Obtiene la tienda de usuario
    userStore.loadingSession = true;

    try {
        const user = await userStore.currentUser();  // Llama a la función asíncrona

        if (user) {
            next();  // Usuario autenticado, permite la navegación
        } else {
            next("/login");  // No autenticado, redirige a la página de login
        }
    } catch (error) {
        console.error("Error al verificar la autenticación:", error);
        next("/login");  // En caso de error, redirige a login
    } finally {
        userStore.loadingSession = false;  // Finaliza el indicador de carga
    }
};

const routes = [
    {path: "/", component: Home, beforeEnter: requireAuth},
    {path: "/login", component: Login},
    {path: "/register", component: Register}
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;