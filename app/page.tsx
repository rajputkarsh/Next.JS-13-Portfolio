'use client';

import { useRouter } from 'next/navigation'
import style from './splash.module.scss';

function AnimatedSplash() {

  return (
    <div className={style.logoWrapper}>
      <div className={style.loading}>
        <div className={style.ball}></div>
        <div className={style.ball}></div>
        <div className={style.ball}></div>
        <div className={style.ball}></div>
        <div className={style.ball}></div>
        <div className={style.ball}></div>
        <div className={style.ball}></div>
      </div>
    </div>
  );
}

function Splash() {

  const router = useRouter();

  setTimeout(() => {router.push("/home")}, 1500);

  return (<AnimatedSplash />)
    
}

export default Splash;