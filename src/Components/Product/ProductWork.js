import React from 'react'
import './ProductWork.css'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice'

const ProductWork = (props) => {

  return (
    <NavLink to={`/productoverview/${props.id}`}>
      <div className="container-fluid project-card">
        <figure >
          <img src={props.image} alt="foodImage" />
          <figcaption className='caption'>{props.category}</figcaption>
        </figure>
          
          <h2 className="project-title">{props.title}</h2>
          {/* <div className="pro-details">
              <p>{props.desc}</p>
          </div> */}
          <div className='customer-details'>
            <p>Price : {<FormatPrice price={props.price}/>}</p>
            <p>Rating : {props.rating}</p>
          </div>
  
      </div>
    </NavLink> 
  )
}

export default ProductWork;