import type { Club } from '../types/club'

const API_URL = 'http://localhost:3000'

export async function getClubs(): Promise<Club[]> {
  const res = await fetch(`${API_URL}/clubs`)
  if (!res.ok) throw new Error('Failed to load clubs')
  return res.json()
}

export async function getClub(id: number): Promise<Club> {
  const res = await fetch(`${API_URL}/clubs/${id}`)
  if (!res.ok) throw new Error('Failed to load club')
  return res.json()
}
