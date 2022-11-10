import { useTranslation } from 'react-i18next'
import RadioGroup from '../radio-group/RadioGroup'

import styles from './constructor-options.module.css'
import { colorData, engineData, interiorData } from '../../data/mock-data'

const ConstructorOptions = ({
  model,
  onChangeColor,
  oneChangeEngine,
  onChangeInterior,
}) => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <div className={styles.options}>
        <h3 className={styles.title}>{t('constructor.sections.options')}</h3>
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
    </div>
  )
}

export default ConstructorOptions
