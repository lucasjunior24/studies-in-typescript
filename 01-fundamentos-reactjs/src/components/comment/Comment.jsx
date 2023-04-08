import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src='https://avatars.githubusercontent.com/u/53240060?v=4' />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Souza</strong>
              <time title='' dateTime='2023-05-13'>Cerca de 1h atrás</time>
            </div>

            <button title='deletar comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom</p>
        </div>

        <footer>
          <button title='deletar comentário'>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
 