import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/header/Header'
import ConstructorInfo from '../../components/constructor-info/ConstructorInfo'
import ConstructorOptions from '../../components/constructor-options/ConstructorOptions'

import { carsCatalog } from '../../data/mock-data'
import styles from './constructor.module.css'

const Contructor = () => {
  const { id } = useParams()
  const [model, setModel] = useState({})

  const getModel = (id) => {
    const car = carsCatalog.find((car) => car.id === parseInt(id))
    setModel(car)
  }

  useEffect(() => {
    getModel(id)
  }, [id])

  const onChangeColor = (e) => {
    setModel((prevState) => ({ ...prevState, color: e.target.value }))
  }

  const onChangeEngine = (e) => {
    setModel((prevState) => ({ ...prevState, engine: e.target.value }))
  }

  const onChangeInterior = (e) => {
    setModel((prevState) => ({ ...prevState, interior: e.target.value }))
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
    </div>
  )
}

export default Contructor
