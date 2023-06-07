import { Card, Container, Row, Col } from "react-bootstrap"

function Dashboard() {
  return (
    <Container>
        <h1 className="my-3">Dashboard</h1>
        <Row>
            <Col md={4}>
                <Card className="my-3">
                    <Card.Body>
                        <Card.Title>Sigmal School Analytics</Card.Title>
                        <Card.Text>People who graduate who get jobs: 80%</Card.Text>
                    </Card.Body>
                </Card>

            </Col>
        </Row>
    </Container>
  )
}

export default Dashboard
