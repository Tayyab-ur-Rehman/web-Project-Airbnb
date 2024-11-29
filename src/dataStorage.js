import { create } from 'zustand'

export const Store = create((set) => ({
  listings: [],
  setlistings: (listings1) => set({listings:listings1})
}));
