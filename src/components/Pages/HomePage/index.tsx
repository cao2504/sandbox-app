import React from "react"
import { withRouter } from "react-router"
import styles from "./index.module.scss"

const Index = () => {
  return <div className={styles.Body} />
}

export default withRouter(Index)
