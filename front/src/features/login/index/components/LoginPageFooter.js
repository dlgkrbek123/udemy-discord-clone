import { useNavigate } from 'react-router-dom';
import CustomPrimaryButton from '../../../../components/CustomPrimaryButton';
import RedirectInfo from '../../../../components/RedirectInfo';
import { Tooltip } from '@mui/material';

const LoginPageFooter = ({ isFormValid, handleLogin }) => {
  const navigate = useNavigate();

  const getFormNotValidMessage = () => {
    return 'Enter correct e-mail address and password should contains between 6 and 12 character';
  };

  const handleNavigateToRegisterPage = () => {
    navigate('/register');
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : 'Press to log in!'}
      >
        <div>
          <CustomPrimaryButton
            label="Log in"
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>

      <RedirectInfo
        text="Need an account?"
        redirectText="Create an account"
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handleNavigateToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
