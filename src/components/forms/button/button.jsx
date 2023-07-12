import styles from './button.module.css'

export default function Button({ children, fullwidth }) {
  return(
    <button className={`${styles.button} ${fullwidth && styles.fullwidth}`}>{children}</button>
  )
}