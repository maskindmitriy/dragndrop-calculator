import React from 'react'
import styles from './Input.module.css'

export function Input() {
  return (
    <div className={styles.input}>
      <div className={styles.innerRectInput}>
        <p className={styles.label}>0</p>
      </div>
    </div>
  )
}