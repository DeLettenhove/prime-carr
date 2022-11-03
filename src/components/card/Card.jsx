import styles from './card.module.css'

import personIcon from "../../assets/person.svg"
import transmissionIcon from "../../assets/transmission.svg"
import { Link } from 'react-router-dom'

const Card = ({id, name, variant, img, places, transmssion, price}) => {
  return (
      <Link to={`/cars/${id}`} className={styles.card}>
        <h4 className={styles.cardTitle}>{name}</h4>
        <p className={styles.cardVariant}>{variant}</p>
        <div className={styles.cardImgWrapper}>
          <img className={styles.cardImg} src={img} alt="Car" />
        </div>
        <div className={styles.cardInfoWrapper}>
          <div className={styles.cardInfoBox}>
            <img className={styles.cardInfoIcon} src={personIcon} alt="icon" />  
            <p className={styles.cardPlaces}>{places}</p>
          </div>
          <div className={styles.cardInfoBox}>      
            <img className={styles.cardInfoIcon} src={transmissionIcon} alt="icon" />  
            <p className={styles.cardTransmission}>{transmssion}</p>
          </div>
          <p className={styles.cardPrice}>{price}</p>
        </div>
      </Link>  
  )
}

export default Card