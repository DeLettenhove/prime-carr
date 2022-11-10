import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import styles from './not-found.module.css'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}>
        <div className={styles.msg}>
          <h1 className={styles.title}>{t('notFound.title')}</h1>
          <p className={styles.description}>{t('notFound.description')}</p>
          <Link to="/" className={`${styles.returnBtn} button`}>
            {t('notFound.home')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
