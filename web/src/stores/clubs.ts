import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Club } from '../types/club'
import { getClubs, getClub } from '../services/clubService'

export const useClubsStore = defineStore('clubs', () => {
  // list of clubs
  const clubs = ref<Club[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // one selected club (for the detail page)
  const club = ref<Club | null>(null)
  const clubLoading = ref(false)
  const clubError = ref<string | null>(null)

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

  async function fetchClub(id: number) {
    clubLoading.value = true
    clubError.value = null
    club.value = null
    try {
      club.value = await getClub(id)
    } catch {
      clubError.value = "Couldn't load this club"
    } finally {
      clubLoading.value = false
    }
  }

  return { clubs, loading, error, fetchClubs, club, clubLoading, clubError, fetchClub }
})
