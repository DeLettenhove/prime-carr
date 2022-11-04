import styles from './colors-radio-group.module.css'

const ColorsRadioGroup = ({ currentColor, changeHandler, data }) => {
  return (
    <div className={styles.colors}>
      <h4 className={styles.title}>{data.title}</h4>
      {data.values.map((item) => {
        return (
          <input
            key={item.id}
            className={`${styles.color} ${item.value}`}
            type="radio"
            name={data.title}
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
