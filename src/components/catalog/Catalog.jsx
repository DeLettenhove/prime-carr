import Card from '../card/Card'

import styles from './catalog.module.css'

import {carsCatalog} from '../../data/mock-data'

const Catalog = () => {
  return (
    <div className={styles.cards}>
      {
        carsCatalog.map((item) => {
          return (
            <Card  
            key={item.id}            
            id={item.id}
            name={item.name} 
            variant={item.variant} 
            img={item.img} 
            places={item.places} 
            transmssion={item.transmssion} 
            price={item.price} 
            />
          )
        })
      }
    </div>
  )
}

export default Catalog