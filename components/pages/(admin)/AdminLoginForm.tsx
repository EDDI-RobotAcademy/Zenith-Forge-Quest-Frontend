'use client'

import InputController from '@/components/common/Input/Controller'
import { StyledAdminLoginForm } from './styled'
import { useForm } from 'react-hook-form'
import { Body1, Body2 } from '@/components/common/Typography/Typography'
import Button from '@/components/common/Button/Button'
import { LoginFormInputs, loginSchema } from '@/utils/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import useUserStore from '@/store/admin/admin'
import HomeIcon from '@mui/icons-material/Home'
import SquareIconBtn from '@/components/common/SquareIconBtn/SquareIconBtn'
import { Tooltip } from '@mui/material'
import Link from 'next/link'

function AdminLoginForm() {
  const { 관리자 } = useUserStore()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: 관리자,
    mode: 'all',
  })

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data)
  }

  return (
    <StyledAdminLoginForm onSubmit={handleSubmit(onSubmit)}>
      <div className="title-container">
        <Body1 className="form-title">관리자 로그인</Body1>

        <Link className="back-link" href="/">
          <SquareIconBtn className="home-icon">
            <Tooltip title="메인페이지 이동" placement="top">
              <HomeIcon fontSize="small" />
            </Tooltip>
          </SquareIconBtn>
        </Link>
      </div>

      <div className="section-container">
        <section className="controller-container">
          <Body2 className="form-text">아이디</Body2>
          <InputController control={control} name="id" placeholder="아이디를 입력해주세요." $size="lg" />
        </section>

        <section className="controller-container">
          <Body2 className="form-text">비밀번호</Body2>

          <InputController control={control} type="password" name="password" placeholder="*******" $size="lg" />
        </section>

        <Button className="submit-btn" type="submit" size="medium" variant="contained">
          로그인
        </Button>
      </div>
    </StyledAdminLoginForm>
  )
}

export default AdminLoginForm
