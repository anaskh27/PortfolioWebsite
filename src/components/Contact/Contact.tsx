import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:Sardar.m.anas.khan@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:Sardar.m.anas.khan@gmail.com">
            Sardar.m.anas.khan@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:+919630576848">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+923350587014">(+92) 3350587014</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
