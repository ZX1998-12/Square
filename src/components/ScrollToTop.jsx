import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // 每次路由变化时滚动到页面顶部
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop 