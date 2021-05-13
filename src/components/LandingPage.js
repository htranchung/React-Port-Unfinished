import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="Avatar" className="avatar"></img>
                        <div className="banner">
                            <h1>React Portfolio</h1>
                        </div>
                    </Cell>
                </Grid>
                
            </div>
        );
    }
}

export default LandingPage;
