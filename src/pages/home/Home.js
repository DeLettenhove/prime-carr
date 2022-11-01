import Header from '../../components/header/Header'
import Welcome from '../../components/welcome/Welcome'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.box}>
      <div className="container">
        <Header />
        <Welcome />
      </div>
    </div>
  )
}

export default Home
