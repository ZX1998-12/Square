import React from 'react'
import { Button, Row, Col, Card, Steps, Tag, Modal } from 'antd'
import { 
  ExperimentOutlined, 
  RocketOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  CustomerServiceOutlined,
  ArrowLeftOutlined,
  FundOutlined,
  ProjectOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageHeader = styled.div`
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
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
    background: rgba(82, 196, 26, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    
    .anticon {
      font-size: 32px;
      color: #52c41a;
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
      color: #52c41a;
    }
    
    .label {
      font-size: 14px;
      color: #666;
      margin-top: 8px;
    }
  }
`

const ApplicationCard = styled.div`
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 20px;
  
  h4 {
    font-size: 20px;
    color: #389e0d;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    
    .anticon {
      font-size: 24px;
    }
  }
  
  .app-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
    
    .app-item {
      background: white;
      padding: 12px 16px;
      border-radius: 6px;
      font-size: 14px;
      color: #666;
      border: 1px solid #d9f7be;
      transition: all 0.3s ease;
      
      &:hover {
        border-color: #52c41a;
        color: #389e0d;
      }
    }
  }
`

const ResearchSolution = () => {
  const showContactModal = () => {
    Modal.info({
      title: '联系客服',
      content: (
        <div style={{ textAlign: 'center' }}>
          <img src="./figure.jpg" alt="客服二维码" style={{ width: 200, height: 200, marginBottom: 16 }} />
          <p>扫码添加客服微信，获取科研教育解决方案专属服务</p>
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
      icon: <RocketOutlined />,
      title: '科学计算',
      items: [
        '支持各类科学计算软件',
        'Matlab、Gaussian、VASP等',
        '灵活的资源调度',
        '作业队列管理'
      ]
    },
    {
      icon: <TeamOutlined />,
      title: '教学平台',
      items: [
        '虚拟实验室环境',
        '课程资源管理',
        '学生作业提交系统',
        '教学数据分析'
      ]
    },
    {
      icon: <SafetyCertificateOutlined />,
      title: '管理功能',
      items: [
        '多级用户权限管理',
        '资源配额控制',
        '费用统计分析',
        '审计日志追踪'
      ]
    }
  ]

  const applications = [
    {
      title: '生物信息学',
      icon: <FundOutlined />,
      apps: [
        '蛋白质结构预测 (AlphaFold)',
        '分子动力学模拟 (GROMACS)',
        '基因组分析 (BLAST)',
        '药物设计 (Schrödinger)',
        'RNA二级结构预测',
        '蛋白质-配体对接'
      ]
    },
    {
      title: '计算化学',
      icon: <ExperimentOutlined />,
      apps: [
        '量子化学计算 (Gaussian)',
        '分子轨道计算 (ORCA)',
        '晶体结构分析 (VASP)',
        '化学反应路径',
        '催化剂设计',
        '材料性质预测'
      ]
    },
    {
      title: '物理建模',
      icon: <ProjectOutlined />,
      apps: [
        '流体动力学 (OpenFOAM)',
        '有限元分析 (COMSOL)',
        '天体物理模拟',
        '凝聚态物理',
        '等离子体物理',
        '量子力学计算'
      ]
    }
  ]

  const cases = [
    {
      title: '某985高校生命科学学院',
      challenge: '蛋白质折叠模拟需要大量GPU资源，本地集群无法满足',
      solution: '提供专属GPU集群，预装AlphaFold等生物信息学软件',
      results: [
        { value: '10倍', label: '预测速度提升' },
        { value: '200+', label: '支持并发任务' }
      ],
      tags: ['生物信息', 'GPU加速', 'AlphaFold']
    },
    {
      title: '某医科大学药学院',
      challenge: '药物分子筛选和动力学模拟计算量大，影响研究进度',
      solution: 'CPU+GPU混合集群，支持GROMACS等分子动力学软件',
      results: [
        { value: '70%', label: '研究周期缩短' },
        { value: '5000+', label: '分子筛选/天' }
      ],
      tags: ['药物设计', '分子动力学', 'HPC']
    },
    {
      title: '某科研院所',
      challenge: '多学科交叉研究，需要统一的计算平台管理',
      solution: '构建统一算力管理平台，支持多种科学计算软件',
      results: [
        { value: '3倍', label: '资源利用率提升' },
        { value: '50+', label: '科研团队使用' }
      ],
      tags: ['多学科', '统一平台', '资源管理']
    }
  ]

  const process = [
    { title: '需求对接', description: '了解科研和教学需求' },
    { title: '平台定制', description: '定制化平台功能开发' },
    { title: '迁移部署', description: '应用迁移和环境部署' },
    { title: '运维支持', description: '持续运维和技术支持' }
  ]

  return (
    <>
      <PageHeader>
        <div className="container">
          <BackButton to="/solutions">
            <ArrowLeftOutlined /> 返回解决方案
          </BackButton>
          <ExperimentOutlined />
          <h1>科研教育解决方案</h1>
          <p>
            为高校和科研机构提供灵活的计算资源，支持生物信息学、计算化学、物理建模等多学科研究。
            特别在蛋白质结构预测、分子动力学模拟等领域提供专业支持。
          </p>
        </div>
      </PageHeader>

      <ContentSection>
        <div className="container">
          <SectionTitle>核心服务</SectionTitle>
          <SectionSubtitle>
            覆盖科研计算、教学实验、平台管理全流程
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
          <SectionTitle>应用场景</SectionTitle>
          <SectionSubtitle>
            全面支持各学科领域的科学计算需求
          </SectionSubtitle>
          
          {applications.map((app, index) => (
            <ApplicationCard key={index}>
              <h4>
                {app.icon}
                {app.title}
              </h4>
              <div className="app-list">
                {app.apps.map((item, idx) => (
                  <div className="app-item" key={idx}>{item}</div>
                ))}
              </div>
            </ApplicationCard>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="container">
          <SectionTitle>实施流程</SectionTitle>
          <SectionSubtitle>
            成熟的项目实施方法，确保平台快速上线
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
            已为多所高校和科研机构提供算力支持
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
                      <Tag key={idx} color="green" style={{ marginRight: 8 }}>
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
          <SectionTitle>加速科研创新</SectionTitle>
          <SectionSubtitle>
            让算力不再成为科研的瓶颈
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
              background: '#52c41a',
              borderColor: '#52c41a'
            }}
          >
            获取专属方案
          </Button>
        </div>
      </ContentSection>
    </>
  )
}

export default ResearchSolution 