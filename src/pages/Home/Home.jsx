import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Row, Col, Statistic, Modal, Badge } from 'antd'
import { 
  RocketOutlined, 
  CloudServerOutlined, 
  TeamOutlined, 
  SafetyCertificateOutlined, 
  CustomerServiceOutlined,
  ThunderboltOutlined,
  GlobalOutlined,
  ApiOutlined
} from '@ant-design/icons'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  padding: 140px 0 100px;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=');
    opacity: 0.3;
  }
`

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const HeroTitle = styled(motion.h1)`
  font-size: 56px;
  margin-bottom: 24px;
  font-weight: 700;
  letter-spacing: -1px;
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
`

const HeroSubtitle = styled(motion.p)`
  font-size: 22px;
  margin-bottom: 48px;
  opacity: 0.95;
  line-height: 1.6;
`

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`

const Section = styled.section`
  padding: 100px 0;
  
  &:nth-child(even) {
    background: #fafbfc;
  }
`

const SectionTitle = styled.h2`
  font-size: 42px;
  text-align: center;
  margin-bottom: 20px;
  color: #1a1a1a;
  font-weight: 600;
`

const SectionSubtitle = styled.p`
  font-size: 20px;
  text-align: center;
  color: #666;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 40px 32px;
  border-radius: 16px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.08);
  height: 100%;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  }
  
  .anticon {
    font-size: 56px;
    color: #1890ff;
    margin-bottom: 28px;
  }
  
  h3 {
    font-size: 24px;
    margin-bottom: 16px;
    color: #1a1a1a;
    font-weight: 600;
  }
  
  p {
    color: #666;
    line-height: 1.8;
    font-size: 16px;
  }
`

const StatsCard = styled.div`
  text-align: center;
  padding: 32px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
  
  .ant-statistic-title {
    color: #666;
    font-size: 16px;
    margin-bottom: 12px;
  }
  
  .ant-statistic-content {
    color: #1890ff;
    font-weight: 600;
  }
`

