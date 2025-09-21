// ProductCarousel.jsx
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'

const ProductCarousel = ({ products }) => {
  return (
    <Carousel pause="hover" className="bg-primary mb-4">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img src={product.image} alt={product.name} fluid="true" />
            <Carousel.Caption className="carousel-caption">
              <h2 className="text-white">
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
