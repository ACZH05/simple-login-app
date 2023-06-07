import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card } from 'react-bootstrap';

function Profile() {
  return (
    <Container>
      <h1 className='my-3'>Profile</h1>
      <Card style={{width: "25rem"}} className='position-absolute top-50 start-50 translate-middle'>
        <Card.Img variant='top' src='./src/assets/dummy-img.jpg'/>
        <Card.Body>
            <Card.Title>Alfred Chin Zhan Hoong</Card.Title>
            <Card.Subtitle className='text-secondary mb-3'>Admin</Card.Subtitle>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit volutpat maecenas volutpat blandit aliquam.</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Profile
