<template>
  <el-menu
    v-if="!store.hideSidebar"
    default-active="/"
    class="el-menu-vertical-demo"
    :router="true"
  >
    <el-menu-item index="/">
      <img
        class="lando-logo"
        src="/images/lando-logo.svg"
      >
    </el-menu-item>
    <el-menu-item index="/plugins">
      <el-icon><grid /></el-icon>
      <template #title>
        Plugins
      </template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><mostly-cloudy /></el-icon>
      <template #title>
        Cloud Projects
      </template>
    </el-menu-item>
    <el-menu-item index="/updates">
      <el-icon><download /></el-icon>
      <template #title>
        Updates
      </template>
    </el-menu-item>

    <div class="testing">
      <el-menu-item
        v-if="!isProd"
        index="/testing"
      >
        <el-icon><setting /></el-icon>
        <template #title>
          Testing
        </template>
      </el-menu-item>
    </div>

    <div class="bottom-menu">
      <el-menu-item index="/loginreg">
        <el-icon><avatar /></el-icon>
        <template #title>
          Login/Register
        </template>
      </el-menu-item>
      <el-menu-item index="/config">
        <el-icon><setting /></el-icon>
        <template #title>
          Config
        </template>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script setup>
import {
  Grid,
  Lock,
  MostlyCloudy,
  Avatar,
  Download,
  Setting,
} from '@element-plus/icons-vue';
import {useInstallerStore} from '../stores/installer.js';

const store = useInstallerStore();

const isProd = (process.env.NODE_ENV !== 'development');
</script>

<style lang="scss">

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 14rem;
  min-height: 400px;
  position: initial;
  margin-right: 2rem;
}

.el-menu {
  height: 100vh;
  float: left;
  display: flex;
  flex-direction: column;
  position: fixed;
  font-family: "Lexend";
  .lando-logo {
    height: 2rem;
  }
  .bottom-menu {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
}

.el-popper {
  font-family: "Lexend";
}

.testing {
  padding: 1em 0;
}
</style>
