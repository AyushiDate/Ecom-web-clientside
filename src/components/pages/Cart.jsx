import React from "react";
import { Link } from "react-router-dom";
// import realme from 'realme.jpeg';  // Adjust the path accordingly
//import realmeImage from '../images/realme.jpeg';  // Adjust based on your project structure



// <!--Bootstrap cdn-->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous"
/>;

const Cart = () => {
  return (
    <div>
      <div className="container my-5">
        {/* <h1 className=" heading text-center mb-4 text-info">
          UPCOMING LAUNCHES
        </h1> */}
        <div className="row">
          {/* Blog 1 */}
          <div className="col-md-4">
            <div className="card blog-card">
              {/* <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Blog Image 1" /> */}
              {/* <img
                className="img-fluid"
                src="/images/realme.jpeg"
                alt=""
              /> */}
              <img
                className="img-fluid"
                src="/images/realme.jpeg"
                alt="realme phone"
              />

              {/* <img className="img-fluid" src={realme} alt="" /> */}
              <div className="card-body">
                <h4 className="card-title blog-title text-bold">
                  realme P2 Pro 5G
                </h4>
                <h4 className="card-text text-bold blog-title">
                  Launch on 13<sup>th</sup> Sept, 12PM
                </h4>

                <h4 className="card-text">Rs.20,999</h4>
                {/* <a href="#" className="btn btn-primary">Read More</a> */}
                <Link to="/Cart" class="btn btn-success">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="col-md-4">
            <div className="card blog-card">
              {/* <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Blog Image 2" /> */}
              <img className="img-fluid" src="img/supply 3.jpeg" alt="Blog 2" />
              <div className="card-body">
                <h4 className="card-title blog-title text-bold">
                  OnePlus Nord
                </h4>
                <h4 className="card-text text-bold blog-title">
                  Launch on 16<sup>th</sup> Sept, 12PM
                </h4> 
                 <h4 className="card-text">Rs.19,999</h4> 
                {/* <a href="#" className="btn btn-primary">Read More</a> */}
                <Link to="/Cart" class="btn btn-success">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="col-md-4">
            <div className="card blog-card">
              {/* <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Blog Image 3" /> */}
              <img className="img-fluid" src="img.jpeg" alt="Blog 3" />
              <div className="card-body">
                <h4 className="card-title blog-title text-bold">
                  Samsung Galaxy S24
                </h4>
                <h4 className="card-text text-bold blog-title">
                  Launch on 13<sup>th</sup> Sept, 12PM
                </h4>
                <h4 className="card-text">Rs.67,999</h4>
                {/* <a href="#" className="btn btn-primary">Read More</a> */}
                <Link to="/Cart" class="btn btn-success">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        {/* <h1 className=" heading text-center mb-4 text-info">UPCOMING LAUNCHES</h1> */}
        <div className="row">
          {/* Blog 1 */}
          <div className="col-md-4">
            <div className="card blog-card">
              {/* <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Blog Image 1" /> */}
              <img className="img-fluid" src="img/supply 1.jpeg" alt="Blog 1" />
              <div className="card-body">
                <h4 className="card-title blog-title text-bold">
                  realme P2 Pro 5G
                </h4>
                <h4 className="card-text text-bold blog-title">
                  Launch on 13<sup>th</sup> Sept, 12PM
                </h4>
                <h4 className="card-text">Rs.20,999</h4>
                {/* <a href="#" className="btn btn-primary">Read More</a> */}
                <Link to="/Cart" class="btn btn-success">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="col-md-4">
            <div className="card blog-card">
              {/* <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Blog Image 2" /> */}
              <img className="img-fluid" src="img/supply 3.jpeg" alt="Blog 2" />
              <div className="card-body">
                <h4 className="card-title blog-title text-bold">
                  OnePlus Nord
                </h4>
                <h4 className="card-text text-bold blog-title">
                  Launch on 16<sup>th</sup> Sept, 12PM
                </h4>
                <h4 className="card-text">Rs.19,999</h4>
                {/* <a href="#" className="btn btn-primary">Read More</a> */}
                <Link to="/Cart" class="btn btn-success">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="col-md-4">
            <div className="card blog-card">
              {/* <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="Blog Image 3" /> */}
              <img
                className="img-fluid"
                src="img/supply 10.jpeg"
                alt="Blog 3"
              />
              <div className="card-body">
                <h4 className="card-title blog-title text-bold">
                  Samsung Galaxy S24
                </h4>
                <h4 className="card-text text-bold blog-title">
                  Launch on 13<sup>th</sup> Sept, 12PM
                </h4>
                <h4 className="card-text">Rs.67,999</h4>
                {/* <a href="#" className="btn btn-primary">Read More</a> */}
                <Link to="/Cart" class="btn btn-success">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
