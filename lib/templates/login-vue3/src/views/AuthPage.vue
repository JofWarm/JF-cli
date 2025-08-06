<template>
    <div class="auth-container">
      <LoginForm v-if="showLogin" @switch="showLogin = false" />
      <RegisterForm v-else @switch="showLogin = true" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import LoginForm from '../components/LoginForm.vue'
  import RegisterForm from '../components/RegisterForm.vue'
  
  const showLogin = ref(true)
  </script>
  
  <style scoped>
  .auth-container {
    max-width: 400px;
    margin: 100px auto;
  }
  </style>
  