<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { useClubsStore } from '../stores/clubs'

const route = useRoute()
const store = useClubsStore()

const id = Number(route.params.id)
store.fetchClub(id)
</script>

<template>
  <RouterLink to="/clubs" class="back">&larr; Back to clubs</RouterLink>

  <p v-if="store.clubLoading" class="state">Loading club...</p>

  <div v-else-if="store.clubError" class="state error">
    <p>{{ store.clubError }}</p>
    <button @click="store.fetchClub(id)">Retry</button>
  </div>

  <div v-else-if="store.club" class="layout">
    <section>
      <div class="banner">{{ store.club.name.charAt(0) }}</div>
      <h1>{{ store.club.name }}</h1>
      <h3>About this club</h3>
      <p class="desc">{{ store.club.description }}</p>
    </section>

    <aside class="card">
      <div class="label">Monthly dues</div>
      <div class="price">${{ store.club.duesAmount }}</div>
      <div class="row">
        <span>Treasurer</span><span>{{ store.club.treasurerName }}</span>
      </div>
      <div class="row">
        <span>Members</span><span>{{ store.club.memberCount }}</span>
      </div>
      <button class="wide">Request to join</button>
    </aside>
  </div>
</template>

<style scoped>
.back {
  display: inline-block;
  margin-bottom: 20px;
  color: var(--p);
  text-decoration: none;
  font-weight: 500;
}
.layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  align-items: start;
}
.banner {
  height: 150px;
  background: var(--pl);
  color: var(--p);
  font-size: 56px;
  font-weight: 700;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.desc {
  color: var(--muted);
  line-height: 1.6;
}
.card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 24px;
}
.label {
  color: var(--muted);
  font-size: 14px;
}
.price {
  font-size: 44px;
  font-weight: 700;
  color: var(--p);
  margin-bottom: 16px;
}
.row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-top: 1px solid var(--border);
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
.wide {
  width: 100%;
  margin-top: 16px;
  padding: 14px;
}
</style>
