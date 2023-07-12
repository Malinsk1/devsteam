import styles from './input.module.css'

export default function Input({ fullwidth, ...props }) {
  return(
    <input className={`${styles.input} ${fullwidth && styles.fullwidth}`} {...props} />
  )
}