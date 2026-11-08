import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Club } from '../types/club'
import { getClubs } from '../services/clubService'

export const useClubsStore = defineStore('clubs', () => {
  const clubs = ref<Club[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchClubs() {
    loading.value = true
    error.value = null
    try {
      clubs.value = await getClubs()
    } catch {
      error.value = "Couldn't load clubs"
    } finally {
      loading.value = false
    }
  }

  return { clubs, loading, error, fetchClubs }
})
