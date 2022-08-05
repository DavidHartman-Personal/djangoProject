import React from 'react';
import {Card} from 'react-bootstrap'

/**
 * It returns a Card component with the className prop set to "my-3 p-3 rounded" and the children set to "Product"
 * @param props - This is the object that contains all the properties that were passed to the component.
 * @returns A Card component with the className of "my-3 p-3 rounded" and the text "Product"
 */
function Product({product}) {
    return (
        <Card className={"my-3 p-3 rounded"}>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image}/>
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as={"div"}>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as={"div"}>
                    <div className={"my-3"}>
                        {product.rating} from {product.numReviews} reviews
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