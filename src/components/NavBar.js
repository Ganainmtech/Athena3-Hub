import * as allList from "../list.js";
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import Wallet from './Wallet.js';
import LogoImage from '../assets/TransperantLogo.png';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function NavBar (params) {
  const navList = allList.navList;
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offsetToFix = 100; // 根据需要调整固定导航栏的滚动偏移

      if (scrollPosition > offsetToFix && !isFixed) {
        setIsFixed(true);
      } else if (scrollPosition <= offsetToFix && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 清除监听器，防止内存泄漏
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);

  return (
    <div className={`navbar ${isFixed ? 'fixed' : ''}`}>
      <div onClick={() => navigate('/')}>
        <img className='navbar-logo' src={LogoImage} alt="Logo" />
      </div>
      <Menu className="navbar-menu" mode="horizontal">
        {navList.map(item => (<Menu.Item key={item.id}><Link to={item.path}>{item.name}</Link></Menu.Item>))}
      </Menu>
      <div className='navbar-wallet'><Wallet /></div>
    </div >
  );
}
export default NavBar;
