import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const buttonStyles = makeStyles({
  button: {
    background: "linear-gradient(to right, #c0392b, #8e44ad)",
    width: "140px",
    height: "38px",
    color: "white",
    fontWeight: "bold",
    marginTop: "20px",
  },
})

const RemoveAll = () => {
  const classes = buttonStyles()
  return <Button className={classes.button}>Remove all</Button>
}

export default RemoveAll
