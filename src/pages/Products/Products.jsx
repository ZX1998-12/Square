import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Tabs, Card, Table, Tag, Button, Space, Row, Col, Modal } from 'antd'
import { CheckCircleOutlined, CustomerServiceOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const PageHeader = styled.div`
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  padding: 80px 0 60px;
  text-align: center;
  
  h1 {
    font-size: 42px;
    margin-bottom: 16px;
  }
  
  p {
    font-size: 18px;
    opacity: 0.9;
  }
`

const ProductSection = styled.section`
  padding: 60px 0;
`

const ProductCard = styled(Card)`
  margin-bottom: 32px;
  border-radius: 12px;
  
  .ant-card-head {
    background: #f5f7fa;
  }
  
  h3 {
    font-size: 24px;
    margin-bottom: 16px;
    color: #333;
  }
  
  .feature-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    margin: 24px 0;
  }
  
  .feature-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #666;
    
    .anticon {
      color: #52c41a;
    }
  }
`

const PriceTable = styled(Table)`
  .ant-table-thead > tr > th {
    background: #f5f7fa;
    font-weight: 600;
  }
`

const Products = () => {
  const location = useLocation()

  useEffect(() => {
    // 如果URL中有hash，滚动到对应的元素
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])

  const showContactModal = () => {
    Modal.info({
      title: '联系客服',
      content: (
        <div style={{ textAlign: 'center' }}>
          <img src="./figure.jpg" alt="客服二维码" style={{ width: 200, height: 200, marginBottom: 16 }} />
          <p>扫码添加客服微信，获取专属报价</p>
          <p>客服热线：17364338044</p>
        </div>
      ),
      width: 400,
      centered: true,
      okText: '我知道了',
      icon: <CustomerServiceOutlined />,
    })
  }

  const gpuServerColumns = [
    {
      title: '实例规格',
      dataIndex: 'spec',
      key: 'spec',
    },
    {
      title: 'GPU型号',
      dataIndex: 'gpu',
      key: 'gpu',
    },
    {
      title: 'GPU数量',
      dataIndex: 'gpuCount',
      key: 'gpuCount',
    },
    {
      title: 'CPU核数',
      dataIndex: 'cpu',
      key: 'cpu',
    },
    {
      title: '内存',
      dataIndex: 'memory',
      key: 'memory',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <strong style={{ color: '#1890ff' }}>{price}</strong>
    },
  ]

  const gpuServerData = [
    {
      key: '1',
      spec: 'gpu.a100.large',
      gpu: 'NVIDIA A100 80GB',
      gpuCount: '1',
      cpu: '16核',
      memory: '128GB',
      price: '¥18.0/小时',
    },
    {
      key: '2',
      spec: 'gpu.a100.xlarge',
      gpu: 'NVIDIA A100 80GB',
      gpuCount: '2',
      cpu: '32核',
      memory: '256GB',
      price: '¥35.0/小时',
    },
    {
      key: '3',
      spec: 'gpu.a100.2xlarge',
      gpu: 'NVIDIA A100 80GB',
      gpuCount: '4',
      cpu: '64核',
      memory: '512GB',
      price: '¥68.0/小时',
    },
    {
      key: '4',
      spec: 'gpu.v100.large',
      gpu: 'NVIDIA V100 32GB',
      gpuCount: '1',
      cpu: '16核',
      memory: '128GB',
      price: '¥10.0/小时',
    },
    {
      key: '5',
      spec: 'gpu.v100.xlarge',
      gpu: 'NVIDIA V100 32GB',
      gpuCount: '2',
      cpu: '32核',
      memory: '256GB',
      price: '¥19.0/小时',
    },
    {
      key: '6',
      spec: 'gpu.t4.medium',
      gpu: 'NVIDIA T4 16GB',
      gpuCount: '1',
      cpu: '8核',
      memory: '32GB',
      price: '¥3.5/小时',
    },
    {
      key: '7',
      spec: 'gpu.t4.large',
      gpu: 'NVIDIA T4 16GB',
      gpuCount: '1',
      cpu: '16核',
      memory: '64GB',
      price: '¥5.0/小时',
    },
    {
      key: '8',
      spec: 'gpu.rtx4090.large',
      gpu: 'NVIDIA RTX 4090',
      gpuCount: '1',
      cpu: '16核',
      memory: '64GB',
      price: '¥8.0/小时',
    },
  ]

  const cpuServerColumns = [
    {
      title: '实例规格',
      dataIndex: 'spec',
      key: 'spec',
    },
    {
      title: 'CPU',
      dataIndex: 'cpu',
      key: 'cpu',
    },
    {
      title: '内存',
      dataIndex: 'memory',
      key: 'memory',
    },
    {
      title: '系统盘',
      dataIndex: 'disk',
      key: 'disk',
    },
    {
      title: '带宽',
      dataIndex: 'bandwidth',
      key: 'bandwidth',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <strong style={{ color: '#1890ff' }}>{price}</strong>
    },
  ]

  const cpuServerData = [
    {
      key: '1',
      spec: 'ecs.e-c1m1.large',
      cpu: '2核',
      memory: '2GB',
      disk: '40GB ESSD',
      bandwidth: '1Mbps',
      price: '¥99/年',
    },
    {
      key: '2',
      spec: 'ecs.u1-c1m2.large',
      cpu: '2核',
      memory: '4GB',
      disk: '40GB ESSD',
      bandwidth: '1Mbps',
      price: '¥199/年',
    },
    {
      key: '3',
      spec: 'ecs.s6-c1m2.large',
      cpu: '2核',
      memory: '4GB',
      disk: '40GB ESSD',
      bandwidth: '3Mbps',
      price: '¥66/月',
    },
    {
      key: '4',
      spec: 'ecs.s6-c1m4.xlarge',
      cpu: '4核',
      memory: '8GB',
      disk: '40GB ESSD',
      bandwidth: '5Mbps',
      price: '¥138/月',
    },
    {
      key: '5',
      spec: 'ecs.c7-c1m2.2xlarge',
      cpu: '8核',
      memory: '16GB',
      disk: '40GB ESSD',
      bandwidth: '10Mbps',
      price: '¥398/月',
    },
    {
      key: '6',
      spec: 'ecs.c7-c1m4.4xlarge',
      cpu: '16核',
      memory: '32GB',
      disk: '100GB ESSD',
      bandwidth: '10Mbps',
      price: '¥856/月',
    },
    {
      key: '7',
      spec: 'ecs.g7-c1m8.8xlarge',
      cpu: '32核',
      memory: '64GB',
      disk: '200GB ESSD',
      bandwidth: '20Mbps',
      price: '¥1688/月',
    },
    {
      key: '8',
      spec: 'ecs.r7-c1m16.16xlarge',
      cpu: '64核',
      memory: '128GB',
      disk: '500GB ESSD',
      bandwidth: '30Mbps',
      price: '¥3366/月',
    },
  ]

  const storageColumns = [
    {
      title: '存储类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '容量范围',
      dataIndex: 'capacity',
      key: 'capacity',
    },
    {
      title: '性能',
      dataIndex: 'performance',
      key: 'performance',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
      render: (price) => <strong style={{ color: '#1890ff' }}>{price}</strong>
    },
  ]

  const storageData = [
    {
      key: '1',
      type: '高性能并行存储',
      capacity: '1TB - 1PB',
      performance: '最高100GB/s吞吐',
      price: '¥0.5/GB/月',
    },
    {
      key: '2',
      type: '标准并行存储',
      capacity: '1TB - 500TB',
      performance: '最高20GB/s吞吐',
      price: '¥0.3/GB/月',
    },
    {
      key: '3',
      type: '对象存储OSS',
      capacity: '无限制',
      performance: '高并发访问',
      price: '¥0.12/GB/月',
    },
    {
      key: '4',
      type: '归档存储',
      capacity: '无限制',
      performance: '适合长期存储',
      price: '¥0.033/GB/月',
    },
    {
      key: '5',
      type: 'SSD云盘',
      capacity: '20GB - 32TB',
      performance: '最高25000 IOPS',
      price: '¥1.0/GB/月',
    },
    {
      key: '6',
      type: 'ESSD云盘',
      capacity: '20GB - 64TB',
      performance: '最高100万 IOPS',
      price: '¥1.5/GB/月',
    },
  ]

  return (
    <>
      <PageHeader>
        <div className="container">
          <h1>算力产品中心</h1>
          <p>灵活配置，按需使用，为您提供最优质的算力服务</p>
        </div>
      </PageHeader>

      <ProductSection>
        <div className="container">
          <ProductCard 
            id="gpu-cloud"
            title={<h3>GPU云服务器</h3>}
            extra={
              <Button 
                type="primary" 
                icon={<CustomerServiceOutlined />}
                onClick={showContactModal}
              >
                联系客服
              </Button>
            }
          >
            <p style={{ fontSize: '16px', marginBottom: '24px' }}>
              提供弹性的GPU算力服务，支持深度学习、科学计算、图形渲染等多种应用场景
            </p>
            
            <div className="feature-list">
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>支持多种GPU型号：A100、V100、T4、RTX 4090等</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>弹性扩容，按需使用</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>预装深度学习框架</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>高速网络互联</span>
              </div>
            </div>

            <PriceTable 
              columns={gpuServerColumns} 
              dataSource={gpuServerData}
              pagination={false}
            />
          </ProductCard>

          <ProductCard 
            id="cpu-server"
            title={<h3>CPU云服务器</h3>}
            extra={
              <Button 
                type="primary" 
                icon={<CustomerServiceOutlined />}
                onClick={showContactModal}
              >
                联系客服
              </Button>
            }
          >
            <p style={{ fontSize: '16px', marginBottom: '24px' }}>
              高性价比的CPU云服务器，适用于Web应用、数据库、企业应用等多种场景
            </p>
            
            <div className="feature-list">
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>99元/年起，超高性价比</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>多种实例规格可选</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>支持弹性伸缩</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>稳定可靠，SLA 99.95%</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>免费快照备份</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>全面的安全防护</span>
              </div>
            </div>

            <PriceTable 
              columns={cpuServerColumns} 
              dataSource={cpuServerData}
              pagination={false}
            />

            <Space direction="vertical" size="large" style={{ width: '100%', marginTop: '24px' }}>
              <Tag color="red">限时特惠：新用户首年享受3折优惠</Tag>
              <Tag color="blue">支持按量付费，最低0.058元/小时起</Tag>
              <Tag color="green">免费提供基础DDoS防护和Web应用防火墙</Tag>
            </Space>
          </ProductCard>

          <ProductCard 
            id="bare-metal"
            title={<h3>裸金属服务器</h3>}
            extra={
              <Button 
                type="primary" 
                icon={<CustomerServiceOutlined />}
                onClick={showContactModal}
              >
                联系客服
              </Button>
            }
          >
            <p style={{ fontSize: '16px', marginBottom: '24px' }}>
              独享物理服务器资源，提供极致的计算性能和数据安全保障
            </p>
            
            <div className="feature-list">
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>100%独享物理资源</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>无虚拟化性能损耗</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>支持自定义配置</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>高级安全隔离</span>
              </div>
            </div>

            <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
              <Col xs={24} sm={12} lg={6}>
                <Card bordered>
                  <h4>入门级配置</h4>
                  <p>2×Intel Xeon Gold 6248</p>
                  <p>256GB内存</p>
                  <p>2×480GB SSD + 4×4TB HDD</p>
                  <p style={{ color: '#1890ff', fontSize: '20px', fontWeight: 'bold' }}>
                    ¥1,200/月起
                  </p>
                  <Button 
                    type="link" 
                    icon={<CustomerServiceOutlined />}
                    onClick={showContactModal}
                    style={{ padding: 0 }}
                  >
                    获取报价
                  </Button>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card bordered>
                  <h4>标准级配置</h4>
                  <p>2×Intel Xeon Gold 6248</p>
                  <p>512GB内存</p>
                  <p>2×960GB SSD + 8×4TB HDD</p>
                  <p style={{ color: '#1890ff', fontSize: '20px', fontWeight: 'bold' }}>
                    ¥2,800/月起
                  </p>
                  <Button 
                    type="link" 
                    icon={<CustomerServiceOutlined />}
                    onClick={showContactModal}
                    style={{ padding: 0 }}
                  >
                    获取报价
                  </Button>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card bordered>
                  <h4>高性能配置</h4>
                  <p>2×Intel Xeon Platinum 8358</p>
                  <p>1TB内存</p>
                  <p>4×1.92TB NVMe SSD</p>
                  <p style={{ color: '#1890ff', fontSize: '20px', fontWeight: 'bold' }}>
                    ¥5,800/月起
                  </p>
                  <Button 
                    type="link" 
                    icon={<CustomerServiceOutlined />}
                    onClick={showContactModal}
                    style={{ padding: 0 }}
                  >
                    获取报价
                  </Button>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card bordered>
                  <h4>GPU增强型</h4>
                  <p>2×Intel Xeon Gold 6248</p>
                  <p>512GB内存</p>
                  <p>8×NVIDIA A100</p>
                  <p style={{ color: '#1890ff', fontSize: '20px', fontWeight: 'bold' }}>
                    ¥18,000/月起
                  </p>
                  <Button 
                    type="link" 
                    icon={<CustomerServiceOutlined />}
                    onClick={showContactModal}
                    style={{ padding: 0 }}
                  >
                    获取报价
                  </Button>
                </Card>
              </Col>
            </Row>
          </ProductCard>

          <ProductCard 
            id="storage"
            title={<h3>存储服务</h3>}
            extra={
              <Button 
                type="primary" 
                icon={<CustomerServiceOutlined />}
                onClick={showContactModal}
              >
                联系客服
              </Button>
            }
          >
            <p style={{ fontSize: '16px', marginBottom: '24px' }}>
              高性能、高可靠的存储解决方案，满足各种数据存储需求
            </p>

            <div className="feature-list" style={{ marginBottom: '24px' }}>
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>多副本冗余，数据可靠性99.999999999%</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>支持块存储、文件存储、对象存储</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>自动分层存储，优化成本</span>
              </div>
              <div className="feature-item">
                <CheckCircleOutlined />
                <span>全链路加密，保障数据安全</span>
              </div>
            </div>

            <PriceTable 
              columns={storageColumns} 
              dataSource={storageData}
              pagination={false}
            />
          </ProductCard>
        </div>
      </ProductSection>
    </>
  )
}

export default Products 