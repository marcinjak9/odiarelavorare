import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from '../styles/Button.module.css'

export default function Button({ buttonProps, icon, label, link }) {

  const renderIcon = () => {
    if (icon) {
      return <FontAwesomeIcon size="lg" icon={icon} />
    }
  }

  const Component = (props) => {
    if (link) {
      return <a {...buttonProps} className={styles.button}>{props.children}</a>
    }
    return <button {...buttonProps} className={styles.button}>{props.children}</button>
  }

  return (
    <Component>
      {renderIcon()}
      <span>{label}</span>
    </Component>
  )
}