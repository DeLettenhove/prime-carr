import styles from './additional-cost.module.css'

const AdditionalCost = ({ color, engine, interior }) => {
  return (
    <>
      <h3 className={styles.title}>Additional cost</h3>
      <div className={styles.box}>
        <ul className={styles.items}>
          {color && (
            <li className={styles.item}>
              <span className={styles.itemTitle}>{color.title}</span>
              {color.cost}
            </li>
          )}
          {engine && (
            <li className={styles.item}>
              <span className={styles.itemTitle}>{engine.title}</span>
              {engine.cost}
            </li>
          )}
          {interior && (
            <li className={styles.item}>
              <span className={styles.itemTitle}>{interior.title}</span>
              {interior.cost}
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default AdditionalCost
