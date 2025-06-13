import React from 'react'
import { Button, Row, Col, Card, Steps, Tag, Modal } from 'antd'
import { 
  CloudOutlined, 
  DatabaseOutlined,
  SafetyCertificateOutlined,
  CustomerServiceOutlined,
  ArrowLeftOutlined,
  SyncOutlined,
  DeploymentUnitOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageHeader = styled.div`
  background: linear-gradient(135deg, #13c2c2 0%, #006d75 100%);
  color: white;
  padding: 120px 0 80px;
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
    opacity: 0.2;
  }
  
  .anticon {
    font-size: 80px;
    margin-bottom: 24px;
  }
  
  h1 {
    font-size: 48px;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }
  
  p {
    font-size: 20px;
    opacity: 0.95;
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
  }
`

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: white;
  opacity: 0.8;
  margin-bottom: 40px;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 1;
    color: white;
  }
`

const ContentSection = styled.section`
  padding: 80px 0;
  
  &:nth-child(even) {
    background: #fafbfc;
  }
`

const SectionTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`

const SectionSubtitle = styled.p`
  font-size: 18px;
  text-align: center;
  color: #666;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const FeatureCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  height: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
  
  .icon-wrapper {
    width: 64px;
    height: 64px;
    background: rgba(19, 194, 194, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    
    .anticon {
      font-size: 32px;
      color: #13c2c2;
    }
  }
  
  h3 {
    font-size: 24px;
    margin-bottom: 16px;
    color: #333;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      padding: 10px 0;
      color: #666;
      position: relative;
      padding-left: 24px;
      
      &:before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #52c41a;
        font-weight: bold;
      }
    }
  }
`

const CaseCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
  
  .ant-card-head {
    background: #f5f7fa;
  }
  
  .case-metric {
    text-align: center;
    margin: 20px 0;
    
    .value {
      font-size: 36px;
      font-weight: bold;
      color: #13c2c2;
    }
    
    .label {
      font-size: 14px;
      color: #666;
      margin-top: 8px;
    }
  }
`

const ArchitectureSection = styled.div`
  background: #e6fffb;
  border: 1px solid #87e8de;
  border-radius: 12px;
  padding: 40px;
  margin: 40px 0;
  
  h3 {
    font-size: 24px;
    color: #006d75;
    text-align: center;
    margin-bottom: 32px;
  }
  
  .architecture-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    
    .arch-item {
      background: white;
      padding: 24px;
      border-radius: 8px;
      text-align: center;
      border: 1px solid #b5f5ec;
      
      .anticon {
        font-size: 48px;
        color: #13c2c2;
        margin-bottom: 16px;
      }
      
      h4 {
        font-size: 18px;
        color: #333;
        margin-bottom: 8px;
      }
      
      p {
        font-size: 14px;
        color: #666;
        margin: 0;
      }
    }
  }
