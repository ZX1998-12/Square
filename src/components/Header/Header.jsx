import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Dropdown, Button, Modal } from 'antd'
import { MenuOutlined, DownOutlined, CustomerServiceOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #1890ff;
  
  &:hover {
    color: #40a9ff;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled(Link)`
  position: relative;
  color: ${props => props.$active ? '#1890ff' : '#333'};
  font-weight: ${props => props.$active ? '600' : '400'};
  padding: 6px 0;
  
  &:hover {
    color: #1890ff;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background: #1890ff;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

const NavDropdownTrigger = styled.span`
  position: relative;
  color: ${props => props.$active ? '#1890ff' : '#333'};
  font-weight: ${props => props.$active ? '600' : '400'};
  padding: 6px 0;
  cursor: pointer;
  
  &:hover {
    color: #1890ff;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background: #1890ff;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

const Actions = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`

const Header = () => {
  const location = useLocation()
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

  const productsMenuItems = [
    {
      key: "gpu-cloud",
      label: <Link to="/products#gpu-cloud">GPU云服务器</Link>
    },
    {
      key: "cpu-server",
      label: <Link to="/products#cpu-server">CPU云服务器</Link>
    },
    {
      key: "bare-metal",
      label: <Link to="/products#bare-metal">裸金属服务器</Link>
    },
    {
      key: "storage",
      label: <Link to="/products#storage">存储服务</Link>
    }
  ]

  const solutionsMenuItems = [
    {
      key: "ai",
      label: <Link to="/solutions/ai">人工智能</Link>
    },
    {
      key: "manufacturing",
      label: <Link to="/solutions/manufacturing">智能制造</Link>
    },
    {
      key: "research",
      label: <Link to="/solutions/research">科研教育</Link>
    },
    {
      key: "cloud",
      label: <Link to="/solutions/cloud">混合云</Link>
    }
  ]

  // 处理联系客服点击事件
  const handleContactClick = () => {
    Modal.info({
      title: '联系客服',
      content: (
        <div style={{ textAlign: 'center' }}>
          <img src="/figure.jpg" alt="客服二维码" style={{ width: 200, height: 200, marginBottom: 16 }} />
          <p>扫码添加客服微信，获取专属服务</p>
          <p>客服热线：400-888-8888</p>
          <p>邮箱：sales@square.com</p>
        </div>
      ),
      width: 400,
      centered: true,
      okText: '我知道了',
      icon: <CustomerServiceOutlined />,
    })
  }

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo to="/">正方形</Logo>
        
        <Nav>
          <NavItem to="/" $active={location.pathname === '/'}>
            首页
          </NavItem>
          
          <Dropdown menu={{ items: productsMenuItems }} placement="bottomLeft">
            <NavDropdownTrigger 
              $active={location.pathname === '/products'}
              onClick={() => window.location.href = '/products'}
            >
              算力产品 <DownOutlined style={{ fontSize: '12px' }} />
            </NavDropdownTrigger>
          </Dropdown>
          
          <Dropdown menu={{ items: solutionsMenuItems }} placement="bottomLeft">
            <NavDropdownTrigger 
              $active={location.pathname.startsWith('/solutions')}
              onClick={() => window.location.href = '/solutions'}
            >
              解决方案 <DownOutlined style={{ fontSize: '12px' }} />
            </NavDropdownTrigger>
          </Dropdown>
          
          <NavItem to="/about" $active={location.pathname === '/about'}>
            关于我们
          </NavItem>
        </Nav>
        
        <Actions>
          <Button 
            type="primary" 
            icon={<CustomerServiceOutlined />}
            onClick={handleContactClick}
          >
            联系客服
          </Button>
          
          <MobileMenu>
            <MenuOutlined 
              style={{ fontSize: '20px', cursor: 'pointer' }}
              onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
            />
          </MobileMenu>
        </Actions>
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header 