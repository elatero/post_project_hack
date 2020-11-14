import React, { ReactNode } from 'react'
import { useHistory } from 'react-router'

import styles from './MainLayout.module.scss'

import { Logo } from 'assets/img'

type Props = {
  children: ReactNode
}

const MainLayout = (props: Props) => {
  const history = useHistory()
  const { children } = props

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo} onClick={() => history.push('/')}>
            <img src={Logo} alt='Почта России' />
          </div>
          <nav className={styles.navigation}>
            <ul className={styles.list}>
              <li className={styles.item}>Для бизнеса</li>
              <li className={styles.item}>Помощь</li>
              <li className={styles.item}>Выйти</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>Copyright © 2020</div>
      </footer>
    </div>
  )
}

export default MainLayout
