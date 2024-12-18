import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReviews = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      name: "Black Space Design",
      author: "Sandra Blank, Principal Owner",
      image:
        "https://cdn.airportappliance.com/media/wysiwyg/Static-page-images/review-user3.webp",
      text: `Jean Farasat from Airport Home Appliance made the entire process of choosing appliances for my projects super easy. I have come to trust the opinion of Airport so much that they are an integral process of my remodel or home-design projects. I have never had an issue with getting appliances installed on time and on budget. Thank you, Airport Home Appliance!`,
    },
    {
      name: "MTM Building Group",
      author: "Nancy Nakano, Owner",
      image:
        "https://cdn.airportappliance.com/media/wysiwyg/Static-page-images/review-user_empty.webp",
      text: `We began using Airport Home Appliance 14 years ago. We heard about them through a friend and called the Hayward Warehouse. Moe ordered exactly what we needed, delivered promptly, and gave us a very competitive price for everything.`,
    },
    {
      name: "Lusso Design",
      author: "Hao Chen, Principal Owner",
      image:
        "https://cdn.airportappliance.com/media/wysiwyg/Static-page-images/review-user2.webp",
      text: `Janelle Cedusky has always been such a big help with providing us appliances for our new home developments. She gives us recommendations that go well with our design while keeping the cost factor in mind. We will continue to purchase from Airport for all our home projects in the future.`,
    },
  ];

  return (
    <section className="bg-[#ffffff] py-12">
      <div className="container mx-auto px-6">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Customer Reviews</h1>
          <p className="text-gray-600">What Our Happy Clients Say</p>
        </header>

        <div style={{ width: "100%", margin: "0 auto" }}>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const ReviewCard  = ({ name, author, image, text }) => (
  <div className="bg-white p-6 flex flex-col items-center">
    <div className="rounded-full overflow-hidden border-2 p-[10px] border-[#dfdfdf]">
        <div className="w-24 h-24 rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
    </div>
    <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
    <span className="text-sm text-gray-600">{author}</span>
    <p className="text-gray-700 text-center mt-4">{text}</p>
  </div>
);

export default CustomerReviews;