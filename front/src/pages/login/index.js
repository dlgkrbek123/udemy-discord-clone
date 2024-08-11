import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthBox from '../../components/AuthBox';
import LoginPageHeader from '../../features/login/index/components/LoginPageHeader';
import LoginPageInputs from '../../features/login/index/components/LoginPageInputs';
import LoginPageFooter from '../../features/login/index/components/LoginPageFooter';
import { getActions } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFormValid = useMemo(() => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      mail
    );
    const isPasswordValid =
      password.length > 5 && password.length < 13 && /^\S+$/.test([password]);

    return isEmailValid && isPasswordValid;
  }, [mail, password]);

  const handleLogin = () => {
    getActions(dispatch).login({ mail, password }, navigate);
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        mail={mail}
        password={password}
        setMail={setMail}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default LoginPage;
