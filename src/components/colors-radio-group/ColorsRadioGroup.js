import styles from './colors-radio-group.module.css'

const ColorsRadioGroup = ({ currentColor, changeHandler, list }) => {
  return (
    <div className={styles.colors}>
      <h4>Colors:</h4>
      {list.map((item) => {
        return (
          <input
            key={item.id}
            className={`${styles.color} ${item.value}`}
            type="radio"
            name="color"
            value={item.value}
            checked={item.value === currentColor}
            onChange={changeHandler}
          />
        )
      })}
    </div>
  )
}

export default ColorsRadioGroup