`

const CloudSolution = () => {
  const showContactModal = () => {
    Modal.info({
      title: '联系客服',
      content: (
        <div style={{ textAlign: 'center' }}>
          <img src="/figure.jpg" alt="客服二维码" style={{ width: 200, height: 200, marginBottom: 16 }} />
          <p>扫码添加客服微信，获取混合云解决方案专属服务</p>
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

  const features = [
    {
      icon: <CloudOutlined />,
      title: '资源管理',
      items: [
        '统一资源调度平台',
        '本地云端无缝切换',
        '智能负载均衡',
        '成本优化建议'
      ]
    },
    {
      icon: <DatabaseOutlined />,
      title: '数据同步',
      items: [
        '增量数据同步',
        '多云数据管理',
        '数据生命周期管理',
        '跨云数据迁移'
      ]
    },
    {
      icon: <SafetyCertificateOutlined />,
      title: '安全合规',
      items: [
        '统一身份认证',
        '网络安全隔离',
        '数据加密传输',
        '合规性审计'
      ]
    }
  ]

  const architectures = [
    {
      icon: <CloudOutlined />,
      title: '公有云',
      desc: '弹性扩容，按需付费'
    },
    {
      icon: <DeploymentUnitOutlined />,
      title: '私有云',
      desc: '数据安全，独享资源'
    },
    {
      icon: <SyncOutlined />,
      title: '混合管理',
      desc: '统一调度，灵活切换'
    }
  ]

  const cases = [
    {
      title: '某金融科技公司',
      challenge: '核心业务需要高安全性，同时需要弹性扩容能力',
      solution: '核心数据私有云部署，业务应用公有云部署，统一管理',
      results: [
        { value: '99.99%', label: '系统可用性' },
        { value: '50%', label: '成本优化' }
      ],
      tags: ['金融行业', '高可用', '混合部署']
    },
    {
      title: '某制造企业',
      challenge: '仿真计算需求波动大，峰值时本地资源不足',
      solution: '基础负载本地承载，峰值负载云端弹性扩容',
      results: [
        { value: '5倍', label: '峰值算力提升' },
        { value: '0', label: '业务中断' }
      ],
      tags: ['智能制造', '弹性扩容', 'HPC']
    },
    {
      title: '某互联网公司',
      challenge: '业务分布多地，需要统一的资源管理平台',
      solution: '多云统一管理平台，实现跨云资源调度',
      results: [
        { value: '80%', label: '管理效率提升' },
        { value: '30%', label: '运维成本降低' }
      ],
      tags: ['互联网', '多云管理', 'DevOps']
    }
  ]

  const process = [
    { title: '架构评估', description: '评估现有IT架构和业务需求' },
    { title: '方案规划', description: '设计混合云架构方案' },
    { title: '平台实施', description: '部署混合云管理平台' },
    { title: '优化运营', description: '持续优化和运营支持' }
  ]

  return (
    <>
      <PageHeader>
        <div className="container">
          <BackButton to="/solutions">
            <ArrowLeftOutlined /> 返回解决方案
          </BackButton>
          <CloudOutlined />
          <h1>混合云解决方案</h1>
          <p>
            打通本地与云端资源，实现统一管理和最优资源配置。
            帮助企业在保障数据安全的同时，享受云计算的弹性和成本优势。
          </p>
        </div>
      </PageHeader>

      <ContentSection>
        <div className="container">
          <SectionTitle>核心能力</SectionTitle>
          <SectionSubtitle>
            构建安全、灵活、高效的混合云架构
          </SectionSubtitle>
          
          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={8} key={index}>
                <FeatureCard>
                  <div className="icon-wrapper">
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <ul>
                    {feature.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </FeatureCard>
              </Col>
            ))}
          </Row>
        </div>
      </ContentSection>

      <ContentSection style={{ background: '#fafbfc' }}>
        <div className="container">
          <SectionTitle>混合云架构</SectionTitle>
          <SectionSubtitle>
            灵活的架构设计，满足不同业务需求
          </SectionSubtitle>
          
          <ArchitectureSection>
            <h3>统一管理，多云协同</h3>
            <div className="architecture-grid">
              {architectures.map((arch, index) => (
                <div className="arch-item" key={index}>
                  {arch.icon}
                  <h4>{arch.title}</h4>
                  <p>{arch.desc}</p>
                </div>
              ))}
            </div>
          </ArchitectureSection>

          <Row gutter={[32, 32]} style={{ marginTop: 40 }}>
            <Col xs={24} sm={12}>
              <Card title="适用场景" variant="borderless">
                <ul style={{ paddingLeft: 20 }}>
                  <li>核心业务需要高安全性保障</li>
                  <li>业务负载波动大，需要弹性扩容</li>
                  <li>多地分布式部署，需要统一管理</li>
                  <li>数据合规要求，部分数据不能上云</li>
                  <li>希望逐步上云，降低迁移风险</li>
                </ul>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card title="价值优势" variant="borderless">
                <ul style={{ paddingLeft: 20 }}>
                  <li>兼顾安全性和灵活性</li>
                  <li>优化IT成本，提高资源利用率</li>
                  <li>业务连续性保障</li>
                  <li>统一运维，降低管理复杂度</li>
                  <li>支持业务快速创新和迭代</li>
                </ul>
              </Card>
            </Col>
          </Row>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="container">
          <SectionTitle>实施流程</SectionTitle>
          <SectionSubtitle>
            专业的实施方法论，确保平滑过渡
          </SectionSubtitle>
          
          <Steps current={-1} style={{ maxWidth: 800, margin: '0 auto' }}>
            {process.map((step, index) => (
              <Steps.Step 
                key={index} 
                title={step.title} 
                description={step.description}
              />
            ))}
          </Steps>
        </div>
      </ContentSection>

      <ContentSection style={{ background: '#fafbfc' }}>
        <div className="container">
          <SectionTitle>成功案例</SectionTitle>
          <SectionSubtitle>
            已为多家企业构建混合云架构
          </SectionSubtitle>
          
          <Row gutter={[32, 32]}>
            {cases.map((case_, index) => (
              <Col xs={24} sm={8} key={index}>
                <CaseCard title={case_.title}>
                  <p><strong>业务挑战：</strong>{case_.challenge}</p>
                  <p><strong>解决方案：</strong>{case_.solution}</p>
                  
                  <Row gutter={16}>
                    {case_.results.map((result, idx) => (
                      <Col span={12} key={idx}>
                        <div className="case-metric">
                          <div className="value">{result.value}</div>
                          <div className="label">{result.label}</div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  
                  <div style={{ marginTop: 20 }}>
                    {case_.tags.map((tag, idx) => (
                      <Tag key={idx} color="cyan" style={{ marginRight: 8 }}>
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </CaseCard>
              </Col>
            ))}
          </Row>
        </div>
      </ContentSection>

      <ContentSection style={{ textAlign: 'center' }}>
        <div className="container">
          <SectionTitle>开启混合云之旅</SectionTitle>
          <SectionSubtitle>
            让我们帮您构建最适合的混合云架构
          </SectionSubtitle>
          
          <Button 
            type="primary" 
            size="large"
            icon={<CustomerServiceOutlined />}
            onClick={showContactModal}
            style={{ 
              height: 56, 
              paddingLeft: 40, 
              paddingRight: 40,
              fontSize: 18,
              background: '#13c2c2',
              borderColor: '#13c2c2'
            }}
          >
            获取专属方案
          </Button>
        </div>
      </ContentSection>
    </>
  )
}

export default CloudSolution 