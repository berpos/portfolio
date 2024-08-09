import styles from './home.module.css'
import LePhoto from '../images/LePhoto.jpg';


export default function Home() {
  return (
    <div className={styles.aboutImage}>
      <img src={LePhoto} alt=""/>
    </div>
  )
}
