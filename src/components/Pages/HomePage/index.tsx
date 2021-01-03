import React from "react"
import { withRouter } from "react-router"
import styles from "./index.module.scss"
import { AppBar, Toolbar, Typography, Button, createStyles, Theme, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)

const Index = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={styles.Header}>
        <AppBar>
          <Toolbar>
            {/*<IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">*/}
            {/*  <MenuIcon />*/}
            {/*</IconButton>*/}
            <Typography variant="h5" className={classes.title}>
              Cee
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Portfolio</Button>
            <Button color="inherit">Playground</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <div className={styles.Body}></div>
    </div>
  )
}

export default withRouter(Index)
