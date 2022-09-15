import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
// Import the Product Component
import Product from '../components/Product'
//import axios from 'axios'

import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'

import Loader from '../components/Loader'
import Message from '../components/Message'


// This is an array of objects used for testing
//import products from '../products'


/**
 * We're using the Row and Col components from the react-bootstrap library to create a grid of products
 * @param props - This is the props object that is passed to the component.
 * @returns A div with a h1 and a row.
 */
function HomeScreen(props) {
//    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    //Pull the productList reducer from the store.  The productList contains an array of products

    const {error, loading, products} = productList

    //const products = []
    return (
        <div>
            <h1>Latest Product Listing</h1>
            {loading ? <Loader />
                : error ? <Message variant={'danger'}>{error}</Message>
                    :
                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product}/>
                            </Col>
                        ))}
                    </Row>

            }
        </div>
    )
}
export default HomeScreen;