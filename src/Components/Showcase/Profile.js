import { Container } from 'react-grid-system';

export default function Profile({
    image,
    onchange
}) {
  return (
    <Container className="container">
        <div className="profile-picture-container">
          {image ? (
            <img src={image} alt="user" className="profile-picture" />
          ) : (
            <div className="profile-picture-placeholder"></div>
          )}
        </div>
    </Container>

  );
}
