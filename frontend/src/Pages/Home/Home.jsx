import { Row, Col } from 'react-bootstrap'
import Product from '../../components/Product/Product'
import products from '../../products'
import './home.css'

const Home = () => {
  return (
    <>
      <h1 className="home-heading">Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home