import { create } from 'zustand'

export const Store = create((set) => ({
  current:null,
  setCurrent: (current1) => set({current:current1}),
  role:null,
  setRoleAdmin: () => set({role:"admin"}),
  setRoleUser: () => set({role:"user"}),
  setRoleHost: () => set({role:"Host"}),
  setIsUser: (isUser1) => set({isUser:isUser1}),
  listings: [],
  setlistings: (listings1) => set({listings:listings1})
}));
