import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HeaderCarousel = () => {
  return (
    // <div>

//  <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
//       <div className="carousel-inner">
//         {/* First Slide */}
//         <div className="carousel-item active">
//           {/* <img src="path-to-image-1.jpg" className="d-block w-100" alt="First slide" /> */}
//           <h1 className="text-dark bg-primary-subtle text-center h-50">UPCOMING LAUNCHES</h1>
//         </div>
        
//         {/* Second Slide */}
//         <div className="carousel-item">
//           {/* <img src="path-to-image-2.jpg" className="d-block w-100" alt="Second slide" /> */}
//           <h1 className="text-dark bg-primary-subtle text-center h-50">Lowest Fares Or Else Get 5x Refund</h1>
//         </div>
        
//         {/* Third Slide */}
//       </div>

//       {/* Previous Button */}
//       <button className="carousel-control-prev" type="button btn-dark" data-bs-target="#carouselExample" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>

//       {/* Next Button */}
//       <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>



//   </div> 
 
 
 
 
 
 <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" style={{ height: "200px" }}>
        {/* First Slide */}
        <div className="carousel-item active" style={{ height: "100%" }}>
          <h1 className="text-light text-center h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#070F2B", border: "none" }} >
            UPCOMING LAUNCHES
          </h1>
        </div>

        {/* Second Slide */}
        <div className="carousel-item" style={{ height: "100%" }}>
          <h1 className="text-light text-center h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#070F2B", border: "none" }} >
            Lowest Fares Or Else Get 5x Refund
          </h1>
        </div>
      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        style={{ backgroundColor: "#070F2B", border: "none" }} 
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        style={{ backgroundColor: "#070F2B", border: "none" }} 
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeaderCarousel; 
