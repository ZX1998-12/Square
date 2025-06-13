import React from 'react'
import { Row, Col, Card, Timeline } from 'antd'
import { 
  TeamOutlined, 
  GlobalOutlined,
  SafetyCertificateOutlined,
  RocketOutlined,
  CloudServerOutlined,
  HeartOutlined,
  BulbOutlined
} from '@ant-design/icons'
import styled from 'styled-components'

const PageHeader = styled.div`
  background: linear-gradient(135deg, #722ed1 0%, #531dab 100%);
  color: white;
  padding: 100px 0 80px;
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
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwIDIwIDQwIE0gMCAzMCBMIDQwIDMwIE0gMzAgMCBMIDMwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+');
    opacity: 0.2;
  }
  
  h1 {
    font-size: 48px;
    margin-bottom: 16px;
    position: relative;
    z-index: 1;
  }
  
  p {
    font-size: 20px;
    opacity: 0.95;
    position: relative;
    z-index: 1;
  }
`

const Section = styled.section`
  padding: 80px 0;
  
  &:nth-child(even) {
    background: #fafbfc;
  }
  
  h2 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 48px;
    color: #333;
    font-weight: 600;
  }
`

const CompanyIntro = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  
  .intro-card {
    background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);
    border-radius: 20px;
    padding: 60px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    margin-bottom: 60px;
    
    .company-name {
      font-size: 32px;
      color: #722ed1;
      margin-bottom: 24px;
      font-weight: 600;
    }
    
    p {
      font-size: 18px;
      line-height: 2;
      color: #666;
      margin-bottom: 24px;
      text-align: left;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  
  .highlight-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    margin-top: 40px;
    
    .highlight-item {
      background: white;
      padding: 32px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
      }
      
      .anticon {
        font-size: 36px;
        color: #722ed1;
        margin-bottom: 16px;
      }
      
      h4 {
        font-size: 20px;
        color: #333;
        margin-bottom: 12px;
      }
      
      p {
        font-size: 16px;
        color: #666;
        margin: 0;
      }
    }
  }
`

const AchievementCard = styled(Card)`
  text-align: center;
  border-radius: 12px;
  height: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
  
  .anticon {
    font-size: 48px;
    color: #1890ff;
    margin-bottom: 16px;
  }
  
  h3 {
    font-size: 20px;
    margin-bottom: 8px;
    color: #333;
  }
  
  p {
    color: #666;
    margin: 0;
  }
`

const CultureCard = styled.div`
  padding: 40px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
  }
  
  .icon-wrapper {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #722ed1 0%, #531dab 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    
    .anticon {
      font-size: 40px;
      color: white;
    }
  }
  
  h3 {
    font-size: 24px;
    color: #333;
    margin-bottom: 16px;
  }
  
  p {
    color: #666;
    line-height: 1.8;
    font-size: 16px;
  }
`

const TimelineSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  .ant-timeline-item-content {
    font-size: 16px;
    line-height: 1.6;
  }
`

