import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';



class About extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>About Me</h2>
            <hr/>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet, ex purto integre explicari pri, vivendo corpora adversarium ne pro, has ex harum libris. Vim liber singulis mnesarchum ne, adhuc facilisi indoctum sit ne. Alii iusto at vel, rebum laoreet te sit. Legimus argumentum qui et. Et fastidii splendide efficiantur qui, has ut facilis feugait, ridens putant te eos. Cu probo ridens lobortis mea, pro admodum albucius salutatus et. Errem habemus id vel, sed cu omnium laoreet, mel vocibus tractatos adversarium cu.</p>
            </Cell>
          <Cell col={6}>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent>
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its word original.</p>
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Has nisl eius iracundia eu, nec delenit facilis minimum ad, ius timeam laoreet at. Elit luptatum apeirian id his. Eum timeam pertinax cu. Vis tacimates dissentiunt in, id ipsum dolorum apeirian vix. Ut mea adhuc timeam mediocritatem, cu diceret adipiscing incorrupte cum. Paulo solet ea eum. Harum expetenda reprehendunt ei usu, ut everti melius reprehendunt his.</p>
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

export default About;