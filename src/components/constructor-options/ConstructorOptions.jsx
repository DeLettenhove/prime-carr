import { useState } from 'react'

import styles from './constructor-options.module.css'

import { colorData, engineData, interiorData } from '../../data/mock-data'
import RadioGroup from '../radio-group/RadioGroup'

const ConstructorOptions = ({
  model,
  onChangeColor,
  oneChangeEngine,
  onChangeInterior,
}) => {
  const [color, setColor] = useState(model.color)
  const [engine, setEngine] = useState(model.engine)
  const [interior, setInterior] = useState(model.interior)

  const colorHandler = (e) => {
    setColor(e.target.value)
    onChangeColor(e.target.value)
  }

  const engineHandler = (e) => {
    setEngine(e.target.value)
    oneChangeEngine(e.target.value)
  }

  const interiorHandler = (e) => {
    setInterior(e.target.value)
    onChangeInterior(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Additional options</h3>
      <RadioGroup
        current={color}
        changeHandler={colorHandler}
        data={colorData}
        isColors={true}
      />
      <RadioGroup
        current={engine}
        changeHandler={engineHandler}
        data={engineData}
        isColors={false}
      />
      <RadioGroup
        current={interior}
        changeHandler={interiorHandler}
        data={interiorData}
        isColors={false}
      />
    </div>
  )
}

export default ConstructorOptions
