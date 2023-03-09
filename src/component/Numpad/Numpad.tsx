import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import styles from './Numpad.module.css'

export function Numpad() {
  return (
    <div className={styles.numpadContainer}>
      <Container>
        <Row>
          <Col className='p-0'>
            <button className={styles.numpdBtn}>7</button>
          </Col>
          <Col className='p-0'>
            <button className={styles.numpdBtn}>8</button>
          </Col>
          <Col className='p-0'>
            <button className={styles.numpdBtn}>9</button>
          </Col>
        </Row>
        <Row className='p-0'>
          <Col className='p-0'>
            <button className={styles.numpdBtn}>4</button>
          </Col>
          <Col className='p-0'>
            <button className={styles.numpdBtn}>5</button>
          </Col>
          <Col className='p-0'>
            <button className={styles.numpdBtn}>6</button>
          </Col>
        </Row>
        <Row>
          <Col className='p-0'>
            <button className={styles.numpdBtn}>1</button>
          </Col>
          <Col className='p-0'>
            <button className={styles.numpdBtn}>2</button>
          </Col>
          <Col className='p-0'>
            <button className={styles.numpdBtn}>3</button>
          </Col>
        </Row>
        <Row>
          <Col className='p-0'>
            <button className={styles.bigNumpdBtn}>0</button>
          </Col>
          <Col className='p-0'>
            <button className={styles.numpdBtn}>,</button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}