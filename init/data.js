const sampleListings = [

  {
    title: "Cozy Homestay in Coorg",
    description:
        "Experience the serene beauty of Coorg with this charming homestay. Surrounded by coffee plantations, it's perfect for nature lovers.",
    image: {
        filename: "listingimage",
        url: "https://www.selfroadiez.com/wp-content/uploads/2017/03/View-of-the-Cozy-Homestay-at-MadikeriKarnataka.jpg",
    },
    price: 2500,
    location: "Coorg",
    country: "India",
},
{
    title: "Luxury Beachside Resort in Goa",
    description:
        "Step into luxury at this beachside resort in Goa. Enjoy stunning sunsets and vibrant nightlife.",
    image: {
        filename: "listingimage",
        url: "https://imgmediagumlet.lbb.in/media/2024/05/66506c0b4ccac54665e4546f_1716546571953.jpg",
    },
    price: 4500,
    location: "Goa",
    country: "India",
},
{
    title: "Heritage Haveli in Udaipur",
    description:
        "Stay at this majestic haveli in Udaipur and soak in the stunning lake views and royal architecture.",
    image: {
        filename: "listingimage",
        url: "https://aajhaveli.com/wp-content/uploads/2021/12/DSC07297.jpg",
    },
    price: 4000,
    location: "Udaipur",
    country: "India",
},
{
    title: "Rustic Retreat in Wayanad",
    description:
        "Reconnect with nature at this rustic retreat in Wayanad, surrounded by lush greenery and wildlife.",
    image: {
        filename: "listingimage",
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/eb/85/1e/vythiri-spring-valley.jpg?w=1200&h=-1&s=1",
    },
    price: 2200,
    location: "Wayanad",
    country: "India",
},
{
    title: "Houseboat Stay in Alleppey",
    description:
        "Enjoy the backwaters of Kerala with a stay in this beautiful houseboat. A unique and tranquil experience awaits.",
    image: {
        filename: "listingimage",
        url: "https://www.exoticahouseboatcruises.com/blogimg/Alleppey%20houseboat%20(2).jpg",
    },
    price: 3500,
    location: "Alleppey",
    country: "India",
},
{
    title: "Cultural Homestay in Varanasi",
    description:
        "Immerse yourself in the spiritual atmosphere of Varanasi with this cultural homestay near the ghats.",
    image: {
        filename: "listingimage",
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/591429047.jpg?k=c8999ee65fd575f2726a677343f3c2bc4929a2092494bcc30974ac34e68481f3&o=&hp=1",
    },
    price: 1500,
    location: "Varanasi",
    country: "India",
},
{
    title: "Tea Estate Bungalow in Darjeeling",
    description:
        "Nestled in the scenic tea estates, this bungalow offers stunning views and a tranquil experience.",
    image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzhpN0WH4pnIs2GzKOCZmaLbaPgsT01YARg&s",
    },
    price: 3200,
    location: "Darjeeling",
    country: "India",
},
{
    title: "Luxury Hilltop Villa in Ooty",
    description:
        "Relax and rejuvenate in this luxurious villa offering panoramic views of the Nilgiri Hills.",
    image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsWPi91XsaLUa35-yJNWHwZQKhZ0QcMyPrw&s",
    },
    price: 4800,
    location: "Ooty",
    country: "India",
},
{
    title: "Jungle Lodge in Bandhavgarh",
    description:
        "Stay close to nature at this eco-friendly jungle lodge near Bandhavgarh National Park.",
    image: {
        filename: "listingimage",
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/e4/db/28/bandhavgarh-jungle-lodge.jpg?w=700&h=-1&s=1",
    },
    price: 3800,
    location: "Bandhavgarh",
    country: "India",
},
{
    title: "Lakefront Cottage in Nainital",
    description:
        "Enjoy serene views of the lake in this cozy cottage located in the heart of Nainital.",
    image: {
        filename: "listingimage",
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223507148.jpg?k=117b17ce237c24f13a55a196992f7d67df7327afe4c24b933712035e363d9fa8&o=&hp=1",
    },
    price: 2600,
    location: "Nainital",
    country: "India",
},
{
    title: "Heritage Bungalow in Shillong",
    description:
        "Explore the charm of Shillong with a stay in this beautiful heritage bungalow surrounded by hills.",
    image: {
        filename: "listingimage",
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/74/b1/a3/the-bunglow.jpg?w=500&h=-1&s=1",
    },
    price: 3400,
    location: "Shillong",
    country: "India",
},
{
    title: "Himalayan Retreat in Rishikesh",
    description:
        "Recharge your soul at this Himalayan retreat, offering yoga sessions and breathtaking mountain views.",
    image: {
        filename: "listingimage",
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/d6/18/b2/high-bank-himalayan-retreat.jpg?w=700&h=-1&s=1",
    },
    price: 3000,
    location: "Rishikesh",
    country: "India",
},
{
    title: "Desert Camp in Jaisalmer",
    description:
        "Experience the magic of the Thar Desert with a stay in this luxurious desert camp under the stars.",
    image: {
        filename: "listingimage",
        url: "https://www.campinginjaisalmer.com/assets/img/about/Canvas-Club-Wahiba-tent.jpg",
    },
    price: 3500,
    location: "Jaisalmer",
    country: "India",
},
{
    title: "City Center Hotel in Mumbai",
    description:
        "Conveniently located in the heart of Mumbai, this hotel is ideal for business and leisure travelers.",
    image: {
        filename: "listingimage",
        url: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_536,w_3156,h_1775,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/hotel-diplomat/Exterior_Nighttime_1_xzx8ts",
    },
    price: 5000,
    location: "Mumbai",
    country: "India",
},
  {
      title: "Mountain View Lodge in Manali",
      description:
          "Wake up to breathtaking mountain views at this charming lodge in Manali, perfect for adventure seekers and nature lovers.",
      image: {
          filename: "listingimage",
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413455650.jpg?k=24aeec3c4d9ef2ca136d06d905648cfac86166ddd361df9de1aa3bdc7cb8f94f&o=&hp=1",
      },
      price: 2800,
      location: "Manali",
      country: "India",
  },
  {
      title: "Hilltop Stay in Munnar",
      description:
          "This hilltop homestay in Munnar offers sweeping views of tea plantations and a peaceful escape from the city.",
      image: {
          filename: "listingimage",
          url: "https://media1.thrillophilia.com/filestore/n7kshecy792phm9v8icuqx11p0v9_aranyaka-resorts.jpg",
      },
      price: 2700,
      location: "Munnar",
      country: "India",
  },
  {
      title: "Luxury Tented Camp in Ranthambore",
      description:
          "Stay close to the wild with this luxurious tented camp near Ranthambore National Park.",
      image: {
          filename: "listingimage",
          url: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-vanyavilas-ranthambhore/luxury-tent/spotlight/414x580.jpg",
      },
      price: 5500,
      location: "Ranthambore",
      country: "India",
  },
  {
      title: "Forest Retreat in Kabini",
      description:
          "Nestled in the heart of Kabini, this retreat offers a perfect blend of luxury and nature.",
      image: {
          filename: "listingimage",
          url: "https://cdn.junglelodges.com/uploads/2020/03/2-50.jpg",
      },
      price: 4800,
      location: "Kabini",
      country: "India",
  },
  {
      title: "Riverside Stay in Rishikesh",
      description:
          "Enjoy the soothing sounds of the Ganges at this riverside homestay in Rishikesh.",
      image: {
          filename: "listingimage",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XLNwCL-hHwkf4Zyy0ABNTMe0cdU0d71A_Q&s",
      },
      price: 3200,
      location: "Rishikesh",
      country: "India",
  },
  {
      title: "Colonial Homestay in Ooty",
      description:
          "Step back in time with this colonial-style homestay in Ooty, offering classic architecture and lush gardens.",
      image: {
          filename: "listingimage",
          url: "https://edge.media.datahc.com/HI552304304.jpg?source=Leonardo",
      },
      price: 2900,
      location: "Ooty",
      country: "India",
  },
  {
      title: "Eco Lodge in Sundarbans",
      description:
          "Explore the natural beauty of the Sundarbans while staying at this eco-friendly lodge.",
      image: {
          filename: "listingimage",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2sB6F2USVlyUJehIYyegLElirpoVGMfGsQ&s",
      },
      price: 3800,
      location: "Sundarbans",
      country: "India",
  },
  {
      title: "Cultural Stay in Jaipur",
      description:
          "Immerse yourself in Rajasthani culture with this traditional homestay in Jaipur.",
      image: {
          filename: "listingimage",
          url: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2022/11/october-the-perfect-time-to-explore-jaipur.jpg",
      },
      price: 2400,
      location: "Jaipur",
      country: "India",
  },
  {
      title: "Adventure Camp in Ladakh",
      description:
          "Embark on a thrilling adventure with this camp offering panoramic views of Ladakh's stunning landscapes.",
      image: {
          filename: "listingimage",
          url: "https://www.tourmyindia.com/states/ladakh/imagess/camping-in-ladakh2.jpg",
      },
      price: 6500,
      location: "Ladakh",
      country: "India",
  },
  {
      title: "Sea View Villa in Kovalam",
      description:
          "Enjoy the tranquility of the Arabian Sea from this luxurious villa in Kovalam.",
      image: {
          filename: "listingimage",
          url: "https://promos.makemytrip.com/altaccoimages/listing/villa_pwa.jpg",
      },
      price: 4300,
      location: "Kovalam",
      country: "India",
  },
  {
      title: "Charming Cottage in Pachmarhi",
      description:
          "Relax at this charming cottage in Pachmarhi, surrounded by lush forests and waterfalls.",
      image: {
          filename: "listingimage",
          url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5d/f8/3c/pachmarhi-ecotel.jpg?w=1200&h=-1&s=1",
      },
      price: 2200,
      location: "Pachmarhi",
      country: "India",
  },
  {
      title: "Royal Retreat in Mysore",
      description:
          "Live like royalty at this luxurious retreat near the Mysore Palace.",
      image: {
          filename: "listingimage",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaLV9LN0fJUSJ7oThwKrA3fTgvTapRkRLf2yrPMZOoDy_cmlFYcGwfsCP3Qvc-DGgYJo&usqp=CAU",
      },
      price: 3500,
      location: "Mysore",
      country: "India",
  },
  {
      title: "Yoga Ashram in Pondicherry",
      description:
          "Find your inner peace at this serene yoga ashram in Pondicherry, steps away from the beach.",
      image: {
          filename: "listingimage",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6h0CfM1LLJEVXlyJYORa1c4bNG83Gd_cpDwqBz2uA6ZaI9z5yIgFtNWPk9oeFjE-88Q&usqp=CAU",
      },
      price: 1800,
      location: "Pondicherry",
      country: "India",
  },
  {
      title: "Hilltop Homestay in Chikmagalur",
      description:
          "Sip on fresh coffee and enjoy misty mornings at this cozy hilltop homestay in Chikmagalur.",
      image: {
          filename: "listingimage",
          url: "https://ik.imagekit.io/xoxqszf3k/wp-content/uploads/2023/06/Hill-Top-Plantation-Bungalow-in-Chikmagalur-1-900x500.jpg",
      },
      price: 3000,
      location: "Chikmagalur",
      country: "India",
  },
  {
      title: "Desert Homestay in Bikaner",
      description:
          "Discover desert life with this rustic homestay in the golden sands of Bikaner.",
      image: {
          filename: "listingimage",
          url: "https://desert-sun-homestay.hotels-rajasthan.com/data/Pics/OriginalPhoto/15593/1559337/1559337010/desert-sun-homestay-bikaner-pic-10.JPEG",
      },
      price: 2300,
      location: "Bikaner",
      country: "India",
  },
];

  module.exports = { data: sampleListings };