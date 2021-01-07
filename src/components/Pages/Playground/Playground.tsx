import React from "react"
import { withRouter } from "react-router"
import styles from "./Playground.module.scss"

const Playground = () => {
  return (
    <div className={styles.Body}>
      <p>a</p>
    </div>
  )
}

export default withRouter(Playground)
