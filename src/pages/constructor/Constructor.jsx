import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/header/Header'
import ConstructorInfo from '../../components/constructor-info/ConstructorInfo'
import ConstructorOptions from '../../components/constructor-options/ConstructorOptions'
import AdditionalCost from '../../components/additional-cost/AdditionalCost'

import { carsCatalog } from '../../data/mock-data'
import { colorData, engineData, interiorData } from '../../data/mock-data'
import styles from './constructor.module.css'

const Contructor = () => {
  const { id } = useParams()
  const [model, setModel] = useState({})
  const [defaultOptions, setDefaultOptions] = useState({})
  const [newColor, setNewColor] = useState('')
  const [newEngine, setNewEngine] = useState('')
  const [newInterior, setNewInterior] = useState('')

  const getModel = (id) => {
    const car = carsCatalog.find((car) => car.id === parseInt(id))
    const { color, engine, interior } = car
    setModel(car)
    setDefaultOptions({ color, engine, interior })
  }

  useEffect(() => {
    getModel(id)
  }, [id])

  const onChangeColor = (e) => {
    const value = e.target.value
    setModel((prevState) => ({ ...prevState, color: value }))
    if (value !== defaultOptions.color) {
      setNewColor({ title: 'Repaint', cost: e.target.dataset.cost })
    } else {
      setNewColor('')
    }
  }

  const onChangeEngine = (e) => {
    const value = e.target.value
    setModel((prevState) => ({ ...prevState, engine: value }))
    if (value !== defaultOptions.engine) {
      setNewEngine({ title: 'Change engine', cost: e.target.dataset.cost })
    } else {
      setNewEngine('')
    }
  }

  const onChangeInterior = (e) => {
    const value = e.target.value
    setModel((prevState) => ({ ...prevState, interior: value }))
    if (value !== defaultOptions.interior) {
      setNewInterior({ title: 'Change interior', cost: e.target.dataset.cost })
    } else {
      setNewInterior('')
    }
  }

  return (
    <div className="container">
      <Header />
      <div className={styles.constructor}>
        <ConstructorInfo model={model} />
        <div className={styles.additional}>
          <ConstructorOptions
            model={model}
            onChangeColor={onChangeColor}
            oneChangeEngine={onChangeEngine}
            onChangeInterior={onChangeInterior}
          />
          {(newColor || newEngine || newInterior) && (
            <AdditionalCost
              color={newColor}
              engine={newEngine}
              interior={newInterior}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Contructor
