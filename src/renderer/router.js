import {createWebHashHistory, createRouter} from 'vue-router';
import Config from './views/Config.vue';
import Home from './views/Home.vue';
import Plugin from './views/Plugin.vue';
import Plugins from './views/Plugins.vue';
import Updates from './views/Updates.vue';
import Testing from './views/Testing.vue';
import LoginReg from './views/LoginReg.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: Plugins,
  },
  {
    path: '/plugins/:id',
    component: Plugin,
  },
  {
    path: '/updates',
    name: 'Updates',
    component: Updates,
  },
  {
    path: '/config',
    name: 'Config',
    component: Config,
  },
  {
    path: '/testing',
    name: 'testing',
    component: Testing,
  },
  {
    path: '/loginreg',
    name: 'Login / Register',
    component: LoginReg,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
