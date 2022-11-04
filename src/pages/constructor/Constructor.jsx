import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/header/Header'
import ConstructorInfo from '../../components/constructor-info/ConstructorInfo'
import ConstructorOptions from '../../components/constructor-options/ConstructorOptions'

import { carsCatalog } from '../../data/mock-data'
import styles from './constructor.module.css'

import img from '../../assets/porshe.png'

const carModel = {
  id: 0,
  name: 'Porsche 718 Cayman S',
  variant: 'Coupe',
  img: img,
  transmssion: 'Manual',
  places: 2,
  price: 400,
  color: 'black',
  engine: '4-Cyl 1.5 Liter',
  interior: 'leather',
}

const Contructor = () => {
  // const { id } = useParams()
  // const [model, setModel] = useState({})
  const [totalPrice, setTotalPrice] = useState(null)

  // const getModel = (id) => {
  //   const car = carsCatalog.find((car) => car.id === parseInt(id))
  //   setModel(car)
  // }

  // useEffect(() => {
  //   getModel(id)
  // }, [id])

  const [model, setModel] = useState(carModel)

  const onChangeColor = (color) => {
    setModel((prevState) => ({ ...prevState, color }))
  }

  const onChangeEngine = (engine) => {
    setModel((prevState) => ({ ...prevState, engine }))
  }

  const onChangeInterior = (interior) => {
    setModel((prevState) => ({ ...prevState, interior }))
  }

  return (
    <div className="container">
      <Header />
      <div className={styles.constructor}>
        <ConstructorInfo model={model} />
        <ConstructorOptions
          model={model}
          onChangeColor={onChangeColor}
          oneChangeEngine={onChangeEngine}
          onChangeInterior={onChangeInterior}
        />
      </div>
      {/* <p className={styles.price}>
        <span className={styles.item}>Price:</span>$
        {model.price}
      </p> */}
    </div>
  )
}

export default Contructor
