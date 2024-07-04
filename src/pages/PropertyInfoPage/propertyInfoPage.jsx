import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import PropertySection from '../../components/PropertySection/PropertySection'
import properties from '../../data/propetyData'
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import { AuthProvider } from '../../components/navbar/AuthContext';

const propertyInfoPage = () => {
  
  return (
    <AuthProvider>
      <Navbar />
      <PropertySection properties={properties} />
      <Footer />
      </AuthProvider>
  )
}

export default propertyInfoPage