import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Modal extends React.Component {
	render() {
		return (
			<ProductConsumer>
			{(value) => {
				const { modalOpen, closeModal } = value;
				const { img, title, price } = value.modalProduct;
				if(!modalOpen){
					return null
					} else{
						return(
						<div className='container modal-container'>
							<div className='row'>
								<div id='modal' className='col-8 mx-auto col-md-6 col-lg-9 text-center text-capitalize p-5'>
									<h5>item added to the cart</h5>
									<img src={img} alt="product-image" className="img-fluid" /> 
									<h5>{title}</h5>
									<h5 className='text-muted'>price : $ {price}</h5>
									<Link to='/'>
										<button className='button' onClick={() => closeModal()}>continue shopping</button>
									</Link>
									<Link to='/cart'>
										<button className='button cart' onClick={() => closeModal()}>go to cart</button>
									</Link>
								</div>
								
							</div>
							
						</div>
					)
					}
				}
			}
			</ProductConsumer>
		)
	}
}