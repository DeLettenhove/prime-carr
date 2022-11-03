import styles from './footer.module.css'

import logo from '../../assets/logo.svg'

import { footerInfo } from '../../data/mock-data'

const Footer = () => {
  return (
    <div className={styles.box}>
      <div className={styles.footerTop}>
        <a href='/'>
          <img className={styles.footerLogo} src={logo} alt="" />
        </a>
       <div className={styles.infoWrapper}> 
        {footerInfo.map((item) => {
          return (
            <div key={item.id} className={styles.infoBox}>
              <p className={styles.infoTitle}>{item.title}</p>
              <div className={styles.linksList}>
              {item.values.map((item) => {
                return (
                  <a href='/' key={item.id} className={styles.infoLinks}>
                    {item.value}
                  </a>
                )
              })}
              </div>
            </div>
          )
        })}
        </div>
      </div>
      <div className={styles.footerBot}>
        <a href='/'>Privacy policy</a>
        <a href='/'>Terms and conditions</a>
        <a href='/' className={styles.copyright}>
          Copyright © 2022 Prime Car. All Rights Reserved
        </a>
      </div>
    </div>
  )
}

export default Footer
