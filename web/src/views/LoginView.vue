<script setup lang="ts">
import { reactive, ref } from 'vue'

const email = ref('')
const password = ref('')
const errors = reactive({ email: '', password: '' })
const valid = ref(false)

function validate(): boolean {
  errors.email = ''
  errors.password = ''

  if (!email.value.trim()) {
    errors.email = 'Email is required'
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    errors.email = 'Enter a valid email address'
  }

  if (!password.value) {
    errors.password = 'Password is required'
  } else if (password.value.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }

  return !errors.email && !errors.password
}

function onSubmit() {
  valid.value = validate()
}
</script>

<template>
  <div class="wrap">
    <form class="card" novalidate @submit.prevent="onSubmit">
      <h1>Welcome back</h1>
      <p class="sub">Log in to manage your clubs and dues</p>

      <label for="email">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="name@email.com"
        :class="{ invalid: errors.email }"
      />
      <p v-if="errors.email" class="err">{{ errors.email }}</p>

      <label for="password">Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        placeholder="At least 8 characters"
        :class="{ invalid: errors.password }"
      />
      <p v-if="errors.password" class="err">{{ errors.password }}</p>

      <p v-if="valid" class="ok">Form is valid. Real login comes in M3 with the backend.</p>

      <button type="submit">Log in</button>
    </form>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  padding-top: 24px;
}
.card {
  width: 440px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 36px 40px;
}
h1 {
  margin: 0;
  text-align: center;
  font-size: 22px;
}
.sub {
  text-align: center;
  color: var(--muted);
  margin: 6px 0 20px;
}
label {
  display: block;
  font-weight: 600;
  font-size: 13px;
  margin: 16px 0 6px;
}
input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 14px;
}
input.invalid {
  border-color: #e24b4a;
}
.err {
  color: #791f1f;
  background: #fcebeb;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  margin: 8px 0 0;
}
.ok {
  color: #085041;
  background: var(--pl);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  margin: 16px 0 0;
}
button {
  width: 100%;
  margin-top: 24px;
  background: var(--p);
  color: #fff;
  border: 0;
  border-radius: 8px;
  padding: 14px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
}
</style>
