import RadioGroup from '../radio-group/RadioGroup'
import AdditionalCost from '../additional-cost/AdditionalCost'

import styles from './constructor-options.module.css'
import { colorData, engineData, interiorData } from '../../data/mock-data'

const ConstructorOptions = ({
  model,
  onChangeColor,
  oneChangeEngine,
  onChangeInterior,
}) => {
  const { color, engine, interior } = model

  return (
    <div className={styles.wrapper}>
      <div className={styles.options}>
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
      {/* <AdditionalCost currentOptions={{ color, engine, interior }} /> */}
    </div>
  )
}

export default ConstructorOptions
