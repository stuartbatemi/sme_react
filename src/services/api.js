// src/services/api.js
// ALL network calls live here. Components never call fetch/axios directly.
// This makes it easy to update URLs or add auth headers in one place.

import axios from 'axios'

const node = axios.create({
  baseURL: import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/api`
    : '/api',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
})

// Auto-attach JWT token to every Node request if logged in
node.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Auto-refresh token on 401
node.interceptors.response.use(
  res => res,
  async err => {
    const original = err.config
    if (err.response?.status === 401 && !original._retry) {
      original._retry = true
      try {
        const refresh_token = localStorage.getItem('refresh_token')
        if (!refresh_token) throw new Error('No refresh token')
        const { data } = await axios.post('/api/auth/refresh', { refresh_token })
        localStorage.setItem('access_token', data.access_token)
        original.headers.Authorization = `Bearer ${data.access_token}`
        return node(original)
      } catch (_) {
        localStorage.clear()
        window.location.href = '/login'
      }
    }
    return Promise.reject(err)
  }
)

// ── Auth ─────────────────────────────────────────────────────────
export const authAPI = {
  register: (data) => node.post('/auth/register', data),
  login:    (data) => node.post('/auth/login', data),
  logout:   ()     => node.post('/auth/logout', {
    refresh_token: localStorage.getItem('refresh_token')
  }),
}

// ── Advisory (predictions) ────────────────────────────────────────
export const advisoryAPI = {
  predict: (payload) => node.post('/advisory/predict', payload),
  history: (page = 1, limit = 10) =>
    node.get(`/advisory/history?page=${page}&limit=${limit}`),
  getSession: (id) => node.get(`/advisory/history/${id}`),
}

// ── User ──────────────────────────────────────────────────────────
export const userAPI = {
  me:      ()     => node.get('/user/me'),
  update:  (data) => node.patch('/user/me', data),
  upgrade: (data) => node.post('/user/upgrade', data),
  stats:   ()     => node.get('/user/stats'),
}

// ── Model info (districts + activities) ────────────────────────────
// These now go through the Node backend (/api/advisory/districts and
// /api/advisory/activities) instead of calling FastAPI directly from
// the browser. Node decides — based on the logged-in user's tier —
// whether to proxy to the Regular model or Lonet 2.5 (Premium), so
// Premium users searching for a business idea see Lonet 2.5's fuller
// activity catalog (covers machinga, daladala, kandoro water sellers,
// etc.) instead of always hitting the Regular model's catalog.
export const modelAPI = {
  districts:  () => node.get('/advisory/districts'),
  activities: (sector) =>
    node.get('/advisory/activities', sector ? { params: { sector } } : {}),
}
