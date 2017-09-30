import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

	constructor() {
		super();
		this.state = {
			items: []
		};
	}

	handleInput(e) {
		this.setState({
			input: e.target.value
		});
	}

	query(e) {
		e.preventDefault();

		axios.get("https://api.mercadolibre.com/sites/MCO/search?q=" + e.target.querySelector('input').value)
			.then(res => {
				console.log(res.data);
				this.setState({items: res.data.results});
			})
	}

	render() {
		return (
			<div className="Search">
				<form onSubmit = {this.query.bind(this)}>
					<input 
						type = "text" 
						value = {this.state.query}
						onChange = {this.handleInput.bind(this)}
					/>
					<input type="submit" value="Buscar"/>
				</form>

				{this.state.items && this.state.items.map((item, key) => 
					<div className = "Product" id = {item.id}>
						<img className = "productThumbnail" src = {item.thumbnail} />
						<div className = "productName"> {item.title} </div>
						<div className = "productPrice"> $ {item.price} (COP) </div>
						<div className = "productSold"> Se han vendido: {item.sold_quantity} </div>
						<a target = "_blank" href = {item.permalink}>Ver producto en MercadoLibre</a>
					</div>
				)}
			</div>
		);
	}
}

export default Search;
