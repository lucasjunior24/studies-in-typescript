import { Comment } from '../comment/Comment'
import styles from './Post.module.css'


export function Post() {
  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img 
                    className={styles.avatar} 
                    src='https://avatars.githubusercontent.com/u/53240060?v=4' />
                <div className={styles.authorInfo}>
                    <strong>Lucas de Souza</strong>
                    <span>Software Engineer</span>
                </div>
            </div>

            <time title='' dateTime='2023-05-13'>Publicado há 1h</time>
        </header>

        <div className={styles.content}>
            <p>Fala galera</p>{" "}
            <p>Fala galera</p>{" "}
            <p><a href='#'>Fala galera</a></p>{" "}
            <p><a href='#'>Fala galera</a></p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea
                placeholder='Deixe seu comentário'
            />
            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>
    </article>
  )
}
