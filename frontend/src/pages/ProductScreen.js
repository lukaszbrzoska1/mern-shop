import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating';
import products from '../products';


const ProductScreen = () => {
  let { id } = useParams();
  const { name, image, rating, numReviews, price, description, countInStock } = products.find(p => p._id === id)

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={image} alt={name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem className='border-0'>
              <h2>{name}</h2>
            </ListGroupItem>
            <ListGroupItem className='border-0'>
              <Rating value={rating} text={`${numReviews} reviews`} />
            </ListGroupItem>
            <ListGroupItem className='border-0'>
              Price: ${price}
            </ListGroupItem>
            <ListGroupItem>
              Description: ${description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card className='border-0'>
            <ListGroup variant='flush'>
              <ListGroupItem className='border-0'>
                <Row>
                  <Col>Price:</Col>
                  <Col><strong>${price}</strong></Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className='border-0'>
                <Row>
                  <Col>Status:</Col>
                  <Col><strong>{countInStock ? 'In Stock' : 'Out Of Stock'}</strong></Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className='border-0'>
                <Row>
                  <Button className='btn btn-block ' type='button' disabled={!countInStock}>
                    Add To Card
                  </Button>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
