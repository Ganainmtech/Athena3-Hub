import logo from "../assets/nameWhite.png"
import React from 'react';
import { Button, Flex  } from 'antd';
function MainPic () {
  return (
    <>
      <div className='mainPic' >
        <div className="title"><img src={logo} alt="Logo" className="mainPic-logo" /></div>
        <div className="mainPic-subtitle">
          <h1 className="subtitle1">Unlocking your potential</h1>
          <div>Learn from women, grow with women, build for women</div>
          </div>
          <Flex gap="large" wrap="wrap">
          <Button>Mint Now</Button>
          <Button>Learn Now</Button>
        </Flex>
      </div>
    </>
  )
}

export default MainPic;
