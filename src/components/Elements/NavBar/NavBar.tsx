import styles from "./NavBar.module.scss"
import { AppBar, Button, createStyles, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core"
import React from "react"

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

const playgroundPage = () => () => {
  location.assign(`/playground`)
}

const homePage = () => () => {
  location.assign(`/`)
}

const NavBar: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={styles.Header}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Cee
          </Typography>
          <Button color="inherit" onClick={homePage()}>
            Home
          </Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit" onClick={playgroundPage()}>
            Playground
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export { NavBar }
