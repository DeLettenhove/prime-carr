import { useState, useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/header/Header'
import ConstructorInfo from '../../components/constructor-info/ConstructorInfo'
import ConstructorOptions from '../../components/constructor-options/ConstructorOptions'
import AdditionalCost from '../../components/additional-cost/AdditionalCost'

import { carsCatalog, carsImages } from '../../data/mock-data'
import styles from './constructor.module.css'

const changeImg = (color, model) => {
  const car = carsImages.find((item) => item.name === model.name)
  const image = car.colors[`${color}`]
  return image
}

const extraReducer = (state, action) => {
  switch (action.type) {
    case 'REPAINT':
      return { ...state, color: action.payload }

    case 'CHANGE_ENGINE':
      return { ...state, engine: action.payload }

    case 'CHANGE_INTERIOR':
      return { ...state, interior: action.payload }

    case 'GET_DEFAULT': {
      return action.payload
    }
    default:
      return state
  }
}

const Contructor = () => {
  const { id } = useParams()
  const [model, setModel] = useState({})
  const [defaultOptions, setDefaultOptions] = useState({})
  const [extraOptions, dispatchExtra] = useReducer(extraReducer, {})

  const getModel = (id) => {
    const car = carsCatalog.find((car) => car.id === parseInt(id))
    const { img, color, engine, interior } = car
    setModel(car)
    setDefaultOptions({ img, color, engine, interior })
    dispatchExtra({
      type: 'GET_DEFAULT',
      payload: { color, engine, interior },
    })
  }

  useEffect(() => {
    getModel(id)
  }, [id])

  const onChangeColor = (e) => {
    const value = e.target.value
    const isDefault = value === defaultOptions.color.title

    const newImg = changeImg(value, model)

    dispatchExtra({
      type: 'REPAINT',
      payload: {
        id: Date.now(),
        action: 'constructor.actions.color',
        title: value,
        cost: e.target.dataset.cost,
        isDefault,
      },
    })

    setModel((prevState) => ({
      ...prevState,
      img: newImg,
      color: { ...prevState.color, title: value },
    }))
  }

  const onChangeEngine = (e) => {
    const value = e.target.value
    const isDefault = value === defaultOptions.engine.title

    dispatchExtra({
      type: 'CHANGE_ENGINE',
      payload: {
        id: Date.now(),
        action: 'constructor.actions.engine',
        title: value,
        cost: e.target.dataset.cost,
        isDefault,
      },
    })

    setModel((prevState) => ({
      ...prevState,
      engine: { ...prevState.engine, title: value },
    }))
  }

  const onChangeInterior = (e) => {
    const value = e.target.value
    const isDefault = value === defaultOptions.interior.title

    dispatchExtra({
      type: 'CHANGE_INTERIOR',
      payload: {
        id: Date.now(),
        action: 'constructor.actions.interior',
        title: value,
        cost: e.target.dataset.cost,
        isDefault,
      },
    })

    setModel((prevState) => ({
      ...prevState,
      interior: { ...prevState.interior, title: value },
    }))
  }

  const resetHandler = () => {
    const { color, engine, interior } = defaultOptions

    setModel((prev) => ({ ...prev, ...defaultOptions }))
    dispatchExtra({
      type: 'GET_DEFAULT',
      payload: { color, engine, interior },
    })
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
          <AdditionalCost
            extra={extraOptions}
            basePrice={model.basePrice}
            reset={resetHandler}
          />
        </div>
      </div>
    </div>
  )
}

export default Contructor
