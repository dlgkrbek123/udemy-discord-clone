import { useNavigate } from 'react-router-dom';
import CustomPrimaryButton from '../../../../components/CustomPrimaryButton';
import RedirectInfo from '../../../../components/RedirectInfo';
import { Tooltip } from '@mui/material';

const RegisterPageFooter = ({ isFormValid, handleRegister }) => {
  const navigate = useNavigate();

  const getFormNotValidMessage = () => {
    return 'Username should contains between 3 and 12 characters and password should contains between 6 and 12 character.Enter correct e-mail address';
  };

  const handleNavigateToLoginPage = () => {
    navigate('/login');
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : 'Press to register!'}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=""
        redirectText="Alread have an account ?"
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handleNavigateToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
