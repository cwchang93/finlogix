import React from 'react';
import { StyledLogin } from './style'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../store/auth-actions';



const Login = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const handleLogin = () => {
        dispatch(fetchUserData(email, password));
    }

    return (
        <StyledLogin>
            <div className="inputGroup">
                <Input label="Email" width="230px" onChangeCallback={(e) => setEmail(e.target.value)} />
                <Input label="Password" type="password" width="230px" onChangeCallback={(e) => setPassword(e.target.value)} />
                <div className="btnWrap">
                    <Button onClick={handleLogin}>Submit</Button>
                </div>
            </div>
        </StyledLogin>
    )


}

export default Login;