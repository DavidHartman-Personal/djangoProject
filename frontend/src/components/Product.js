import React from 'react';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './Rating'

/**
 * It returns a Card component with the className prop set to "my-3 p-3 rounded" and the children set to "Product"
 * @param props - This is the object that contains all the properties that were passed to the component.
 * @returns A Card component with the className of "my-3 p-3 rounded" and the text "Product"
 */
function Product({ product }) {
    return (
        <Card className={"my-3 p-3 rounded"}>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image}/>
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as={"div"}>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as={"div"}>
                    <div className={"my-3"}>
                        <Rating value={`${product.rating}`} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>
                <Card.Text as={"h3"}>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Product;