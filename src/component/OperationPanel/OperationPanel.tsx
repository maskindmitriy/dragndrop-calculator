import React from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";
import styles from './OperationPanel.module.css'

export function OperationPanel() {
  return (
    <div  className={styles.opBtnContainer}>
      <Container fluid>
        <Row>
          <Col className='p-0'>
            <button className={styles.opBtn}>/</button>
          </Col>
          <Col className='p-0'>
            <button className={styles.opBtn}>x</button>
          </Col>
          <Col className='p-0'>
            <button className={styles.opBtn}>-</button>
          </Col>
          <Col className='p-0'>
            <button className={styles.opBtn}>+</button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}