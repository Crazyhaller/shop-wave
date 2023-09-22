import { Row, Col } from 'react-bootstrap'
import Product from '../../components/Product/Product'
import { useGetProductsQuery } from '../../slices/productsApiSlice.js'
import './home.css'

const Home = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return (
    <>
      {isLoading ? (
        <h1 className="home-heading">Loading...</h1>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
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
      )}
    </>
  )
}

export default Home
