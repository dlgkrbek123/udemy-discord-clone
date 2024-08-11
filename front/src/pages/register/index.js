import { useState, useMemo } from 'react';
import { Typography } from '@mui/material';
import AuthBox from '../../components/AuthBox';
import RegisterPageInputs from '../../features/register/index/components/RegisterPageInputs';
import RegisterPageFooter from '../../features/register/index/components/RegisterPageFooter';
import { getActions } from '../../store/actions/authActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    getActions(dispatch).register({ mail, username, password }, navigate);
  };

  const isFormValid = useMemo(() => {
    const isUsernameValid =
      username.length > 3 && username.length < 13 && !/^\s+$/g.test([username]);
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      mail
    );
    const isPasswordValid =
      password.length > 5 && password.length < 13 && /^\S+$/.test([password]);

    return isUsernameValid && isEmailValid && isPasswordValid;
  }, [username, mail, password]);

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: 'white' }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        username={username}
        mail={mail}
        password={password}
        setUsername={setUsername}
        setMail={setMail}
        setPassword={setPassword}
      />

      <RegisterPageFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
};

export default RegisterPage;
