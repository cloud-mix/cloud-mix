import React from 'react'
import {Button, Modal} from 'react-materialize';

const ModalView = (props) => (
<Modal
  header='Login'
  fixedFooter
  trigger={
    <Button>Login</Button>
  }>
            <input type="text" placeholder="Username" onChange={(e) => props.handleUsernameInputLogin(e.target.value)} />
            <br/>
            <input type="text" placeholder="Password" onChange={(e) => props.handleUserCredentialsLogin(e.target.value)} />

            <Button waves='light'>Register</Button>
            <Button waves='light'>Login</Button>
</Modal>
)

export default ModalView;