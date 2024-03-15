import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="mb-4">
              <h5 className="text-uppercase">Swarmony</h5>
              <p className="mb-2">A curated marketplace of the world’s top music production talent</p>
              <p className="mb-2">info@swarmony.com</p>
              <p>+(1) 888-734-4358</p>
            </div>
            {/* <div>
              <h5 className="text-uppercase">Useful Links</h5>
              <ul className="list-unstyled mb-0">
                <li><a href="#" className="text-light">Sign up as a provider</a></li>
                <li><a href="#" className="text-light">Sign in</a></li>
                <li><a href="#" className="text-light">About Us</a></li>
                <li><a href="#" className="text-light">User Reviews</a></li>
                <li><a href="#" className="text-light">FAQ</a></li>
              </ul>
            </div> */}
          </div>
          <div className="col-md-4">
            <div>
              <h5 className="text-uppercase">Resources</h5>
              <ul className="list-unstyled mb-0">
                <li><a href="#" className="text-light">Terms</a></li>
                <li><a href="#" className="text-light">Tutorials</a></li>
                <li><a href="#" className="text-light">Privacy</a></li>
                <li><a href="#" className="text-light">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h5 className="text-uppercase">Follow Us</h5>
              <div className="d-flex">
                <a href="#" className="text-light me-3">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="text-light me-3">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="text-light">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">© 2024 Swarmony Virtual Collaboration. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
