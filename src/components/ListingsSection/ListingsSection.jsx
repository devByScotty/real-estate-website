import React, { useState } from 'react';
import './ListingA.css';
import properties from '../../data/propetyData';
import { Link, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const ListingsSection = () => {
    const { id } = useParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const propertiesPerPage = 6;

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProperties = properties.filter(property =>
        property.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * propertiesPerPage;
    const currentProperties = filteredProperties.slice(offset, offset + propertiesPerPage);
    const pageCount = Math.ceil(filteredProperties.length / propertiesPerPage);

    return (
        <div className='main-section'>
            <div className='listingsNav'>
                <div className='buyArea'>
                    <ul>
                        <li><a href="#"><i className="fas fa-home"></i> Rent</a></li>
                        <li><a href="#"><i className="fas fa-shopping-cart"></i> Buy</a></li>
                        <li><a href="#"><i className="fas fa-dollar-sign"></i> Sell</a></li>
                    </ul>
                </div>
                <div className='searchBar'>
                    <div className='searchSection'>
                        <ul>
                            <li><i className="fas fa-search"></i></li>
                            <li>
                                <input
                                    type="text"
                                    placeholder="Search by location"
                                    value={searchQuery}
                                    onChange={handleSearchInputChange}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='selectionButtons'>
                    <ul>
                        <li><a href="#"><i className="fas fa-map"></i>Map</a></li>
                        <li><a href="#"><i className="fas fa-th"></i> Grid</a></li>
                    </ul>
                </div>
            </div>

            <div className='card-section'>
                {currentProperties.map(property => (
                    <div key={property.id} className='card'>
                        <div className='top-section'>
                            <img src={property.imageUrl} alt={property.name} className='cardImg' />
                        </div>
                        <div className='bottom-section'>
                            <h4>{property.name}</h4>
                            <p>{property.location}</p>
                            <p>${property.pricePerNight} per night</p>
                            <div className="property-info">
                                <span><i className="fas fa-bed"></i> {property.bedrooms}</span>
                                <span><i className="fas fa-bath"></i> {property.bathrooms}</span>
                            </div>
                            <p>Amenities: {property.amenities.join(', ')}</p>
                            <p>Rating: {property.rating}</p>
                            <p>Reviews: {property.reviews}</p>
                            <Link to={`/propertyInfo/${property.id}`}>
                                <button>Explore this property</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <ReactPaginate
                previousLabel={'Previous'} 
                nextLabel={'Next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                
            />
        </div>
    );
};

export default ListingsSection;
