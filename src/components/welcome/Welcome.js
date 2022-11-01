import styles from './welcome.module.css'

import arrow from '../../assets/arrow.svg'

const Welcome = () => {
  return (
    <div className={styles.box}>
      <h1 className={styles.title}>More economy, same speed</h1>
      <p className={styles.subtitle}>
        The most beloved cars of the moment for those who want to ride in style
        without spending too much
      </p>
      <button className="button">
        Discover
        <img src={arrow} alt="Arrow" className={styles.arrow} />
      </button>
    </div>
  )
}

export default Welcome
