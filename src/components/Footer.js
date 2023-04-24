import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="bg-dark container-fluid text-light">
      <div className="container mx-auto text-center py-5">
        <h3>Join the Adventure newsletter to receive our best vacation deals</h3>
        <h5>You can unsubscribe at anytime</h5>
       <form className="col-lg-3 col-6 mx-auto mt-3">
       <input type="email" placeholder="Your Email" className="form-control "/><br />
        <button className="btn btn-outline-success my-1">Subscribe</button>
       </form>
      </div>
      <div className="row container mx-auto ">
        <div className="col-lg-3 col-6">
          <h3 className="text-center">About us</h3>
          <ul>
            <li className="list-group-item">How it works</li>
            <li className="list-group-item">Testimonials</li>
            <li className="list-group-item">Careers</li>
            <li className="list-group-item">Investors</li>
            <li className="list-group-item">Terms of Service</li>
          </ul>
        </div>
        <div className="col-lg-3 col-6">
        <h3 className="text-center">Videos</h3>
          <ul>
            <li className="list-group-item">Submit Video</li>
            <li className="list-group-item">Ambassadors</li>
            <li className="list-group-item">Angency</li>
            <li className="list-group-item">Influencer</li>
          </ul>
        </div>
        <div className="col-lg-3 col-6">
        <h3 className="text-center">Contact us</h3>
          <ul>
            <li className="list-group-item">Contact</li>
            <li className="list-group-item">Support</li>
            <li className="list-group-item">Destinations</li>
            <li className="list-group-item">Sponsorships</li>
          </ul>
        </div>
        <div className="col-lg-3 col-6">
        <h3 className="text-center">Social Media</h3>
          <ul>
            <li className="list-group-item">Instagram</li>
            <li className="list-group-item">Facebook</li>
            <li className="list-group-item">Youtube</li>
            <li className="list-group-item">Twitter</li>
          </ul>
          </div>
      </div>
      <div className="row container mx-auto py-3">
        <div className="col-lg-12 col-6 text-lg-center text-end">
        <FontAwesomeIcon  icon={faPoo} size="xl" style={{color:'#c9aa3b'}}  />
        </div>
        <div className="col-lg-12 col-6 text-start text-lg-center">
          <span>Poo&copy;2023</span>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
