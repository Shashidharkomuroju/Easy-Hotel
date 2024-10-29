const hotels1 = [
  {
    id: 1,
    name: "The Grand Palace Hotel",
    location: "New York, NY",
    rating: 4.8,
    pricePerNight: 25000,
    bedType: "King",
    distanceFromCityCenter: 1.2,
    amenities: ["Free WiFi", "Swimming Pool", "Spa", "Gym"],
    image: require("../../assets/hotel-1.jpg"),
    description:
      "Experience the grandeur of The Grand Palace Hotel with luxurious rooms and top-notch amenities in the heart of New York City.",
  },
  {
    id: 2,
    name: "Ocean View Resort",
    location: "Malibu, CA",
    rating: 4.6,
    pricePerNight: 32000,
    bedType: "Queen",
    distanceFromCityCenter: 3.5,
    amenities: ["Beach Access", "Free Breakfast", "Spa", "Gym"],
    image: require("../../assets/hotel-2.jpg"),
    description:
      "Relax and unwind at Ocean View Resort, offering stunning ocean views and direct beach access in beautiful Malibu.",
  },
  {
    id: 3,
    name: "Mountain Escape Lodge",
    location: "Aspen, CO",
    rating: 4.9,
    pricePerNight: 28000,
    bedType: "Double",
    distanceFromCityCenter: 2.0,
    amenities: ["Ski-in/Ski-out", "Free Parking", "Hot Tub", "Pet Friendly"],
    image: require("../../assets/hotel-3.jpg"),
    description:
      "Escape to the mountains at Mountain Escape Lodge, featuring cozy rooms and easy access to the slopes in Aspen.",
  },
  {
    id: 4,
    name: "Urban Oasis Hotel",
    location: "San Francisco, CA",
    rating: 4.7,
    pricePerNight: 20000,
    bedType: "Queen",
    distanceFromCityCenter: 0.8,
    amenities: [
      "Free WiFi",
      "Rooftop Bar",
      "Fitness Center",
      "Business Center",
    ],
    image: require("../../assets/hotel-4.jpg"),
    description:
      "Stay in the heart of San Francisco at Urban Oasis Hotel, offering modern amenities and a vibrant rooftop bar with city views.",
  },
  {
    id: 5,
    name: "Desert Retreat",
    location: "Scottsdale, AZ",
    rating: 4.5,
    pricePerNight: 23000,
    bedType: "King",
    distanceFromCityCenter: 4.1,
    amenities: ["Free Breakfast", "Outdoor Pool", "Spa", "Golf Course"],
    image: require("../../assets/hotel-5.jpg"),
    description:
      "Enjoy a serene getaway at Desert Retreat in Scottsdale, featuring an outdoor pool, spa services, and a golf course.",
  },
];

export default hotels1;
