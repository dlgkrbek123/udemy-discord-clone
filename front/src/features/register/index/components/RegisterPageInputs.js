import InputWithLabel from '../../../../components/InputWithLabel';

const RegisterPageInputs = ({
  username,
  mail,
  password,
  setUsername,
  setMail,
  setPassword,
}) => {
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
        type="text"
        label="Username"
        placeholder="Enter a username"
        value={username}
        setValue={setUsername}
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

export default RegisterPageInputs;
