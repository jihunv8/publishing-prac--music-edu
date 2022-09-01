import styled from 'styled-components';
import Form from './Form';

function ContactForm() {
  return (
    <ContactFormWrapper>
      <Title>Contact Us</Title>
      <Form />
      <ImageSource>Image from Freepik</ImageSource>
    </ContactFormWrapper>
  );
}

export default ContactForm;

const ContactFormWrapper = styled.div`
  background-color: #fff;
  width: 710px;
  height: 600px;
  margin-left: auto;
  margin-right: 0;
  padding: 30px 40px 30px 180px;
`;

const Title = styled.h2`
  color: #111111;
  font-family: oswald, sans-serif;
  font-size: 3.75rem;
  line-height: 110%;
  text-align: center;
`;

const ImageSource = styled.p`
  color: #111111;
  margin-top: 40px;
  line-height: 160%;
  text-align: center;
`;
