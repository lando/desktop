<template>
  <div>
    <el-row>
      <h2>Login</h2>
      <el-col>
        <el-button @click="login">
          Login
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <h2>Register</h2>
      <el-col>
        <el-button @click="register">
          Register
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <h2>Log Out</h2>
      <el-col>
        <el-button @click="logout">
          Log Out
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
const {auth} = window;
import {openInBrowser} from '../composables/electron-actions';

// test Login
async function login() {
  const url = await auth.getLoginUrl();
  openInBrowser(url);
}

function register() {
  alert('hello there');
}

// test logout
async function logout() {
  const url = await auth.getLogOutUrl();
  openInBrowser(url);
}
</script>

<style lang="scss" scoped>

</style>
