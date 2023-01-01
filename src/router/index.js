import { createRouter, createWebHistory } from 'vue-router'
import RickMortyView from "../views/RickMortyView.vue"
import NotFound from "../views/404.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"RickMorty",
      component:RickMortyView
    },
    { 
      path:"/:catchall(.*)*",
      name:"NotFound",
      component:NotFound

    }
  ]
})

export default router;
