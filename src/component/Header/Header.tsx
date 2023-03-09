import React, {useEffect, useRef, useState} from 'react'
import styles from '../Header/Header.module.css'
import {Button, Col, Container, Row} from "react-bootstrap";

export function Header() {
  const [isRuntime, setIsRuntime] = useState(false)

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <button className={styles.runtimeBtn}
                onClick={e => setIsRuntime(true)}
        >
          {isRuntime
            ? <i className={styles.eyeImgActive}></i>
            : <i className={styles.eyeImg}></i>
          }
          Runtime
        </button>
        <button className={styles.constructorBtn}
                onClick={e => setIsRuntime(false)}
                autoFocus
        >
          {isRuntime
            ? <i className={styles.constructorImg}></i>
            : <i className={styles.constructorImgActive}></i>
          }
          Конструктор
        </button>
      </div>
    </div>
  )
}