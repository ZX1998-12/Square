import React from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'antd'
import { CustomerServiceOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: #001529;
  color: #fff;
  padding: 60px 0 40px;
  margin-top: 100px;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`

const FooterColumn = styled.div`
  h3 {
    font-size: 18px;
    margin-bottom: 20px;
    color: #fff;
  }
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  a, span.link {
    color: rgba(255, 255, 255, 0.65);
    transition: color 0.3s;
    cursor: pointer;
    
    &:hover {
      color: #fff;
    }
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.85);
  }
  
  strong {
    color: #fff;
  }
`

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.65);
  
  p {
    margin: 8px 0;
  }
`

const Footer = () => {
  const showContactModal = () => {
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
    <FooterWrapper>
      <FooterContent>
        <FooterTop>
          <FooterColumn>
            <h3>算力产品</h3>
            <ul>
              <li><Link to="/products#gpu-cloud">GPU云服务器</Link></li>
              <li><Link to="/products#cpu-server">CPU云服务器</Link></li>
              <li><Link to="/products#bare-metal">裸金属服务器</Link></li>
              <li><Link to="/products#storage">存储服务</Link></li>
            </ul>
          </FooterColumn>
          
          <FooterColumn>
            <h3>解决方案</h3>
            <ul>
              <li><Link to="/solutions/ai">人工智能</Link></li>
              <li><Link to="/solutions/manufacturing">智能制造</Link></li>
              <li><Link to="/solutions/research">科研教育</Link></li>
              <li><Link to="/solutions/cloud">混合云</Link></li>
            </ul>
          </FooterColumn>
          
          <FooterColumn>
            <h3>关于我们</h3>
            <ul>
              <li><Link to="/about">企业简介</Link></li>
              <li><Link to="/about#culture">企业文化</Link></li>
              <li><span className="link" onClick={showContactModal}>联系我们</span></li>
            </ul>
          </FooterColumn>
          
          <FooterColumn>
            <h3>联系我们</h3>
            <ContactInfo>
              <p>
                <strong>客服热线：</strong><br />
                17364338044
              </p>
              <p>
                <strong>工作时间：</strong><br />
                7×24小时服务
              </p>
            </ContactInfo>
          </FooterColumn>
        </FooterTop>
        
        <FooterBottom>
          <p>© 2024 - 2025 正方形(南京)科学仪器有限公司</p>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer 