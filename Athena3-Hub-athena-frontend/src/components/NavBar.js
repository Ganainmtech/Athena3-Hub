import * as allList from "../list.js"
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import Wallet from './Wallet.js'
function NavBar (params) {
  const navList = allList.navList
  return (
    <div className='navbar'>
      <div className='navbar-logo'>logo</div>
      <Menu className="navbar-menu" mode="horizontal">
        {navList.map(item => (<Menu.Item key={item.id}><Link to={item.path}>{item.name}</Link></Menu.Item>))}
      </Menu>
      {/* <div className='navbar-wallet '>wallet</div> */}
      <Wallet/>
    </div >
  )
}
export default NavBar
