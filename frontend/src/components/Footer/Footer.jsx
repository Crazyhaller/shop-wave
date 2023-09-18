import { Container, Row, Col } from 'react-bootstrap'
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p className="footer-text">
              ShopWave &copy; {currentYear} Suvigya Mishra
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
