

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from '../avatar/Avatar'
import { Comment } from '../comment/Comment'
import styles from './Post.module.css'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}


interface Content {
  type: "paragraph" | "link" | string;
  content: string;
}

interface PostProps {
  author: Author;
  publisheAt: Date;
  content: Content[];
}

export function Post({author, publisheAt, content}: PostProps) {
  const [comments, setComments] = useState(['teste'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publisheAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publisheAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string) {
    const commentWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar
                    src={author.avatarUrl} 
                  />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>
            <time title={publishedDateFormatted} dateTime={publisheAt.toISOString()}>{publishedDateRelativeToNow}</time>
        </header>
        <div className={styles.content}>
          {content.map(line => {
            if (line.type === "paragraph") {
              return <p key={line.content} >{line.content}</p>
            } else if(line.type === "link") {
              return<p key={line.content}><a href=''>{line.content}</a></p>
            }
          })}
        </div>

        <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
            <strong>Deixe seu feedback</strong>
            <textarea
              name='comment'
              placeholder='Deixe seu comentário'
              value={newCommentText}
              onChange={handleNewCommentChange}
              required
              onInvalid={handleNewCommentInvalid}
            />
            <footer>
                <button 
                  type='submit'
                  disabled={isNewCommentEmpty}
                >Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return (
              <Comment 
                key={comment} 
                content={comment} 
                onDeleteComment={deleteComment} 
              />
            )
          })}
        </div>
    </article>
  )
}
