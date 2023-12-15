'use client'

import { M_Board } from '@/types/model/board'
import { create } from 'zustand'

type T_BoardState = {
  board: M_Board.I_BoardData
  updateTitle: (newTitle: string) => void
}

const initialState: M_Board.I_BoardData = {
  boardId: 0,
  title: '',
  writer: '',
  content: '',
}

const useBoardStore = create<T_BoardState>((set) => ({
  board: initialState,
  updateTitle: (newTitle) => set((state) => ({ board: { ...state.board, title: newTitle } })),
}))

export default useBoardStore
