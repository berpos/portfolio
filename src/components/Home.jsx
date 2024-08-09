import styles from './home.module.css'
import LePhoto from '../images/LePhoto.jpg';


export default function Home() {
  return (
    <div>
      <img src={LePhoto} alt="" className={styles.teste}/>
    </div>
  )
}
