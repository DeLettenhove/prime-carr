import styles from './footer.module.css'

import logo from '../../assets/logo.svg'

import { footerInfo } from '../../data/mock-data'

const Footer = () => {
  return (
    <div className={styles.box}>
      <div className={styles.footerUpper}>
        <img src={logo} alt="" />
        {footerInfo.map((item) => {
          return (
            <div key={item.id} className={styles.infoBox}>
              <p className={styles.infoTitle}>{item.title}</p>
              {item.values.map((item, i) => {
                return (
                  <p key={i} className={styles.infoContent}>
                    {item}
                  </p>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className={styles.footerBottom}>
        <p>Privacy policy</p>
        <p>Terms and conditions</p>
        <p className={styles.copyright}>
          Copyright © 2022 Prime Car. All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
