import React from 'react'
import ProductWork from './ProductWork'
import { useProductContext } from '../../Context/productContext'


const Product = () => {

const { isLoading, products} = useProductContext();

if(isLoading) {
    return <div className='page_loading'></div>
}


return (
    <div className="work-container">
        <h1 className="project-heading">PRODUCT</h1>
        <div className="project-container">
            {products.map((val) => {
                return (
                    <ProductWork
                        id={val.id}
                        key={val.id}
                        title={val.title}
                        image={val.image}
                        price={val.price}
                        desc={val.description}
                        category={val.category}
                        rating={val.rating.rate}
                    />
                )
            })}
        </div>
    </div>
)
}

export default Product