import {createRouter, createWebHistory} from  'vue-router';
import Home from '../views/Home.vue';
import UsersView from '../views/Users.vue';
import LoginView from '../views/Login.vue';
import ProfileView from '../views/ProfileView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: HomeView },
  { path: '/users', component: UsersView },
   { path: '/login', component: LoginView },
   {
    path: '/profile',
    component: ProfileView,
    beforeEnter: (to, from, next) => {
    const token = localStorege.getItem('token') ;
if (token) {
  next('login');
}else{
  next();
}
   }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
