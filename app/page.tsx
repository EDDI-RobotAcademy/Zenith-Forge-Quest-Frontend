import { H2 } from '@/components/common/Typography/Typography'
import Footer from '@/components/layouts/Footer/Footer'
import Header from '@/components/layouts/Header/Header'
import MainCard from '@/components/pages/(main)/MainCard'
import Container from '@mui/material/Container/Container'
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <H2>test</H2>
        <MainCard />
        <H2>test</H2>
        <H2>test</H2>
      </Container>

      <Footer />
    </React.Fragment>
  )
}
