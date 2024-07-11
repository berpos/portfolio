import { useEffect } from 'react'
import { preLoaderAnim } from '../animations/index';
import './preloader.css'

export default function PreLoader() {
  useEffect(() => {
    preLoaderAnim()
  }, []);

  return (
    <div className='preloader'>
      <div className="texts-container">
        <span>Developer,</span>
        <span>Gamer,</span>
        <span>Vibe.</span>
      </div>
    </div>
  )
}
