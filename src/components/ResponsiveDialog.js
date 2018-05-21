import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

class ResponsiveDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
        console.log('this are props in component',this.props)
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { fullScreen } = this.props;

        return (
            <div>
                <Button onClick={this.handleClickOpen}>Read more</Button>
                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{`Details about ${this.props.name}`}</DialogTitle>
                    <DialogContent>
                       {this.props.picture}
                        <DialogContentText>
                            {this.props.text}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button href={this.props.link} target="_blank" color="primary">
                            Open website
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

ResponsiveDialog.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);
