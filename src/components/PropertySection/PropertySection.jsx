import React, { useState, useEffect } from 'react';
import './propertySection.css';
import Modal from '../Modalpopp/Modal';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createPurchase } from '../../redux/actions/createPurchase';
import properties from '../../data/propetyData';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PropertySection = () => {

  const [faceValue, setFaceValue] = useState('');
  const [couponRate, setCouponRate] = useState('');
  const [yearsToMaturity, setYearsToMaturity] = useState('');
  const [marketRate, setMarketRate] = useState('');
  const [bondPrice, setBondPrice] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    bondPrice: ''
  });

  const { id } = useParams();
  const property = properties.find((property) => property.id === parseInt(id));
  const dispatch = useDispatch();

  const storedUserData = JSON.parse(localStorage.getItem('user'));
  const storedToken = localStorage.getItem('token');
  const isAuthenticated = storedUserData && storedToken;

  useEffect(() => {
    setCurrentImageIndex(0);
    setActiveThumbnailIndex(0);
  }, [property]);

  const calculateBondPrice = () => {
    const FV = parseFloat(faceValue);
    const CR = parseFloat(couponRate) / 100;
    const YTM = parseInt(yearsToMaturity);
    const MR = parseFloat(marketRate) / 100;

    let price = 0;

    for (let i = 1; i <= YTM; i++) {
      price += (FV * CR) / Math.pow(1 + MR, i);
    }

    price += FV / Math.pow(1 + MR, YTM);

    setBondPrice(price.toFixed(2));
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
    setActiveThumbnailIndex(index);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % property.images.length;
    setCurrentImageIndex(newIndex);
    setActiveThumbnailIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = currentImageIndex === 0 ? property.images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setActiveThumbnailIndex(newIndex);
  };

  const handleBuy = () => {
    if (!isAuthenticated) {
      alert('Please login to proceed with the purchase.');
    } else {
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
      bondPrice: bondPrice // Add bondPrice to userData
    });
  };

  const handleAction = () => {
    if (isAuthenticated) {
      const purchaseDetails = {
        ...userData,
        name: storedUserData.name,
        email: storedUserData.email,
      };
      dispatch(createPurchase(purchaseDetails));
      generatePDF(purchaseDetails);
      sendEmail(purchaseDetails);
      toast.success('Purchase successful! A confirmation email has been sent.');
      setShowModal(false);
    }
  };

  const generatePDF = (details) => {
    const doc = new jsPDF();
    doc.text('Purchase Confirmation - EcoHouse', 20, 10);
    doc.autoTable({
      startY: 20,
      head: [['Field', 'Value']],
      body: [
        ['Name', userData.name],
        ['Email', details.email],
        ['Phone', details.phone],
        ['Address', details.address],
        ['Bond Price', details.bondPrice],
        ['Property Name', property.name],
        ['Property Location', property.location],
        ['Property Description', property.description],
      ],
    });
    doc.output('purchase_confirmation.pdf');
    console.log(details)

  };
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const serviceKey = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateKey = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;



  const sendEmail = () => {
    const templateParams = {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      address: userData.address,
      bondPrice: userData.bondPrice,
      propertyName: property.name,
      propertyLocation: property.location,
      propertyDescription: property.description,
      imageUrl: property.imageUrl,
    };

    emailjs
      .send(serviceKey, templateKey, templateParams, {
        publicKey: publicKey
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, templateParams);
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );



  };


  return (
    <div className='propertyInfo'>
      <ToastContainer />
      <div className='pHeadings'>
        <h2>{property.name}</h2>
        <h2>${property.pricePerNight}</h2>
      </div>

      <div className='imgContainer'>
        {property && (
          <div className='slideshow-container'>
            <div className='slide'>
              <img src={property.images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
            </div>
          </div>
        )}
        <div className='slide-buttons'>
          <button className='prev' onClick={goToPrevSlide}>
            &#10094;
          </button>
          <button className='next' onClick={goToNextSlide}>
            &#10095;
          </button>
        </div>
        <div className='thumbnails'>
          {property && (
            <div className='thumbnails-container'>
              {property.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className={index === activeThumbnailIndex ? 'active' : ''}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='detials-bond'>
        <div className='details'>
          {property && (
            <>
              <table>
                <tbody>
                  <tr>
                    <td><strong>Location:</strong></td>
                    <td>{property.location}</td>
                  </tr>
                  <tr>
                    <td><strong>Description:</strong></td>
                    <td>{property.description}</td>
                  </tr>
                  <tr>
                    <td><i className='fas fa-bed'></i> Bedrooms:</td>
                    <td>{property.bedrooms}</td>
                  </tr>
                  <tr>
                    <td><i className='fas fa-bath'></i> Bathrooms:</td>
                    <td>{property.bathrooms}</td>
                  </tr>
                  <tr>
                    <td><i className='fas fa-home'></i> Type:</td>
                    <td>{property.type}</td>
                  </tr>
                  <tr>
                    <td><i className='fas fa-couch'></i> Amenities:</td>
                    <td>{property.amenities.join(', ')}</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>

        <div className='bondCalculator'>
          <div className='bond-calculator'>
            <h1>Bond Calculator</h1>
            <div className='input-group'>
              <label>Face Value:</label>
              <input
                type='number'
                value={faceValue}
                onChange={(e) => setFaceValue(e.target.value)}
              />
            </div>
            <div className='input-group'>
              <label>Coupon Rate (%):</label>
              <input
                type='number'
                value={couponRate}
                onChange={(e) => setCouponRate(e.target.value)}
              />
            </div>
            <div className='input-group'>
              <label>Years to Maturity:</label>
              <input
                type='number'
                value={yearsToMaturity}
                onChange={(e) => setYearsToMaturity(e.target.value)}
              />
            </div>
            <div className='input-group'>
              <label>Market Rate (%):</label>
              <input
                type='number'
                value={marketRate}
                onChange={(e) => setMarketRate(e.target.value)}
              />
            </div>
            <button onClick={calculateBondPrice}>Calculate Bond Price</button>
            {bondPrice !== null && (
              <div className='result'>
                <h2>Bond Price: ${bondPrice}</h2>
                {isAuthenticated && (
                  <>
                    <button onClick={handleBuy}>Buy</button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for user data */}
      <Modal show={showModal} handleClose={handleModalClose} handleSubmit={handleAction}>
        <h2>Buy Property</h2>
        <form>
          <label>
            Name:
            <input type='text' name='name' value={userData.name} onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type='email' name='email' value={userData.email} onChange={handleInputChange} />
          </label>
          <label>
            Phone:
            <input type='text' name='phone' value={userData.phone} onChange={handleInputChange} />
          </label>
          <label>
            Address:
            <input type='text' name='address' value={userData.address} onChange={handleInputChange} />
          </label>
        </form>
      </Modal>
    </div>
  );
};

export default PropertySection;
