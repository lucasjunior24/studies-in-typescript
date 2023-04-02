import './global.css'
import styles from './App.module.css'

import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Post } from './components/post/Post'

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
