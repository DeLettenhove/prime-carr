import styles from './additional-cost.module.css'

const isVisible = (arr) => {
  return Boolean(arr.length)
}

const AdditionalCost = ({ extra, basePrice }) => {
  const extraCosts = Object.values(extra)
  const filteredCosts = extraCosts.filter((item) => !item.isDefault)

  const getTotal = (base, additional) => {
    const extraCost = additional.reduce(
      (prev, curr) => parseInt(prev) + parseInt(curr.cost),
      0
    )
    const total = base + extraCost
    return total
  }

  return (
    <>
      {isVisible(filteredCosts) && (
        <>
          <h3 className={styles.title}>Cost</h3>
          <div className={styles.box}>
            <ul className={styles.items}>
              {filteredCosts.map((item) => {
                return (
                  <li key={item.id} className={styles.item}>
                    <span className={styles.itemTitle}>{item.title}</span>
                    {item.cost}
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      )}
      <div className={styles.price}>
        Total cost: ${getTotal(basePrice, extraCosts)}
      </div>
    </>
  )
}

export default AdditionalCost
