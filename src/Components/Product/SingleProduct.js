import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../Context/productContext';
import './SingleProduct.css';
import FormatPrice from '../Helpers/FormatPrice';
import AddToCart from '../Cart/AddToCart';

const API = 'https://fakestoreapi.com/products';

const SingleProduct = () => {
    const {getSingleProduct, isSingleLoading, singleProduct} = useProductContext();

    const {id} = useParams();

    // const {id: index, title, image, description, rating : {rate}, price, category} = singleProduct;

    useEffect(() => {
        getSingleProduct(`${API}/${id}`);
    }, [getSingleProduct, id]);
    
    if(isSingleLoading) {
      return <div className='page_loading'></div>
    };


  return (
    <div className='container-fluid singledetail row'>
        <div className='left col-md-6 text-center mb-3'>
          <img src={singleProduct.image} alt={singleProduct.title} />
        </div>
        <div className='right text-centre col-md-6'>
          <h2>{singleProduct.title}</h2>
          {/* <p className='rating'>{singleProduct.rating.rate}</p> */}
          <p className='cate'><span className='highlight'>Category :</span> {singleProduct.category}</p>
          <p className='desc'>{singleProduct.description}</p>
          <p className='rate'><span className='highlight'>Price :</span>{<FormatPrice price={singleProduct.price}/>}</p>
          <AddToCart product={singleProduct} />
        </div>
    </div>
  )
}

export default SingleProduct;