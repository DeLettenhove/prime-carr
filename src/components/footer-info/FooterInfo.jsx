import { Link } from 'react-router-dom'

import styles from './footer-info.module.css'

const FooterInfo = ({ title, list }) => {
  return (
    <div className={styles.infoBox}>
      <p className={styles.infoTitle}>{title}</p>
      <div className={styles.linksList}>
        {list.map((item) => {
          return (
            <Link to="/" key={item} className={styles.infoLinks}>
              {item}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default FooterInfo
