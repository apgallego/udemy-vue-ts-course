import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import NewPost from "./components/NewPost.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomeView
        },
        {
            path: "/posts/new",
            component: NewPost
        }
    ]
});