'use client'

import { modalStore } from '@/states/ui'

export function useModal() {
  const { isOpen, openModal, closeModal } = modalStore()
  return { isOpen, openModal, closeModal }
}
