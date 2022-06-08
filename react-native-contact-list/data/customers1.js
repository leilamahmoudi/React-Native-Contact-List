const customers = [
  {
    gender: "male",
    name: { title: "Mr", first: "Jayden", last: "Wright" },
    location: {
      street: { number: 3056, name: "The Strand" },
      city: "Greymouth",
      state: "Hawke'S Bay",
      country: "New Zealand",
      postcode: 77196,
      coordinates: { latitude: "59.4358", longitude: "-132.8011" },
      timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
      },
    },
    email: "jayden.wright@example.com",
    dob: { date: "1961-07-02T11:30:43.362Z", age: 60 },
    registered: { date: "2002-06-01T06:31:35.197Z", age: 19 },
    phone: "(925)-411-2191",
    cell: "(922)-089-2553",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/34.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
    },
    nat: "NZ",
  },
];

module.exports = {
  customers,
};
