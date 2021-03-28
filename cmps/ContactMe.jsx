import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export const ContactMe = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const classes = useStyles()

  const sendEmail = (ev) => {
    ev.preventDefault()
    console.log();
  }
  return (
    <section>
      <h2>Contact me</h2>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={sendEmail} noValidate autoComplete="off">

        <TextField style={{ marginBottom: 10 }} placeholder="Full name" value={name} name="name" onChange={ev => setName(ev.target.value)} label="Full Name" variant="outlined" />
        <TextField placeholder="Email" type="email" value={email} name="email" onChange={ev => setEmail(ev.target.value)} label="Email" variant="outlined" />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon></SendIcon>}
        >
          Send
      </Button>
      </form>
    </section>
  )
}
