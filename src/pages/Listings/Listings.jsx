import React from 'react'
import Footer from '../../components/footer/Footer'
import ListingsSection from '../../components/ListingsSection/ListingsSection'
import { AuthProvider } from '../../components/navbar/AuthContext'
import Navbar from '../../components/navbar/Navbar'
const Listings = () => {
    return (
        <AuthProvider>
            <Navbar />
            <ListingsSection />
            <Footer />
        </AuthProvider>
    )
}

export default Listings
