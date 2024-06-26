import React from 'react'
import styles from '../Button/Button.module.css'

function Button({ children }) {
  return (
    <button className={styles.btn} >{ children }</button>
  )
}

export default Button