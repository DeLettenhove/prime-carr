import styles from './constructor-info.module.css'

const ConstructorInfo = ({ model }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={model.img} alt="Car" />
      <div className={styles.box}>
        <h3 className={styles.title}>{model.name}</h3>
        <div className={styles.items}>
          <p className={styles.item}>
            <span className={styles.itemTitle}>Color:</span>
            {model.color}
          </p>
          <p className={styles.item}>
            <span className={styles.itemTitle}>Engine:</span>
            {model.engine}
          </p>
          <p className={styles.item}>
            <span className={styles.itemTitle}>Interior:</span>
            {model.interior}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ConstructorInfo
