import styles from './about-us.module.css'

import aboutImg from '../../assets/about-us.png'
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <div id="about-us" className={styles.box}>
      <h2 className={styles.title}>{t('aboutUs.title')}</h2>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutContent}>
          <p className={styles.description}>{t('aboutUs.description.part1')}</p>
          <p className={styles.description}>{t('aboutUs.description.part2')}</p>
          <p className={styles.description}>{t('aboutUs.description.part3')}</p>
        </div>
        <div>
          <img src={aboutImg} alt="Sport car" className={styles.aboutImg} />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
