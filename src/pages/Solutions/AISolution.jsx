import React from 'react'
import { Button, Row, Col, Card, Steps, Tag, Modal } from 'antd'
import { 
  RobotOutlined, 
  CloudOutlined,
  DatabaseOutlined,
  TeamOutlined,
  CustomerServiceOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageHeader = styled.div`
  background: linear-gradient(135deg, #722ed1 0%, #531dab 100%);
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
    background: rgba(114, 46, 209, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    
    .anticon {
      font-size: 32px;
      color: #722ed1;
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
      color: #722ed1;
    }
    
    .label {
      font-size: 14px;
      color: #666;
      margin-top: 8px;
    }
  }
`

const AISolution = () => {
  const showContactModal = () => {
    Modal.info({
      title: '联系客服',
      content: (
        <div style={{ textAlign: 'center' }}>
          <img src="./figure.jpg" alt="客服二维码" style={{ width: 200, height: 200, marginBottom: 16 }} />
          <p>扫码添加客服微信，获取AI解决方案专属服务</p>
          <p>客服热线：17364338044</p>

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
      title: '算力资源',
      items: [
        '多种GPU型号可选：A100、V100、T4、RTX 4090',
        '支持千卡级并行训练',
        'InfiniBand高速网络互联',
        '专属AI算力资源池'
      ]
    },
    {
      icon: <DatabaseOutlined />,
      title: '软件环境',
      items: [
        '预装主流深度学习框架：TensorFlow、PyTorch、MXNet',
        '支持CUDA、cuDNN等GPU加速库',
        'Jupyter Notebook开发环境',
        '完整的MLOps工具链'
      ]
    },
    {
      icon: <TeamOutlined />,
      title: '技术服务',
      items: [
        '模型训练优化咨询',
        '分布式训练架构设计',
        '7×24小时技术支持',
        '专属技术经理服务'
      ]
    }
  ]

  const cases = [
    {
      title: '某大语言模型创业公司',
      challenge: '需要训练千亿参数的大语言模型，本地资源不足',
      solution: '提供8000张A100 GPU并行训练环境，配备专业技术支持',
      results: [
        { value: '60%', label: '训练时间缩短' },
        { value: '40%', label: '成本降低' }
      ],
      tags: ['LLM', 'A100集群', '分布式训练']
    },
    {
      title: '某自动驾驶初创企业',
      challenge: '海量传感器数据处理和模型快速迭代需求',
      solution: '混合GPU集群配合高性能对象存储，支持数据处理和训练一体化',
      results: [
        { value: '5倍', label: '迭代速度提升' },
        { value: '24h', label: '模型部署时间' }
      ],
      tags: ['计算机视觉', 'V100', '数据处理']
    },
    {
      title: '某AI医疗公司',
      challenge: '医学影像AI模型训练，需要满足医疗数据安全合规要求',
      solution: '专属GPU资源池，提供安全隔离环境和加密传输',
      results: [
        { value: '15%', label: '模型精度提升' },
        { value: '100%', label: '安全合规' }
      ],
      tags: ['医疗AI', 'RTX 4090', '隐私计算']
    }
  ]

  const process = [
    { title: '需求评估', description: '了解AI项目需求，评估算力规模' },
    { title: '方案设计', description: '设计最优算力配置和技术架构' },
    { title: '环境部署', description: '快速部署AI开发训练环境' },
    { title: '持续优化', description: '持续监控和优化训练效率' }
  ]

  return (
    <>
      <PageHeader>
        <div className="container">
          <BackButton to="/solutions">
            <ArrowLeftOutlined /> 返回解决方案
          </BackButton>
          <RobotOutlined />
          <h1>人工智能解决方案</h1>
          <p>
            为AI企业和研究机构提供高性能GPU算力支撑，加速大模型训练和推理部署。
            无论是大语言模型、计算机视觉还是推荐系统，我们都能提供最适合的算力方案。
          </p>
        </div>
      </PageHeader>

      <ContentSection>
        <div className="container">
          <SectionTitle>核心优势</SectionTitle>
          <SectionSubtitle>
            全方位的AI算力服务，助力您的AI项目快速落地
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
          <SectionTitle>实施流程</SectionTitle>
          <SectionSubtitle>
            标准化的实施流程，确保项目快速交付
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

      <ContentSection>
        <div className="container">
          <SectionTitle>成功案例</SectionTitle>
          <SectionSubtitle>
            已为多家AI企业提供算力支持，助力其业务快速发展
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
                      <Tag key={idx} color="purple" style={{ marginRight: 8 }}>
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

      <ContentSection style={{ background: '#fafbfc', textAlign: 'center' }}>
        <div className="container">
          <SectionTitle>立即开启AI算力之旅</SectionTitle>
          <SectionSubtitle>
            专业团队为您提供一对一咨询服务，定制最适合的AI算力方案
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
              background: '#722ed1',
              borderColor: '#722ed1'
            }}
          >
            获取专属方案
          </Button>
        </div>
      </ContentSection>
    </>
  )
}

export default AISolution 