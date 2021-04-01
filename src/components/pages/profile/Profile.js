import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ImgProfile from "../../../images/bibboome.jpeg";

export default function Profile() {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img className="activator" src={ImgProfile} alt="Bibboo" />
          <Link className="btn-floating halfway-fab waves-effect waves-light teal">
            <i className="material-icons activator">more_vert</i>
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Nitu Andreea Bianca
          </span>
          <p>Student</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Contact
            <i className="material-icons right">close</i>
          </span>
          <p className="flex-container">
          <a href="https://github.com/nituabianca"><i className="fab fa-github grey-text text-darken-4 social_style"></i></a>
          <a href="https://www.linkedin.com/in/bianca-ni%C8%9Bu-a1434b1b9/"><i className="fab fa-linkedin grey-text text-darken-4 social_style"> </i></a>
          <a href="https://www.facebook.com/nitu.andreeabianca/"><i className="fab fa-facebook-f grey-text text-darken-4 social_style"></i></a>
          <a href="https://www.instagram.com/bianca_a_nitu/"><i className="fab fa-instagram grey-text text-darken-4 social_style"></i></a>
          </p>
        </div>
      </div>
    </div>
  );
}
