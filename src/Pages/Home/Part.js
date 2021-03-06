import React from 'react';
import { Link } from 'react-router-dom';
const Part = ({ part }) => {
    const { _id, name, price, img, description, inStock, minimumOrderQuantity } = part
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <img width={500} height={500} src={img} alt="gpu" />
                <h2 className="card-title text-secondary font-bold mx-auto">{name}</h2>
                <small className='text-center'>{description}</small>
                <p className='text-center'>In Stock: {inStock}</p>
                <p className='text-center'> Minimum Order Quantity:  {minimumOrderQuantity}</p>
                <p className='text-center font-bold'>Price: ${price}</p>
                <div className="card-actions justify-center mt-2">
                    <Link to={`/purchase/${_id}`} className='btn btn-primary text-violet-300 font-bold bg-gradient-to-r from-neutral to-accent'>Purchase</Link>
                </div>
            </div>
        </div>
    );
};

export default Part;