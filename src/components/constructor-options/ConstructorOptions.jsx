import RadioGroup from '../radio-group/RadioGroup'

import styles from './constructor-options.module.css'
import { colorData, engineData, interiorData } from '../../data/mock-data'

const ConstructorOptions = ({
  model,
  onChangeColor,
  oneChangeEngine,
  onChangeInterior,
}) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Additional options</h3>
      <RadioGroup
        current={model.color}
        changeHandler={onChangeColor}
        data={colorData}
        isColors={true}
      />
      <RadioGroup
        current={model.engine}
        changeHandler={oneChangeEngine}
        data={engineData}
        isColors={false}
      />
      <RadioGroup
        current={model.interior}
        changeHandler={onChangeInterior}
        data={interiorData}
        isColors={false}
      />
    </div>
  )
}

export default ConstructorOptions
