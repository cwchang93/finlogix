import React from 'react';
import { StyledLogin } from './style'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

const Login = () => {


    return (
        <StyledLogin>
            <div className="inputGroup">
                <Input label="Email" width="230px" />
                <Input label="Password" type="password" width="230px" />
                <div className="btnWrap">
                    <Button>Submit</Button>

                </div>
            </div>
        </StyledLogin>
    )


}

export default Login;