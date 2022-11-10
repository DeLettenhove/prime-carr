import { Link } from 'react-router-dom'
import { TbPhoneCall } from 'react-icons/tb'

import styles from './header.module.css'

import { menuItems } from '../../data/mock-data'
import logo from '../../assets/logo.svg'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language

  const menuList = menuItems.map((item) => {
    return (
      <li key={item.id} className={styles.menuItem}>
        <Link to={item.link} className={styles.menuLimks}>
          {t(item.value)}
        </Link>
      </li>
    )
  })

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <ul className={styles.menu}>{menuList}</ul>

      <div className={styles.actions}>
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.languageBtn} ${
              currentLanguage === 'en' && styles.activeBtn
            }`}
            value="en"
            onClick={changeLanguage}
          >
            EN
          </button>
          <div className={styles.separator}></div>
          <button
            className={`${styles.languageBtn} ${
              currentLanguage === 'ua' && styles.activeBtn
            }`}
            value="ua"
            onClick={changeLanguage}
          >
            UA
          </button>
        </div>
        <TbPhoneCall className={styles.callImg} />
      </div>
    </div>
  )
}

export default Header
