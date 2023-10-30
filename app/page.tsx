import Footer from '@/components/layouts/Footer/Footer'
import Header from '@/components/layouts/Header/Header'
import HomeCard from '@/components/pages/(home)/HomeCard'
import Container from '@mui/material/Container/Container'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Header />
      <Container>
        <HomeCard />
      </Container>

      <Footer />
    </main>
  )
}
