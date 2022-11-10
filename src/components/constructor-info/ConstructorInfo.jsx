import { useTranslation } from 'react-i18next'
import styles from './constructor-info.module.css'

const ConstructorInfo = ({ model }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={model.img} alt="Car" />
      <div className={styles.box}>
        <h3 className={styles.title}>{model.name}</h3>
        <div className={styles.items}>
          <p className={styles.item}>
            <span className={styles.itemTitle}>
              {t('constructor.titles.color')}:
            </span>
            {t(`constructor.colors.${model.color?.title}`)}
          </p>
          <p className={styles.item}>
            <span className={styles.itemTitle}>
              {t('constructor.titles.engine')}:
            </span>
            {t(`constructor.engines.${model.engine?.title}`)}
          </p>
          <p className={styles.item}>
            <span className={styles.itemTitle}>
              {t('constructor.titles.interior')}:
            </span>
            {t(`constructor.interiors.${model.interior?.title}`)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ConstructorInfo
