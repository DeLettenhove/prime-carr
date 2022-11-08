import styles from './footer.module.css'

import logo from '../../assets/logo.svg'

import { footerInfo } from '../../data/mock-data'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.box}>
      <div className={styles.footerTop}>
        <Link to="/">
          <img className={styles.footerLogo} src={logo} alt="" />
        </Link>
        <div className={styles.infoWrapper}>
          {footerInfo.map((item) => {
            return (
              <div key={item.id} className={styles.infoBox}>
                <p className={styles.infoTitle}>{item.title}</p>
                <div className={styles.linksList}>
                  {item.values.map((item) => {
                    return (
                      <Link to="/" key={item.id} className={styles.infoLinks}>
                        {item.value}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles.footerBot}>
        <Link to="/">Privacy policy</Link>
        <Link to="/">Terms and conditions</Link>
        <Link to="/" className={styles.copyright}>
          Copyright © 2022 Prime Car. All Rights Reserved
        </Link>
      </div>
    </div>
  )
}

export default Footer
