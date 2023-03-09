import React from 'react'
import styles from './SolveButton.module.css'

export function SolveButton() {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.solveBtn}>=</button>
    </div>
  )
}