import styles from './radio-group.module.css'

const RadioGroup = ({ current, data, changeHandler, isColors }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h4 className={styles.title}>{data.title}</h4>
        <div className={isColors ? styles.colors : styles.items}>
          {data.values.map((item) => {
            return (
              <div key={item.id} className={styles.item}>
                <input
                  id={item.id}
                  className={
                    isColors ? `${styles.color} ${item.value}` : styles.radio
                  }
                  type="radio"
                  name={data.title}
                  value={item.value}
                  data-cost={item.cost}
                  checked={item.value === current}
                  onChange={changeHandler}
                />
                {!isColors && (
                  <label className={styles.label} htmlFor={item.id}>
                    {item.value}
                  </label>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RadioGroup
