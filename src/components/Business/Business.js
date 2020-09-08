import React from 'react';
import './Business.css';

class Business extends React.Component {
    render() {
        return (
        <div className="Business">
            
            <div className="image-container">
            <a href={this.props.business.yelpUrl} target="_blank" rel="noopener noreferrer">
                <img src={this.props.business.imageSrc} alt={this.props.business.name}/>
                </a>
            </div>
            <div className="business-card">
            <h2>    
                {this.props.business.name}
            </h2>
            <div className="Business-information">
                <div className="Business-address">
                    <p>{this.props.business.address1}</p>
                    <p>{this.props.business.city}</p>
                    <p>{this.props.business.state} {this.props.business.zipCode}</p>
                    <p><a href={this.props.business.coordinatesLink} target="_blank" rel="noopener noreferrer">Find it!</a></p>
                </div>
                <div className="Business-reviews">
                    <h3>{this.props.business.category}</h3>
                    <h3 className="rating">{this.props.business.rating} stars</h3>
                    <p>{this.props.business.reviewCount} reviews</p>
                    <p>Price: {this.props.business.price}</p>
                    <p>{this.props.business.transactions}</p>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default Business;
