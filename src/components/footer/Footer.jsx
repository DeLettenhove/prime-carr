import styles from './footer.module.css'

import logo from '../../assets/logo.svg'

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import FooterInfo from '../footer-info/FooterInfo'

const Footer = () => {
  const { t } = useTranslation()

  const footerData = [
    {
      id: 0,
      title: t('footer.location.title'),
      list: t(`footer.location.cities`, {
        returnObjects: true,
      }),
    },
    {
      id: 1,
      title: t('footer.quickLinks.title'),
      list: t(`footer.quickLinks.links`, {
        returnObjects: true,
      }),
    },
    {
      id: 2,
      title: t('footer.emailUs.title'),
      list: t(`footer.emailUs.emails`, {
        returnObjects: true,
      }),
    },
    {
      id: 3,
      title: t('footer.callUs.title'),
      list: t(`footer.callUs.phones`, {
        returnObjects: true,
      }),
    },
  ]

  const footerInfo = footerData.map((item) => {
    return <FooterInfo key={item.id} title={item.title} list={item.list} />
  })

  return (
    <div className={styles.box}>
      <div className={styles.footerTop}>
        <Link to="/">
          <img className={styles.footerLogo} src={logo} alt="" />
        </Link>
        <div className={styles.infoWrapper}>{footerInfo}</div>
      </div>
      <div className={styles.footerBot}>
        <Link to="/">{t('footer.policy')}</Link>
        <Link to="/">{t('footer.terms')}</Link>
        <Link to="/" className={styles.copyright}>
          {t('footer.copyright')}
        </Link>
      </div>
    </div>
  )
}

export default Footer
