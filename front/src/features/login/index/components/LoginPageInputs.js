import InputWithLabel from '../../../../components/InputWithLabel';

const LoginPageInputs = ({ mail, password, setMail, setPassword }) => {
  return (
    <>
      <InputWithLabel
        type="text"
        label="E-mail"
        placeholder="Enter e-mail address"
        value={mail}
        setValue={setMail}
      />
      <InputWithLabel
        type="password"
        label="Password"
        placeholder="Enter password"
        value={password}
        setValue={setPassword}
      />
    </>
  );
};

export default LoginPageInputs;
