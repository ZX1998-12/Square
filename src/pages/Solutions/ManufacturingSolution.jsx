import React from 'react'
import { Button, Row, Col, Card, Steps, Tag, Modal } from 'antd'
import { 
  SettingOutlined, 
  DesktopOutlined,
  LineChartOutlined,
  CustomerServiceOutlined,
  ArrowLeftOutlined,
  ToolOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageHeader = styled.div`
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
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
    background: rgba(24, 144, 255, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    
    .anticon {
      font-size: 32px;
      color: #1890ff;
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
      color: #1890ff;
    }
    
    .label {
      font-size: 14px;
      color: #666;
      margin-top: 8px;
    }
  }
`

const SoftwareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 40px;
  
  .software-item {
    background: white;
    border: 2px solid #e8e8e8;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: #1890ff;
      transform: translateY(-3px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    h4 {
      font-size: 16px;
      color: #333;
      margin-bottom: 8px;
    }
    
    p {
      font-size: 14px;
      color: #666;
      margin: 0;
    }
  }
`

const ManufacturingSolution = () => {
  const showContactModal = () => {
    Modal.info({
      title: '联系客服',
      content: (
        <div style={{ textAlign: 'center' }}>
          <img src="./figure.jpg" alt="客服二维码" style={{ width: 200, height: 200, marginBottom: 16 }} />
          <p>扫码添加客服微信，获取智能制造解决方案专属服务</p>
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
      icon: <DesktopOutlined />,
      title: '仿真计算',
      items: [
        'CAD/CAE/CAM软件支持',
        '高性能图形工作站',
        '大规模仿真计算',
        '多物理场耦合分析'
      ]
    },
    {
      icon: <LineChartOutlined />,
      title: '数据分析',
      items: [
        '生产数据实时分析',
        '质量预测与优化',
        '供应链优化',
        '能耗分析与管理'
      ]
    },
    {
      icon: <ToolOutlined />,
      title: '协同设计',
      items: [
        '多地协同研发',
        '版本管理与追溯',
        '设计数据安全共享',
        '项目进度管理'
      ]
    }
  ]

  const softwares = [
    { name: 'ANSYS', desc: '结构、流体、电磁仿真' },
    { name: 'ABAQUS', desc: '非线性有限元分析' },
    { name: 'SolidWorks', desc: '三维CAD设计' },
    { name: 'CATIA', desc: '产品设计与制造' },
    { name: 'Fluent', desc: '计算流体动力学' },
    { name: 'MATLAB', desc: '数值计算与建模' },
    { name: 'Moldflow', desc: '注塑成型分析' },
    { name: 'LS-DYNA', desc: '显式动力学分析' }
  ]

  const cases = [
    {
      title: '某汽车制造企业',
      challenge: '整车碰撞仿真需要大量计算资源，本地服务器不足',
      solution: '提供高性能计算集群，支持LS-DYNA等仿真软件',
      results: [
        { value: '80%', label: '仿真时间缩短' },
        { value: '3倍', label: '并发任务提升' }
      ],
      tags: ['汽车行业', 'CAE仿真', 'HPC']
    },
    {
      title: '某航空制造企业',
      challenge: '复杂零部件设计需要多团队协同，数据安全要求高',
      solution: '构建安全的云端协同设计平台，支持CATIA等软件',
      results: [
        { value: '60%', label: '研发周期缩短' },
        { value: '100%', label: '数据安全保障' }
      ],
      tags: ['航空制造', '协同设计', '数据安全']
    },
    {
      title: '某电子制造企业',
      challenge: 'PCB热仿真和电磁兼容分析计算量大',
      solution: 'GPU加速的仿真计算平台，优化计算效率',
      results: [
        { value: '10倍', label: '仿真速度提升' },
        { value: '40%', label: '产品迭代加快' }
      ],
      tags: ['电子制造', 'GPU加速', '多物理场']
    }
  ]

  const process = [
    { title: '需求调研', description: '深入了解制造业务需求' },
    { title: '方案设计', description: '定制化算力解决方案' },
    { title: '平台部署', description: '快速部署仿真计算环境' },
    { title: '持续服务', description: '7×24小时技术支持' }
  ]

  return (
    <>
      <PageHeader>
        <div className="container">
          <BackButton to="/solutions">
            <ArrowLeftOutlined /> 返回解决方案
          </BackButton>
          <SettingOutlined />
          <h1>智能制造解决方案</h1>
          <p>
            为工业企业提供CAD/CAE仿真计算服务，加速产品研发创新。
            支持汽车、航空、电子等行业的复杂仿真需求，助力中国制造业数字化转型。
          </p>
        </div>
      </PageHeader>

      <ContentSection>
        <div className="container">
          <SectionTitle>核心能力</SectionTitle>
          <SectionSubtitle>
            全方位支持制造业数字化研发需求
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
          <SectionTitle>支持软件</SectionTitle>
          <SectionSubtitle>
            全面兼容主流工业仿真软件
          </SectionSubtitle>
          
          <SoftwareGrid>
            {softwares.map((software, index) => (
              <div className="software-item" key={index}>
                <h4>{software.name}</h4>
                <p>{software.desc}</p>
              </div>
            ))}
          </SoftwareGrid>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="container">
          <SectionTitle>实施流程</SectionTitle>
          <SectionSubtitle>
            专业的项目实施团队，确保快速上线
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
            已为多家制造企业提供算力支持
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
                      <Tag key={idx} color="blue" style={{ marginRight: 8 }}>
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
          <SectionTitle>加速产品创新</SectionTitle>
          <SectionSubtitle>
            让算力成为您的创新引擎
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
              fontSize: 18
            }}
          >
            获取专属方案
          </Button>
        </div>
      </ContentSection>
    </>
  )
}

export default ManufacturingSolution

 