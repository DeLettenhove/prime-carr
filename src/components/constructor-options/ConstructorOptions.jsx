import { useState } from 'react'

import styles from './constructor-options.module.css'

import { colorList, engineList, interiorList } from '../../data/mock-data'
import ColorsRadioGroup from '../colors-radio-group/ColorsRadioGroup'

const ConstructorOptions = ({ model, onChangeColor }) => {
  const [color, setColor] = useState(model.color)

  const colorHandler = (e) => {
    setColor(e.target.value)
    onChangeColor(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Additional options</h3>
      <ColorsRadioGroup
        currentColor={color}
        changeHandler={colorHandler}
        list={colorList}
      />
    </div>
  )
}

export default ConstructorOptions
