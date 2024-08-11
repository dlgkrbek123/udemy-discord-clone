import React from 'react';
import { styled } from '@mui/system';

const InputWithLabel = ({ type, label, placeholder, value, setValue }) => {
  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleValueChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Label = styled('p')({
  color: '#b9bbbe',
  textTransform: 'uppercase',
  fontSize: '16px',
  fontWeight: '600',
  width: '100%',
});

const Input = styled('input')({
  flexGrow: 1,
  height: 40,
  border: '1px solid black',
  borderRadius: '5px',
  color: '#bcddde',
  background: '#35393f',
  width: '100%',
  margin: 0,
  fontSize: '16px',
  padding: '0 5px',
});

export default InputWithLabel;
