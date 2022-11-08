import { Link } from 'react-router-dom'
import { TbPhoneCall } from 'react-icons/tb'

import styles from './header.module.css'

import { menuItems } from '../../data/mock-data'
import logo from '../../assets/logo.svg'

const Header = () => {
  const menuList = menuItems.map((item) => {
    return (
      <li key={item.id} className={styles.menuItem}>
        <Link to={item.link} className={styles.menuLimks}>
          {item.value}
        </Link>
      </li>
    )
  })

  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <ul className={styles.menu}>{menuList}</ul>
      <button className={`${styles.contactBtn} button`}>Contact Us</button>
      <TbPhoneCall className={styles.callImg} />
    </div>
  )
}

export default Header
