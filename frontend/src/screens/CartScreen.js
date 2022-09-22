import React, {useState, useEffect} from 'react'
import {Link, useParams, useNavigate, useLocation} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card, Form} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux';

import Loader from '../components/Loader'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'


function CartScreen() {
    const match = useParams()
    const navigate = useNavigate()
    const productId = match._id
    const location = useLocation()
    // using location, we can extract the part of the URl that contains the quantity
    // e.g. if we have http://localhost:3000/cart/2?qty=3
    // then if there was a location inclued (i.e. qty=x), then split on the = sign to
    // get the quantity, otherwise assume the qty is 1
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    //console.log('product id:', productId, ' qty: ', qty)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    console.log('cart items:', cartItems)


    useEffect(() => {
        //console.log('dispatching add to cart')
        dispatch(addToCart(productId, qty))
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        console.log('remove:', id)
    }

    // const checkoutHandler = () => {
    //     navigate('/login?redirect=shipping')
    // }

    return (
        <Row>
            <Col md={8}>
                <h1>Shoping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message variant={'info'}>
                        Your cart is empty <Link to={'/'}>Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant={"flush"}>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded/>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/products/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        ${item.price}
                                    </Col>
                                    <Col md={3}>
                                        <Form.Control
                                            as={'select'}
                                            value={item.qty}
                                            onChange={(e) =>
                                                dispatch(addToCart(item.product, Number(e.target.value)))}
                                        >
                                            {
                                                [...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))
                                            }

                                        </Form.Control>
                                    </Col>
                                    <Col md={1}>
                                        <Button
                                            type={'button'}
                                            variant={'light'}
                                            onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            <i className={'fas fa-trash'}></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )
                }
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant={'flush'}>
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty,0)}) items</h2>
                            Toal Price ${cartItems.reduce((acc, item) => acc + item.qty * item.price,0).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                type={'button'}
                                className={'btn-block'}
                                disabled={cartItems.length === 0}
                                //onClick={checkoutHandler}
                            >
                                Proceed To Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>

                </Card>
            </Col>

        </Row>
    );
}

export default CartScreen;