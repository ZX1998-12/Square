import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FloatingContact from '../FloatingContact/FloatingContact'
import styled from 'styled-components'

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
  padding-top: 64px; // Header高度
`

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <FloatingContact />
    </LayoutWrapper>
  )
}

export default Layout 