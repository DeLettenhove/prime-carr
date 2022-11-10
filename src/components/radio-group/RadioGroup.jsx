import { useTranslation } from 'react-i18next'
import styles from './radio-group.module.css'

const RadioGroup = ({ current, data, changeHandler, isColors }) => {
  const { t } = useTranslation()

  return (
    <div>
      <div className={styles.wrapper}>
        <h4 className={styles.title}>{t(data.title)}</h4>
        <div className={isColors ? styles.colors : styles.items}>
          {data.values.map((item) => {
            return (
              <div key={item.id} className={styles.item}>
                <input
                  id={item.id}
                  className={
                    isColors ? `${styles.color} ${t(item.value)}` : styles.radio
                  }
                  type="radio"
                  name={t(data.title)}
                  value={t(item.value)}
                  data-cost={item.cost}
                  checked={item.value === current?.title}
                  onChange={changeHandler}
                />
                {!isColors && (
                  <label className={styles.label} htmlFor={item.id}>
                    {t(`${data.base}.${item.value}`)}
                  </label>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RadioGroup
