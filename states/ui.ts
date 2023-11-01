'use client'

import { T_ModalState } from '@/types/styles/ui'
import { create } from 'zustand'

export const modalStore = create<T_ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}))
