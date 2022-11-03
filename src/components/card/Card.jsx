import styles from './card.module.css'

import personIcon from "../../assets/person.svg"
import transmissionIcon from "../../assets/transmission.svg"

const Card = ({name, variant, img, places, transmssion, price}) => {
  return (
      <div className={styles.card}>
        <h4 className={styles.cardTitle}>{name}</h4>
        <p className={styles.cardVariant}>{variant}</p>
        <img className={styles.cardImg} src={img} alt="Car image" />
        <div className={styles.cardInfoWrapper}>
          <div className={styles.cardInfoBox}>
            <img className={styles.cardInfoIcon} src={personIcon} alt="icon" />  
            <p>{places}</p>
          </div>
          <div className={styles.cardInfoBox}>      
            <img className={styles.cardInfoIcon} src={transmissionIcon} alt="icon" />  
            <p>{transmssion}</p>
          </div>
          <p className={styles.cardPrice}>{price}</p>
        </div>
      </div>  
  )
}

export default Card