import React from "react";
import './CardItem.css'
import {Link} from 'react-router-dom'
function CardItem(props) {
  return (
   
    <div className="col-lg  mx-lg-4 my-5 ">
      <Link className="text-decoration-none" to='/demo'>
      <div className="card">
        <img
          src={props.src}
          style={{ height: 350 }}
          className="card-img-top"
          alt="imag"
        />
      <span className="card-status badge "> { props.status } </span>
        <div className="card-body">
          <p className="card-text h5 text-center">
            {props.text}
          </p>
        </div>
      </div>
      </Link>

    </div>
  );
}

export default CardItem;
