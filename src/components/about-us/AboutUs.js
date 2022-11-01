import styles from './about-us.module.css'

import { aboutUsContent } from '../../data/mock-data'
import aboutImg from '../../assets/about-us.png'

const aboutUsDescription = aboutUsContent.map((item) => {
  return (
    <p key={item.id} className={styles.description}>
      {item.value}
    </p>
  )
})

const AboutUs = () => {
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>About us</h2>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutContent}>{aboutUsDescription}</div>
        <img src={aboutImg} alt="Sport car" className={styles.aboutImg} />
      </div>
    </div>
  )
}

export default AboutUs
