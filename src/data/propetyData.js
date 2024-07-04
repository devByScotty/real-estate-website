const properties = [
  {
    id: 1,
    name: "Coastal Villa",
    location: "Cape Town, Western Cape",
    type: "Villa",
    pricePerNight: 3500000,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Ocean View", "Private Beach Access", "Pool"],
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDI%3D',
    rating: 4.5,
    reviews: 12,
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDI%3D',
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description:'This Coastal Villa offers a luxurious stay with its ocean view, '+
    'private beach access, and pool amenities. With 4 bedrooms and 3 bathrooms, it can accommodate a large group comfortably. The property has received a high rating of 4.5 from 12 reviews.'
    },
  {
    id: 2,
    name: "Mountain Retreat",
    location: "Drakensberg, KwaZulu-Natal",
    type: "Chalet",
    pricePerNight: 280000,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Mountain View", "Fireplace", "Hiking Trails"],
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDI%3D",
    rating: 4.8,
    reviews: 8,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description:'This Coastal Villa offers a luxurious stay with its ocean view, '+
    'private beach access, and pool amenities. With 4 bedrooms and 3 bathrooms, it can accommodate a large group comfortably. The property has received a high rating of 4.5 from 12 reviews.'
  },
  {
    id: 3,
    name: "Urban Apartment",
    location: "Johannesburg, Gauteng",
    type: "Apartment",
    pricePerNight: 120000,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["City View", "Gym Access", "WiFi"],
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDI%3D",
    rating: 4.2,
    reviews: 15,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description:'This Coastal Villa offers a luxurious stay with its ocean view, '+
    'private beach access, and pool amenities. With 4 bedrooms and 3 bathrooms, it can accommodate a large group comfortably. The property has received a high rating of 4.5 from 12 reviews.'
  },
  {
    id: 4,
    name: "Riverside Cottage",
    location: "Knysna, Western Cape",
    type: "Cottage",
    pricePerNight: 1800000,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["River View", "Deck", "BBQ Area"],
    imageUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVybiUyMGhvdXNlfGVufDB8fDB8fHwy",
    rating: 4.6,
    reviews: 10,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description:'This Coastal Villa offers a luxurious stay with its ocean view, '+
    'private beach access, and pool amenities. With 4 bedrooms and 3 bathrooms, it can accommodate a large group comfortably. The property has received a high rating of 4.5 from 12 reviews.'
  },
  {
    id: 5,
    name: "Farmhouse Retreat",
    location: "Stellenbosch, Western Cape",
    type: "Farmhouse",
    pricePerNight: 2500000,
    bedrooms: 5,
    bathrooms: 3,
    amenities: ["Vineyard View", "Pool", "Outdoor Dining"],
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDI%3D",
    rating: 4.9,
    reviews: 20,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description:'This Coastal Villa offers a luxurious stay with its ocean view, '+
    'private beach access, and pool amenities. With 4 bedrooms and 3 bathrooms, it can accommodate a large group comfortably. The property has received a high rating of 4.5 from 12 reviews.'
  },
  // Add more properties here
  // Continue adding properties up to 30
  {
    id: 6,
    name: "Luxury Apartment in Sandton",
    location: "Sandton, Gauteng",
    type: "Apartment",
    pricePerNight: 1800000,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["City View", "Pool", "Gym Access"],
    imageUrl: "https://images.unsplash.com/photo-1582883545851-725a3b9502ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHwy",
    rating: 4.7,
    reviews: 25,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description:'This Coastal Villa offers a luxurious stay with its ocean view, '+
    'private beach access, and pool amenities. With 4 bedrooms and 3 bathrooms, it can accommodate a large group comfortably. The property has received a high rating of 4.5 from 12 reviews.'
  },
  {
    id: 7,
    name: "Modern Townhouse in Midrand",
    location: "Midrand, Gauteng",
    type: "Townhouse",
    pricePerNight: 1500000,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Garden", "Security Complex", "Parking"],
    imageUrl: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1vZGVybiUyMGhvdXNlfGVufDB8fDB8fHwy",
    rating: 4.4,
    reviews: 18,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description:'This Coastal Villa offers a luxurious stay with its ocean view, '+
    'private beach access, and pool amenities. With 4 bedrooms and 3 bathrooms, it can accommodate a large group comfortably. The property has received a high rating of 4.5 from 12 reviews.'
  },
  {
    id: 8,
    name: "Family Home in Pretoria East",
    location: "Pretoria East, Gauteng",
    type: "House",
    pricePerNight: 2200000,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Spacious Yard", "Study", "Double Garage"],
    imageUrl: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1vZGVybiUyMGhvdXNlfGVufDB8fDB8fHwy",
    rating: 4.6,
    reviews: 22,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description:'This Coastal Villa offers a luxurious stay with its ocean view, '+
    'private beach access, and pool amenities. With 4 bedrooms and 3 bathrooms, it can accommodate a large group comfortably. The property has received a high rating of 4.5 from 12 reviews.'
  },
  {
    id: 9,
    name: "Penthouse in Rosebank",
    location: "Rosebank, Gauteng",
    type: "Penthouse",
    pricePerNight: 3000000,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ["Panoramic Views", "Private Terrace", "Concierge"],
    imageUrl: "https://images.unsplash.com/photo-1627141234469-24711efb373c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG1vZGVybiUyMGhvdXNlfGVufDB8fDB8fHwy",
    rating: 4.9,
    reviews: 30,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description:'This Coastal Villa offers a luxurious stay with its ocean view, '+
    'private beach access, and pool amenities. With 4 bedrooms and 3 bathrooms, it can accommodate a large group comfortably. The property has received a high rating of 4.5 from 12 reviews.'
  },
  {
    id: 10,
    name: "Cosy Apartment in Bedfordview",
    location: "Bedfordview, Gauteng",
    type: "Apartment",
    pricePerNight: 1200000,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Balcony", "Secure Complex", "Close to Shopping"],
    imageUrl: "https://images.unsplash.com/photo-1522050212171-61b01dd24579?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fG1vZGVybiUyMGhvdXNlfGVufDB8fDB8fHwy",
    rating: 4.2,
    reviews: 15,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description:'This Coastal Villa offers a luxurious stay with its ocean view, '+
    'private beach access, and pool amenities. With 4 bedrooms and 3 bathrooms, it can accommodate a large group comfortably. The property has received a high rating of 4.5 from 12 reviews.'
  },
  {
    id: 11,
    name: "Riverside Lodge in Sabie",
    location: "Sabie, Mpumalanga",
    type: "Lodge",
    pricePerNight: 2500000,
    bedrooms: 5,
    bathrooms: 4,
    amenities: ["River View", "Braai Area", "Outdoor Dining"],
    imageUrl: "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxtb2Rlcm4lMjBob3VzZXxlbnwwfHwwfHx8Mg%3D%3D",
    rating: 4.6,
    reviews: 30,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description:'This Coastal Villa offers a luxurious stay with its ocean view, '+
    'private beach access, and pool amenities. With 4 bedrooms and 3 bathrooms, it can accommodate a large group comfortably. The property has received a high rating of 4.5 from 12 reviews.'
  },
  {
    id: 12,
    name: "Mountain Retreat in Dullstroom",
    location: "Dullstroom, Mpumalanga",
    type: "Cottage",
    pricePerNight: 1800000,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Mountain View", "Fireplace", "Fishing"],
    imageUrl: "https://images.unsplash.com/photo-1605457701907-e9c039bed21f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxtb2Rlcm4lMjBob3VzZXxlbnwwfHwwfHx8Mg%3D%3D",
    rating: 4.8,
    reviews: 25,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description:'This Coastal Villa offers a luxurious stay with its ocean view, '+
    'private beach access, and pool amenities. With 4 bedrooms and 3 bathrooms, it can accommodate a large group comfortably. The property has received a high rating of 4.5 from 12 reviews.'
  },
  {
    id: 13,
    name: "Bushveld Chalet in Kruger Park",
    location: "Kruger National Park, Mpumalanga",
    type: "Chalet",
    pricePerNight: 3200000,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Bushveld View", "Deck", "Game Drives"],
    imageUrl: "https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVybiUyMGhvdXNlfGVufDB8fDB8fHwy",
    rating: 4.9,
    reviews: 35,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    description:'This Coastal Villa offers a luxurious stay with its ocean view, '+
    'private beach access, and pool amenities. With 4 bedrooms and 3 bathrooms, it can accommodate a large group comfortably. The property has received a high rating of 4.5 from 12 reviews.'
  },
  {
    id: 14,
    name: "Rural Farmhouse in Nelspruit",
    location: "Nelspruit, Mpumalanga",
    type: "Farmhouse",
    pricePerNight: 2000000,
    bedrooms: 4,
    bathrooms: 2,
    amenities: ["Farmland Views", "Swimming Pool", "Outdoor BBQ"],
    imageUrl: "https://images.unsplash.com/photo-1559329145-afaf18e3f349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1vZGVybiUyMGhvdXNlfGVufDB8fDB8fHwy",
    rating: 4.5,
    reviews: 20,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 15,
    name: "Riverfront Cabin in Hazyview",
    location: "Hazyview, Mpumalanga",
    type: "Cabin",
    pricePerNight: 1500000,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["Riverfront Access", "Outdoor Deck", "Braai Area"],
    imageUrl: "https://images.unsplash.com/photo-1627141234469-24711efb373c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG1vZGVybiUyMGhvdXNlfGVufDB8fDB8fHwy",
    rating: 4.4,
    reviews: 18,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 16,
    name: "Safari Lodge in Kruger National Park",
    location: "Kruger National Park, Limpopo",
    type: "Lodge",
    pricePerNight: 3500000,
    bedrooms: 6,
    bathrooms: 5,
    amenities: ["Safari Experience", "Bushveld Views", "Game Drives"],
    imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxtb2Rlcm4lMjBob3VzZXxlbnwwfHwwfHx8Mg%3D%3D",
    rating: 4.9,
    reviews: 45,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 17,
    name: "Riverside Villa in Tzaneen",
    location: "Tzaneen, Limpopo",
    type: "Villa",
    pricePerNight: 2800000,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Riverfront Access", "Outdoor Deck", "Swimming Pool"],
    imageUrl: "https://images.unsplash.com/photo-1594540992254-0e2239661647?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviews: 38,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 18,
    name: "Bushveld Retreat in Hoedspruit",
    location: "Hoedspruit, Limpopo",
    type: "Retreat",
    pricePerNight: 2400000,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Bushveld Views", "Private Boma", "Outdoor Shower"],
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    rating: 4.8,
    reviews: 42,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 19,
    name: "Family Farmhouse in Mookgophong",
    location: "Mookgophong, Limpopo",
    type: "Farmhouse",
    pricePerNight: 1800008,
    bedrooms: 5,
    bathrooms: 4,
    amenities: ["Farmland Views", "Swimming Pool", "Outdoor BBQ"],
    imageUrl: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxtb2Rlcm4lMjBob3VzZXxlbnwwfHwwfHx8Mg%3D%3D",
    rating: 4.5,
    reviews: 35,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 20,
    name: "Riverfront Cabin in Bela-Bela",
    location: "Bela-Bela, Limpopo",
    type: "Cabin",
    pricePerNight: 1500000,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["Riverfront Access", "Outdoor Deck", "Braai Area"],
    imageUrl: "https://images.unsplash.com/photo-1628744448953-89b6b70965c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxtb2Rlcm4lMjBob3VzZXxlbnwwfHwwfHx8Mg%3D%3D",
    rating: 4.4,
    reviews: 30,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 21,
    name: "Beachfront Villa in Umhlanga",
    location: "Umhlanga, KwaZulu-Natal",
    type: "Villa",
    pricePerNight: 4000000,
    bedrooms: 5,
    bathrooms: 4,
    amenities: ["Beachfront Access", "Infinity Pool", "Ocean Views"],
    imageUrl: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    rating: 4.9,
    reviews: 50,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 22,
    name: "Hilltop Retreat in Hillcrest",
    location: "Hillcrest, KwaZulu-Natal",
    type: "Retreat",
    pricePerNight: 3200000,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Panoramic Views", "Private Garden", "Jacuzzi"],
    imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    rating: 4.7,
    reviews: 42,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 23,
    name: "Waterfront Apartment in Durban",
    location: "Durban, KwaZulu-Natal",
    type: "Apartment",
    pricePerNight: 25000080,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Waterfront Views", "Balcony", "Secure Parking"],
    imageUrl: "https://plus.unsplash.com/premium_photo-1686782502813-51579b55f6d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    rating: 4.6,
    reviews: 38,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 24,
    name: "Eco-Lodge in the Drakensberg",
    location: "Drakensberg, KwaZulu-Natal",
    type: "Lodge",
    pricePerNight: 3000000,
    bedrooms: 6,
    bathrooms: 5,
    amenities: ["Nature Trails", "Outdoor Dining", "Fire Pit"],
    imageUrl: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    rating: 4.8,
    reviews: 45,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 25,
    name: "Coastal Cottage in Ballito",
    location: "Ballito, KwaZulu-Natal",
    type: "Cottage",
    pricePerNight: 1800000,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["Coastal Views", "Garden", "BBQ Area"],
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgxfHxtb2Rlcm4lMjBob3VzZXxlbnwwfHwwfHx8Mg%3D%3D",
    rating: 4.5,
    reviews: 35,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 26,
    name: "Historic Manor in Grahamstown, Eastern Cape",
    location: "Grahamstown, Eastern Cape",
    type: "Manor",
    pricePerNight: 3800000,
    bedrooms: 6,
    bathrooms: 5,
    amenities: ["Historic Architecture", "Gardens", "Library"],
    imageUrl: "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    rating: 4.9,
    reviews: 55,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 27,
    name: "Forest Cabin in Knysna, Western Cape",
    location: "Knysna, Western Cape",
    type: "Cabin",
    pricePerNight: 2200000,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Forest Views", "Deck", "Fireplace"],
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviews: 40,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 28,
    name: "Country Farmhouse in Bloemfontein, Free State",
    location: "Bloemfontein, Free State",
    type: "Farmhouse",
    pricePerNight: 2800000,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Rural Setting", "Swimming Pool", "Outdoor BBQ"],
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    rating: 4.6,
    reviews: 38,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 29,
    name: "Mountain Retreat in Mthatha, Eastern Cape",
    location: "Mthatha, Eastern Cape",
    type: "Retreat",
    pricePerNight: 2600000,
    bedrooms: 5,
    bathrooms: 4,
    amenities: ["Mountain Views", "Hiking Trails", "Outdoor Dining"],
    imageUrl: "https://images.unsplash.com/photo-1635834098903-1c1288d9a73a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw3R3V5VDFJLVhEa3x8ZW58MHx8fHx8",
    rating: 4.8,
    reviews: 48,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id: 30,
    name: "Riverside Cottage in Upington, Northern Cape",
    location: "Upington, Northern Cape",
    type: "Cottage",
    pricePerNight: 2000000,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["Riverfront Access", "Outdoor Deck", "Braai Area"],
    imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw3R3V5VDFJLVhEa3x8ZW58MHx8fHx8",
    rating: 4.5,
    reviews: 35,
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685703237-6628de38ddb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1613685303404-19f881533316?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  }

];

export default properties;
 