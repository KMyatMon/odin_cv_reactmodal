import { Container,Row, Col } from 'react-grid-system';

export default function Persoanal({
  // photo,
  name,
  position,
  address,
  bio,
  phoneNumber,
  email,
  // linkedin
  portfolio
}) {
  return (
    <Container className="">
        {/* <img src={photo} alt="user" /> */}
        <Row><h1>{name}</h1></Row>
        <Row>
          <Col><h4>{position}</h4></Col>
          <Col><span>{address}</span></Col>
        </Row>
        <Row><p>{bio}</p></Row>
        <Row>
          <Col><span>{email}</span></Col>
          <Col><span>{phoneNumber}</span></Col>
          <Col><span>{portfolio}</span></Col>
        </Row>
    </Container>

  );
}
