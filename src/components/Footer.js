import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer icons">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1 ">
                        <h5>Links</h5>
                        <ul>
                            <li><Link to='/LandingPage'>Home</Link></li>
                            <li><Link to='/About'>About</Link></li>
                            <li><Link to='/Contact'>Contact</Link></li>
                            <li><Link to='/Experience'>Experience</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram icons" href="http://instagram.com/"><i className="fa fa-instagram fa-lg" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook icons" href="http://www.facebook.com/"><i className="fa fa-facebook fa-lg" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter icons" href="http://twitter.com/"><i className="fa fa-twitter fa-lg" /></a>{' '} 
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link icons" href="tel:+17632837528"><i className="fa fa-phone" /> (555)555-5555</a><br />
                        <a role="button" className="btn btn-link icons" href="mailto:Tranchung@live.com"><i className="fa fa-envelope-o" /> fakeemail@yahoo.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;