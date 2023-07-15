import styles from './button.module.css'

export default function Button({ children, fullwidth, ...props }) {
  return(
    <button className={`${styles.button} ${fullwidth && styles.fullwidth}`} {...props}>{children}</button>
  )
}