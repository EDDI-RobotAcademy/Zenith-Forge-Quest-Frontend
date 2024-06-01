import { z } from 'zod'

// * 로그인 스키마
export const loginSchema = z.object({
  관리자_고유번호: z.string().min(1, '아이디를 입력해주세요.'),
  관리자_비밀번호: z
    .string()
    .min(1, '비밀번호를 입력해주세요.')
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다')
    .max(16, '비밀번호는 최대 16자 이하이어야 합니다.'),
})

export type LoginFormInputs = z.infer<typeof loginSchema>

// * 게시판 스키마
export const boardSchema = z.object({
  title: z.string().min(15, '제목을 15자 이상 입력하세요.'),
})

export type BoardFormInputs = z.infer<typeof boardSchema>
