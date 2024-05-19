import React from 'react'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import styles from '../Navbar/Navbar.module.css'
import NavItems from '../NavItems/NavItems'

export default function Navbar() {
  return (
    <div className={styles.wrapper} >
      <Logo />
      <NavItems />
      <Button>Contact Now</Button>
    </div>
  )
}
