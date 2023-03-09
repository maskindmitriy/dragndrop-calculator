import React from 'react'
import {Col, Container, Form, Row} from 'react-bootstrap'
import {OperationPanel} from "../OperationPanel/OperationPanel";
import {Input} from "../Input/Input";
import {Numpad} from "../Numpad/Numpad";
import {SolveButton} from "../SolveButton/SolveButton";
import styles from '../Sidebar/Sidebar.module.css'

export function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <Container>
        <Row>
          <Col className='p-0 d-flex justify-content-center'>
            <div>
              <Input/>
              <OperationPanel/>
              <Numpad/>
              <SolveButton/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

// <Container>
//   <Row className=''>
//     <Col className='p-0'>
//       <Input/>
//       <OperationPanel/>
//       <Numpad/>
//       <SolveButton/>
//     </Col>
//   </Row>
// </Container>