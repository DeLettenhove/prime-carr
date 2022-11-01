import styles from './header.module.css'

import logo from '../../assets/logo.png'

const menuItems = [
  {
    id: 0,
    value: 'Home',
  },
  {
    id: 1,
    value: 'About',
  },
  {
    id: 2,
    value: 'Benefits',
  },
  {
    id: 3,
    value: 'Cars',
  },
]

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
      <button className={styles.button}>Contact Us</button>
    </div>
  )
}

export default Header
