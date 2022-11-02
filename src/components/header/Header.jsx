import {TbPhoneCall} from 'react-icons/tb'

import styles from './header.module.css'

import { menuItems } from '../../data/mock-data'
import logo from '../../assets/logo.svg'

const Header = () => {
  const menuList = menuItems.map((item) => {
    return (
      <li key={item.id} className={styles.menuItem}>
        <a href="/" className={styles.menuLimks}>{item.value}</a>
      </li>
    )
  })

  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <ul className={styles.menu}>{menuList}</ul>
      <button className={`${styles.contactBtn} button`}>Contact Us</button>
      <TbPhoneCall className={styles.callImg} />
    </div>
  )
}

export default Header
