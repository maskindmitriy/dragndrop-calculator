import React from 'react';
import styles from '../Canvas/Canvas.module.css'
import logo from '../../asset/icon.svg'


export function Canvas() {
  return (
    <div className={styles.canvasContainer}>
      <div className={styles.canvas}>
        <img style={{marginBottom: '12px'}} src={logo}/>
        <p className={styles.mainParagraph}>Перетащите сюда</p>
        <p className={styles.secParagraph}>любой элемент <br/> из левой панели</p>
      </div>
    </div>
  )
}