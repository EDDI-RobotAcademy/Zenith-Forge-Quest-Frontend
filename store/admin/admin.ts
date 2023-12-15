'use client'

import { T_관리자 } from '@/types/model/admin'
import { create } from 'zustand'

type T_관리자_상태 = {
  관리자: T_관리자
  관리자_고유번호_업데이트: (새로운_관리자_고유번호: string) => void
  관리자_비밀번호_업데이트: (새로운_관리자_비밀번호: string) => void
}

const 초기_상태값: T_관리자 = {
  관리자_고유번호: '',
  관리자_비밀번호: '',
}

const useUserStore = create<T_관리자_상태>((set) => ({
  관리자: 초기_상태값,
  관리자_고유번호_업데이트: (새로운_관리자_고유번호) =>
    set((state) => ({ 관리자: { ...state.관리자, 관리자_고유번호: 새로운_관리자_고유번호 } })),
  관리자_비밀번호_업데이트: (새로운_관리자_비밀번호) =>
    set((state) => ({ 관리자: { ...state.관리자, 관리자_비밀번호: 새로운_관리자_비밀번호 } })),
}))

export default useUserStore
