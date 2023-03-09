import React from 'react'
import {Header} from "../Header/Header";
import {Sidebar} from "../Sidebar/Sidebar";
import {Canvas} from "../Canvas/Canvas";
import styles from '../Workspace/Workspace.module.css'

export function Workspace() {
  return (
    <div className={styles.square}>
      <div className={styles.container}>
        <Header/>
        <div className={styles.wsContainer}>
          <Sidebar/>
          <Canvas/>
        </div>
      </div>
    </div>
  )
}