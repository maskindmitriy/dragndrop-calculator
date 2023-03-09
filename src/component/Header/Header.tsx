import React from 'react'
import styles from '../Header/Header.module.css'
import {Button, Col, Container, Row} from "react-bootstrap";

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <button className={styles.runtimeBtn}>
          <i className={styles.eyeImg}></i>
          Runtime
        </button>
        <button className={styles.constructorBtn}>
          <i className={styles.constructorImg}></i>
          Конструктор
        </button>
      </div>
    </div>
  )
}