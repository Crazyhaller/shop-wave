import { Row, Col } from 'react-bootstrap'
import Product from '../../components/Product/Product'
import { useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../../slices/productsApiSlice.js'
import Loader from '../../components/Loader/Loader'
import Message from '../../components/Message/Message'
import './home.css'

const Home = () => {
  const { pageNumber } = useParams()
  const { data, isLoading, error } = useGetProductsQuery({ pageNumber })

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1 className="home-heading">Latest Products</h1>
          <Row>
            {data.products.map((product) => (
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