const About = () => {
  return (
    <>
      <PageHeader>
        <div className="container">
          <h1>关于正方形</h1>
          <p>新锐算力服务商，您的数字化转型合作伙伴</p>
        </div>
      </PageHeader>

      <Section>
        <div className="container">
          <h2>公司简介</h2>
          <CompanyIntro>
            <div className="intro-card">
              <h3 className="company-name">正方形(南京)科学仪器有限公司</h3>
              <p>
                我们是一家成立于2024年的新锐科技企业，专注于提供高性能算力服务。
                公司总部位于南京市江宁区，依托长三角地区丰富的科技资源和产业优势，
                致力于为客户提供专业、可靠、高效的算力解决方案。
              </p>
              <p>
                虽然成立时间不长，但我们的核心团队拥有丰富的行业经验。
                团队成员来自知名互联网公司和云计算企业，在高性能计算、云服务、
                人工智能等领域有着深厚的技术积累和实战经验。
              </p>
              <p>
                目前，公司已经为50多家企业和科研机构提供算力服务，
                涵盖人工智能训练、科学计算、工业仿真等多个领域。
                我们将持续投入技术研发，扩大服务规模，
                努力成为行业内值得信赖的算力服务提供商。
              </p>
            </div>
            
            <div className="highlight-cards">
              <div className="highlight-item">
                <BulbOutlined />
                <h4>技术驱动</h4>
                <p>以创新技术为核心竞争力</p>
              </div>
              <div className="highlight-item">
                <HeartOutlined />
                <h4>客户至上</h4>
                <p>始终将客户需求放在首位</p>
              </div>
              <div className="highlight-item">
                <TeamOutlined />
                <h4>专业团队</h4>
                <p>汇聚行业精英人才</p>
              </div>
            </div>
          </CompanyIntro>
        </div>
      </Section>

      <Section style={{ background: '#fafbfc' }}>
        <div className="container">
          <h2>核心优势</h2>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} lg={6}>
              <AchievementCard variant="borderless">
                <RocketOutlined />
                <h3>技术创新</h3>
                <p>采用最新技术架构，提供高效算力服务</p>
              </AchievementCard>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <AchievementCard variant="borderless">
                <TeamOutlined />
                <h3>专业团队</h3>
                <p>核心团队来自知名科技企业，经验丰富</p>
              </AchievementCard>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <AchievementCard variant="borderless">
                <CloudServerOutlined />
                <h3>灵活服务</h3>
                <p>提供定制化解决方案，满足不同需求</p>
              </AchievementCard>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <AchievementCard variant="borderless">
                <SafetyCertificateOutlined />
                <h3>安全可靠</h3>
                <p>严格的数据安全管理，保障客户利益</p>
              </AchievementCard>
            </Col>
          </Row>
        </div>
      </Section>

      <Section>
        <div className="container">
          <h2>发展规划</h2>
          <TimelineSection>
            <Timeline mode="alternate">
              <Timeline.Item color="green">
                <strong>2024年Q1</strong><br />
                公司成立，组建核心团队，启动算力平台建设
              </Timeline.Item>
              <Timeline.Item color="blue">
                <strong>2024年Q2</strong><br />
                完成首批客户签约，算力资源达到5000核
              </Timeline.Item>
              <Timeline.Item color="blue">
                <strong>2024年Q3</strong><br />
                推出AI训练专属服务，服务客户突破50家
              </Timeline.Item>
              <Timeline.Item color="purple">
                <strong>2024年Q4</strong><br />
                计划扩大团队规模，提升服务能力
              </Timeline.Item>
              <Timeline.Item color="gray">
                <strong>2025年</strong><br />
                目标服务客户200+，算力规模达到2万核
              </Timeline.Item>
              <Timeline.Item color="gray">
                <strong>2026年</strong><br />
                建立区域算力中心，成为长三角地区知名算力服务商
              </Timeline.Item>
            </Timeline>
          </TimelineSection>
        </div>
      </Section>

      <Section id="culture" style={{ background: '#fafbfc' }}>
        <div className="container">
          <h2>企业文化</h2>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <CultureCard>
                <div className="icon-wrapper">
                  <RocketOutlined />
                </div>
                <h3>使命</h3>
                <p>让高性能算力触手可及，助力企业数字化创新</p>
              </CultureCard>
            </Col>
            <Col xs={24} md={12}>
              <CultureCard>
                <div className="icon-wrapper">
                  <GlobalOutlined />
                </div>
                <h3>愿景</h3>
                <p>成为长三角地区最值得信赖的算力服务提供商</p>
              </CultureCard>
            </Col>
            <Col xs={24} md={12}>
              <CultureCard>
                <div className="icon-wrapper">
                  <HeartOutlined />
                </div>
                <h3>核心价值观</h3>
                <p>客户至上、技术驱动、诚信务实、合作共赢</p>
              </CultureCard>
            </Col>
            <Col xs={24} md={12}>
              <CultureCard>
                <div className="icon-wrapper">
                  <BulbOutlined />
                </div>
                <h3>服务理念</h3>
                <p>快速响应、专业服务、持续改进、超越期待</p>
              </CultureCard>
            </Col>
          </Row>
        </div>
      </Section>
    </>
  )
}

export default About 