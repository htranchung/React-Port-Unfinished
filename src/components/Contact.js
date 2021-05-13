import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';



class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Harrison Tran-Chung</h2>
            <hr/>
            <img
              src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
              alt="avatar"
              style={{height: '250px'}}
               />
            <div className="icons">
              <h3>Social</h3>
                <a className="btn btn-social-icon btn-instagram icons" href="http://instagram.com/"><i className="fa fa-instagram fa-5x" /></a>{' '}
                <a className="btn btn-social-icon btn-facebook icons" href="http://www.facebook.com/"><i className="fa fa-facebook fa-5x" /></a>{' '}
                <a className="btn btn-social-icon btn-twitter icons" href="http://twitter.com/"><i className="fa fa-twitter fa-5x" /></a>{' '} 
            </div>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contactList">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <a role="button" aria-hidden="true" className="btn btn-link icons" href="tel:+17632837528"><i className="fa fa-phone" /> (555)555-5555</a><br />
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <a role="button" aria-hidden="true" className="btn btn-link icons" href="mailto:Tranchung@live.com"><i className="fa fa-envelope-o" />fakeemail@yahoo.com</a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;