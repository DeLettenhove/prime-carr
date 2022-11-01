import styles from './header.module.css'

import { menuItems } from '../../data/mock-data'
import logo from '../../assets/logo.png'

const Header = () => {
  const menuList = menuItems.map((item) => {
    return (
      <li key={item.id} className={styles.menuItem}>
        {item.value}
      </li>
    )
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logoImg} />
        <span className={styles.logoTitle}>prime car</span>
      </div>
      <ul className={styles.menu}>{menuList}</ul>
      <button className="button">Contact Us</button>
    </div>
  )
}

export default Header
