import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
function NotFound () {
  const navigate = useNavigate();
  return (
    <Result
    className='notFound'
    status="warning"
    title="Sorry, this website is under construction."
    extra={
      <Button type="primary" key="console" onClick={ ()=> navigate('/')  }>
        Go Home
      </Button>
    }
  />
  )
}
export default NotFound;