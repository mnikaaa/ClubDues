<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <RouterLink to="/clubs" class="logo">ClubDues</RouterLink>
    <nav>
      <RouterLink to="/clubs">Clubs</RouterLink>
      <RouterLink to="/my-payments">My payments</RouterLink>
      <RouterLink to="/login">Log in</RouterLink>
    </nav>
  </header>

  <main class="page">
    <RouterView />
  </main>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 64px;
  background: #fff;
  border-bottom: 1px solid var(--border);
}
.logo {
  font-size: 20px;
  font-weight: 700;
  color: var(--p);
  text-decoration: none;
}
nav {
  display: flex;
  gap: 28px;
}
nav a {
  color: var(--muted);
  text-decoration: none;
}
nav a.router-link-active {
  color: var(--p);
  font-weight: 600;
}
.page {
  max-width: 1344px;
  margin: 0 auto;
  padding: 32px 48px;
}
</style>
