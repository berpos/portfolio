import { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animations/index';

export default function PreLoader() {

  // To check length of each path
  // useEffect(() => {
  //   const logos = document.querySelectorAll(".logo path");
  //   for (let i = 0; i < logos.length; i++) {
  //     console.log(`letter ${i} is ${logos[i].getTotalLength()}`);
  //   }
  // }, [])

  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <>
      <div className='preloader'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h1 className='text' data-text="Bernardo">Bernardo</h1>
      </div>
    </>
  )
}
