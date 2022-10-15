import * as React from 'react';
import Canvas from './Canvas'

import styles from './canvasMapGenerator.module.css';

function CanvasMapGenerator() {

  return (<><h1>Hello world!</h1>
  <div className={styles.canvas}><Canvas  ></Canvas></div></>)
}

export default CanvasMapGenerator