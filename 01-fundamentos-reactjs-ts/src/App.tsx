import './global.css'
import styles from './App.module.css'

import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'
import { Post } from './components/post/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/53240060?v=4',
      name: "Lucas de Souza",
      role: "Software Engineer"
    },
    content: [
      {type: 'paragraph', content: "Conteudo top" },
      {type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifolio, é um projeto muito legal, vocês iram gopstar muito." },
      {type: 'link', content: "jane.desing/doctorcare" }
    ],
    publisheAt: new Date('2023-05-13 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/2348618?v=4',
      name: "Junior Junior",
      role: "Software Engineer"
    },
    content: [
      {type: 'paragraph', content: "Fala galera" },
      {type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifolio, é um projeto muito legal, vocês iram gopstar muito." },
      {type: 'link', content: "jane.desing/doctorcare" }
    ],
    publisheAt: new Date('2023-05-13 20:00:00')
  }
]


export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  publisheAt={post.publisheAt}
                  content={post.content}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
