import { useTranslation } from 'react-i18next'

import styles from './welcome.module.css'
import arrow from '../../assets/arrow.svg'

const Welcome = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.box}>
      <h1 className={styles.title}>{t('welcome.title')}</h1>
      <p className={styles.subtitle}>{t('welcome.subtitle')}</p>
      <button className="button">
        {t('welcome.discoverBtn')}
        <img src={arrow} alt="Arrow" className={styles.arrow} />
      </button>
    </div>
  )
}

export default Welcome
