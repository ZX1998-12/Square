import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Modal } from 'antd'
import { 
  RobotOutlined, 
  ExperimentOutlined, 
  CloudOutlined,
  SettingOutlined,
  CustomerServiceOutlined
} from '@ant-design/icons'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const PageHeader = styled.div`
  background: linear-gradient(135deg, #13c2c2 0%, #006d75 100%);
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
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImNpcmNsZXMiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2NpcmNsZXMpIi8+PC9zdmc+');
    opacity: 0.4;
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
    max-width: 600px;
    margin: 0 auto;
  }
`

const SolutionSection = styled.section`
  padding: 80px 0;
  background: #fafbfc;
`

const SolutionCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
    
    .card-header {
      background: ${props => props.$color || '#1890ff'};
      
      h3, p {
        color: white;
      }
      
      .anticon {
        color: white;
      }
    }
  }
  
  .card-header {
    background: ${props => props.$color ? `${props.$color}20` : '#1890ff20'};
    padding: 60px 40px;
    text-align: center;
    transition: all 0.3s ease;
    
    .anticon {
      font-size: 80px;
      margin-bottom: 24px;
      color: ${props => props.$color || '#1890ff'};
      transition: all 0.3s ease;
    }
    
    h3 {
      font-size: 28px;
      margin-bottom: 16px;
      color: #333;
      transition: all 0.3s ease;
    }
    
    p {
      font-size: 16px;
      color: #666;
      margin: 0;
      line-height: 1.6;
      transition: all 0.3s ease;
    }
  }
  
  .card-body {
    padding: 40px;
    flex: 1;
    
    .highlight-list {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        padding: 12px 0;
        color: #666;
        font-size: 15px;
        position: relative;
        padding-left: 28px;
        
        &:before {
          content: '•';
          position: absolute;
          left: 0;
          color: ${props => props.$color || '#1890ff'};
          font-size: 20px;
          line-height: 20px;
        }
      }
    }
  }
`

const SolutionCardLink = styled(Link)`
  display: block;
  height: 100%;
  
  &:hover {
    color: inherit;
  }
`

const Solutions = () => {
  const showContactModal = () => {
    Modal.info({
      title: '联系客服',
      content: (
        <div style={{ textAlign: 'center' }}>
          <img src="./figure.jpg" alt="客服二维码" style={{ width: 200, height: 200, marginBottom: 16 }} />
          <p>扫码添加客服微信，获取一对一咨询服务</p>
          <p>客服热线：17364338044</p>
        </div>
      ),
      width: 400,
      centered: true,
      okText: '我知道了',
      icon: <CustomerServiceOutlined />,
    })
  }

  const solutions = [
    {
      key: 'ai',
      icon: <RobotOutlined />,
      title: '人工智能解决方案',
      description: '为AI企业提供高性能GPU算力支撑，加速大模型训练和推理部署',
      color: '#722ed1',
      link: '/solutions/ai',
      highlights: [
        '支持千卡级GPU并行训练',
        '预装主流深度学习框架',
        '专业的模型优化服务',
        '弹性扩容，按需付费'
      ]
    },
    {
      key: 'manufacturing',
      icon: <SettingOutlined />,
      title: '智能制造解决方案',
      description: '为工业企业提供CAD/CAE仿真计算服务，加速产品研发创新',
      color: '#1890ff',
      link: '/solutions/manufacturing',
      highlights: [
        '支持主流工业仿真软件',
        '高性能计算集群',
        '远程图形工作站',
        '数据安全保障体系'
      ]
    },
    {
      key: 'research',
      icon: <ExperimentOutlined />,
      title: '科研教育解决方案',
      description: '为高校和科研机构提供灵活的计算资源，助力科研创新',
      color: '#52c41a',
      link: '/solutions/research',
      highlights: [
        '支持各类科学计算软件',
        '灵活的资源调度系统',
        '教学实验平台',
        '多级权限管理'
      ]
    },
    {
      key: 'cloud',
      icon: <CloudOutlined />,
      title: '混合云解决方案',
      description: '打通本地与云端资源，实现统一管理和最优资源配置',
      color: '#13c2c2',
      link: '/solutions/cloud',
      highlights: [
        '多云统一管理平台',
        '智能负载均衡',
        '数据安全同步',
        '成本优化建议'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <>
      <PageHeader>
        <div className="container">
          <h1>行业解决方案</h1>
          <p>深耕行业需求，提供专业的算力解决方案，助力企业数字化转型</p>
        </div>
      </PageHeader>

      <SolutionSection>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Row gutter={[32, 32]}>
              {solutions.map(solution => (
                <Col xs={24} sm={12} lg={12} key={solution.key} id={solution.key}>
                  <motion.div variants={itemVariants}>
                    <SolutionCardLink to={solution.link}>
                      <SolutionCard $color={solution.color}>
                        <div className="card-header">
                          {solution.icon}
                          <h3>{solution.title}</h3>
                          <p>{solution.description}</p>
                        </div>
                        <div className="card-body">
                          <ul className="highlight-list">
                            {solution.highlights.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </SolutionCard>
                    </SolutionCardLink>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>

          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <h2 style={{ fontSize: 32, marginBottom: 20, color: '#333' }}>
              需要定制化解决方案？
            </h2>
            <p style={{ fontSize: 18, color: '#666', marginBottom: 32 }}>
              我们的专业团队将为您提供一对一咨询服务
            </p>
            <Button 
              type="primary" 
              size="large"
              icon={<CustomerServiceOutlined />}
              style={{ height: 48, paddingLeft: 32, paddingRight: 32 }}
              onClick={showContactModal}
            >
              立即咨询
            </Button>
          </div>
        </div>
      </SolutionSection>
    </>
  )
}

export default Solutions 