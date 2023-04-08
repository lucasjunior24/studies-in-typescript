import styles from './Avatar.module.css'

export function Avatar({ hasBorder=true, src }) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBordder : styles.avatar} 
      src={src} />
  )
}