const PriceCard = styled(Card)`
  border-radius: 16px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  }
  
  .ant-card-head {
    background: linear-gradient(135deg, #f5f7fa 0%, #e8e8e8 100%);
    border-bottom: 2px solid #e8e8e8;
    border-radius: 16px 16px 0 0;
  }
  
  .ant-card-head-title {
    font-size: 20px;
    font-weight: 600;
  }
  
  .price {
    font-size: 42px;
    color: #1890ff;
    font-weight: bold;
    margin: 24px 0;
    display: flex;
    align-items: baseline;
    justify-content: center;
  }
  
  .unit {
    font-size: 18px;
    color: #666;
    margin-left: 8px;
  }
  
  .features {
    list-style: none;
    padding: 0;
    margin: 20px 0;
    
    li {
      padding: 8px 0;
      color: #666;
      font-size: 15px;
      
      &:before {
        content: '✓';
        color: #52c41a;
        margin-right: 8px;
        font-weight: bold;
      }
    }
  }
`

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const showContactModal = () => {
    Modal.info({
      title: '联系客服',
      content: (
        <div style={{ textAlign: 'center' }}>
          <img src="/figure.jpg" alt="客服二维码" style={{ width: 200, height: 200, marginBottom: 16 }} />
          <p>扫码添加客服微信，获取专属服务</p>
          <p>客服热线：400-888-8888</p>
        </div>
      ),
      width: 400,
      centered: true,
      okText: '我知道了',
    })
  }

  return (
    <>
      <HeroSection>
        <div className="container">
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              算力服务 就选正方形
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              国内领先的超算云和智算云算力服务商<br />
              为企业数字化转型提供强大算力支撑
            </HeroSubtitle>
            <ButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/products">
                <Button type="primary" size="large" style={{ height: 48, paddingLeft: 32, paddingRight: 32 }}>
                  查看产品
                </Button>
              </Link>
              <Button 
                size="large" 
                icon={<CustomerServiceOutlined />}
                onClick={showContactModal}
                style={{ height: 48, paddingLeft: 32, paddingRight: 32 }}
              >
                联系客服
              </Button>
            </ButtonGroup>
          </HeroContent>
        </div>
      </HeroSection>

      <Section>
        <div className="container">
          <SectionTitle>为什么选择正方形？</SectionTitle>
          <SectionSubtitle>新锐算力服务商，为您提供高品质服务</SectionSubtitle>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row gutter={[32, 32]}>
              <Col xs={24} sm={12} lg={6}>
                <motion.div variants={itemVariants}>
                  <FeatureCard>
                    <CloudServerOutlined />
                    <h3>优质算力资源</h3>
                    <p>精选高性能服务器，确保计算任务稳定高效运行</p>
                  </FeatureCard>
                </motion.div>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <motion.div variants={itemVariants}>
                  <FeatureCard>
                    <RocketOutlined />
                    <h3>快速响应</h3>
                    <p>专业团队快速响应，资源交付时间短</p>
                  </FeatureCard>
                </motion.div>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <motion.div variants={itemVariants}>
                  <FeatureCard>
                    <ThunderboltOutlined />
                    <h3>灵活定价</h3>
                    <p>多种计费模式，满足不同规模需求</p>
                  </FeatureCard>
                </motion.div>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <motion.div variants={itemVariants}>
                  <FeatureCard>
                    <SafetyCertificateOutlined />
                    <h3>专业服务</h3>
                    <p>技术团队全程支持，保障业务顺利进行</p>
                  </FeatureCard>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </div>
      </Section>

      <Section style={{ background: '#fafbfc' }}>
        <div className="container">
          <SectionTitle>服务规模</SectionTitle>
          <SectionSubtitle>专注算力服务，快速成长</SectionSubtitle>
          
          <Row gutter={[32, 32]}>
            <Col xs={12} sm={12} lg={6}>
              <StatsCard>
                <Statistic title="成立时间" value={2024} suffix="年" />
              </StatsCard>
            </Col>
            <Col xs={12} sm={12} lg={6}>
              <StatsCard>
                <Statistic title="服务客户" value={50} suffix="+" />
              </StatsCard>
            </Col>
            <Col xs={12} sm={12} lg={6}>
              <StatsCard>
                <Statistic title="算力资源" value="5000核+" />
              </StatsCard>
            </Col>
            <Col xs={12} sm={12} lg={6}>
              <StatsCard>
                <Statistic title="技术团队" value="30+" />
              </StatsCard>
            </Col>
          </Row>
        </div>
      </Section>

      <Section>
        <div className="container">
          <SectionTitle>热门产品</SectionTitle>
          <SectionSubtitle>灵活配置，满足不同业务需求</SectionSubtitle>
          
          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} sm={12} lg={8}>
              <PriceCard title="GPU云服务器" variant="borderless">
                <Badge.Ribbon text="AI训练首选" color="red">
                  <div style={{ padding: '20px 0' }}>
                    <div className="price">
                      ¥3.5<span className="unit">/小时起</span>
                    </div>
                    <ul className="features">
                      <li>NVIDIA A100/V100/T4等多种GPU</li>
                      <li>预装深度学习框架</li>
                      <li>高速InfiniBand网络</li>
                      <li>支持分布式训练</li>
                    </ul>
                    <Button 
                      type="primary" 
                      block 
                      size="large"
                      icon={<CustomerServiceOutlined />}
                      onClick={showContactModal}
                    >
                      联系客服
                    </Button>
                  </div>
                </Badge.Ribbon>
              </PriceCard>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <PriceCard title="CPU云服务器" variant="borderless">
                <Badge.Ribbon text="限时特惠" color="blue">
                  <div style={{ padding: '20px 0' }}>
                    <div className="price">
                      ¥99<span className="unit">/年起</span>
                    </div>
                    <ul className="features">
                      <li>2核2G配置仅需99元/年</li>
                      <li>支持弹性伸缩</li>
                      <li>免费快照备份</li>
                      <li>全面安全防护</li>
                    </ul>
                    <Button 
                      type="primary" 
                      block 
                      size="large"
                      icon={<CustomerServiceOutlined />}
                      onClick={showContactModal}
                    >
                      联系客服
                    </Button>
                  </div>
                </Badge.Ribbon>
              </PriceCard>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <PriceCard title="裸金属服务器" variant="borderless">
                <Badge.Ribbon text="企业级" color="green">
                  <div style={{ padding: '20px 0' }}>
                    <div className="price">
                      ¥1200<span className="unit">/月起</span>
                    </div>
                    <ul className="features">
                      <li>100%独享物理资源</li>
                      <li>无虚拟化性能损耗</li>
                      <li>支持自定义配置</li>
                      <li>高级安全隔离</li>
                    </ul>
                    <Button 
                      type="primary" 
                      block 
                      size="large"
                      icon={<CustomerServiceOutlined />}
                      onClick={showContactModal}
                    >
                      联系客服
                    </Button>
                  </div>
                </Badge.Ribbon>
              </PriceCard>
            </Col>
          </Row>
        </div>
      </Section>
    </>
  )
}

export default Home 