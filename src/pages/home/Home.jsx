import AboutUs from '../../components/about-us/AboutUs.jsx'
import Footer from '../../components/footer/Footer.jsx'
import Header from '../../components/header/Header.jsx'
import Welcome from '../../components/welcome/Welcome.jsx'

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
        <Footer />
      </div>
    </div>
  )
}

export default Home
