import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

class Verification extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: true
    }
    this.handleClose = this.handleClose.bind(this);
  }


  handleClose() {
    this.setState({ open: false });
  };
  
  render() {
    return (
      <div>
        <Dialog
          disableBackdropClick
          open={this.state.open}
          onClose={this.handleClose}
        >
          <h1>Are you over 20 years old?</h1>
          <DialogContent>
            <h3>
              This website contains information about alcoholic beverages. For purchases and visits to this site, you must be 20 years or older.
            </h3>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Yes
            </Button>
            <Button onClick={this.handleClose} color="primary">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default Verification;