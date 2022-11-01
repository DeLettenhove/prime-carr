import AboutUs from '../../components/about-us/AboutUs'
import Header from '../../components/header/Header'
import Welcome from '../../components/welcome/Welcome'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className="container">
          <Header />
          <Welcome />
        </div>
      </div>
      <div className="container">
        <AboutUs />
      </div>
    </div>
  )
}

export default Home
