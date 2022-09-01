import styled, { css } from 'styled-components';

function Form() {
  return (
    <FormWrapper>
      <Input placeholder="Enter your Name" />
      <Input type="email" placeholder="Enter a valid email address" />
      <TextArea placeholder="Enter your message" />
      <SubmitButton>SUBMIT</SubmitButton>
    </FormWrapper>
  );
}

export default Form;

const FormWrapper = styled.form`
  width: 447px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: 20px auto 0;
`;

const CommonInputStyle = css`
  color: #111;
  font-size: 1rem;
  padding: 10px 12px;
  border: none;
  border-bottom: solid 2px #000;
  outline: none;

  /* &::placeholder {
    color: red;
  } */
`;

const Input = styled.input`
  margin-bottom: 28px;
  ${CommonInputStyle}
`;

const TextArea = styled.textarea`
  margin-bottom: 28px;
  height: 108px;
  resize: none;
  ${CommonInputStyle}
`;

const SubmitButton = styled.button`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #000;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
