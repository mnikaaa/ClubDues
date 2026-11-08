<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useClubsStore } from '../stores/clubs'

const store = useClubsStore()
store.fetchClubs()
</script>

<template>
  <h1>Browse clubs</h1>
  <p class="sub">Find a club and request to join.</p>

  <p v-if="store.loading" class="state">Loading clubs...</p>

  <div v-else-if="store.error" class="state error">
    <p>{{ store.error }}</p>
    <button @click="store.fetchClubs()">Retry</button>
  </div>

  <div v-else-if="store.clubs.length === 0" class="state">
    <p>No clubs yet</p>
  </div>

  <div v-else class="grid">
    <RouterLink v-for="club in store.clubs" :key="club.id" :to="`/clubs/${club.id}`" class="card">
      <div class="banner">{{ club.name.charAt(0) }}</div>
      <div class="body">
        <h3>{{ club.name }}</h3>
        <p class="meta">${{ club.duesAmount }} / month · {{ club.memberCount }} members</p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.sub {
  color: var(--muted);
  margin-bottom: 24px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
.card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
}
.banner {
  height: 70px;
  background: var(--pl);
  color: var(--p);
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.body {
  padding: 16px 20px;
}
.body h3 {
  margin: 0 0 6px;
}
.meta {
  color: var(--muted);
  margin: 0;
}
.state {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 48px;
  text-align: center;
  color: var(--muted);
}
.state.error {
  color: #791f1f;
  background: #fcebeb;
}
button {
  background: var(--p);
  color: #fff;
  border: 0;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
}
</style>
