// Safe localStorage helpers (never crash if storage is blocked)
export const load = (k, fallback = {}) => { try { return JSON.parse(localStorage.getItem(k)) ?? fallback } catch { return fallback } }
export const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch {} }
