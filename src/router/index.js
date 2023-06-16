import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import Category from "@/views/Category.vue";
import NewExpense from "@/views/NewExpense.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/categorie",
        name: "Category",
        component: Category,
    },
    {
        path: "/creer-depense",
        name: "NewExpense",
        component: NewExpense,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;