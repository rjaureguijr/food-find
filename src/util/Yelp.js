const apiKey = 'vyJgNtJ2sEp1P11F1vA1jTyEAbTahhzhWagosXEZfqPIC2RWTmK1NJ1FWWhVSs4F5eQWS6KqdjzMHNUaNnVAUSW8nyGA-yOVNRWvqmkNEQc5tQN3EggNjH9wyUU0X3Yx';
const mapUrl = `https://www.google.com/maps/search/?api=1&query=`;
const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then( response => response.json() ).then( (jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.display_address[0],
                        address1: business.location.address1,
                        city: business.location.city,
                        coordinatesLink: `${mapUrl}` + business.coordinates.latitude + ',' + business.coordinates.longitude,
                        coordinatesLong: business.coordinates.longitude,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        phone: business.display_phone,
                        price: business.price,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        transactions: business.transactions[0],
                        yelpUrl: business.url
                    };
                });
            } 
        } );
    }
}

export default Yelp;
