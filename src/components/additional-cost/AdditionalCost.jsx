import { useState } from 'react'
import styles from './additional-cost.module.css'
import { colorData } from '../../data/mock-data'

const AdditionalCost = ({ list }) => {
  // const [color, engine, interior] = list

  console.log(list)

  return (
    <>
      <h3 className={styles.title}>Additional cost</h3>
      <div className={styles.box}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <span className={styles.itemTitle}>color</span>
            {list[0].cost}
          </li>
          {/* <li className={styles.item}>
            <span className={styles.itemTitle}>Endine{engine.cost}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.itemTitle}>Interior{interior.cost}</span>
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default AdditionalCost
