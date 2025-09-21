import { Row, Col } from 'react-bootstrap'
import Product from '../../components/Product/Product'
import { Link, useParams } from 'react-router-dom'
import { useGetHomeDataQuery } from '../../slices/productsApiSlice.js'
import Loader from '../../components/Loader/Loader'
import Message from '../../components/Message/Message'
import Paginate from '../../components/Paginate/Paginate'
import Meta from '../../components/Meta/Meta'
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel'
import './home.css'

const Home = () => {
  const { pageNumber, keyword } = useParams()
  const { data, isLoading, error } = useGetHomeDataQuery({
    keyword,
    pageNumber,
  })

  return (
    <>
      {isLoading ? (
        <div className="text-center my-5">
          <Loader />
          <p className="mt-3 text-muted">
            Loading products... This may take a little longer since the backend
            is running on a free hosting tier.
          </p>
        </div>
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          {!keyword ? (
            <ProductCarousel products={data.topProducts} />
          ) : (
            <Link to="/" className="btn btn-light mb-4">
              Go Back
            </Link>
          )}

          <Meta />
          <h1 className="home-heading">Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>

          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default Home
