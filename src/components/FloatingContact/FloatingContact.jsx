import React, { useState } from 'react'
import { Tooltip, Modal } from 'antd'
import { CustomerServiceOutlined, CloseOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const FloatingWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 100px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ContactButton = styled.div`
  width: 56px;
  height: 56px;
  background: #1890ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(24, 144, 255, 0.6);
  }
  
  .anticon {
    font-size: 24px;
    color: #fff;
  }
`

const QRCodeModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
  }
  
  .ant-modal-body {
    text-align: center;
    padding: 32px;
  }
`

const QRCodeImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 16px;
`

const QRCodeText = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
`

const FloatingContact = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <FloatingWrapper>
        <Tooltip title="联系客服" placement="left">
          <ContactButton onClick={() => setModalVisible(true)}>
            <CustomerServiceOutlined />
          </ContactButton>
        </Tooltip>
      </FloatingWrapper>
      
      <QRCodeModal
        title="扫码联系客服"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={320}
      >
        <QRCodeImage src="./figure.jpg" alt="客服二维码" />
        <QRCodeText>扫一扫上面的二维码，加我为朋友</QRCodeText>
        <QRCodeText style={{ fontSize: '14px', color: '#666' }}>
          客服工作时间：7×24小时在线
        </QRCodeText>
      </QRCodeModal>
    </>
  )
}

export default FloatingContact 