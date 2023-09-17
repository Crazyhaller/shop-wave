import { Card } from 'react-bootstrap'
import './product.css'

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded product-card">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="h3" className="product-price">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
