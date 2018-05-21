import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import ReactTooltip from 'react-tooltip'
import Grid from '@material-ui/core/Grid';

class ResponsiveDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
        console.log('this are props in component', this.props)
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {fullScreen} = this.props;

        return (
            <div>
                <a data-tip data-for='readMore' onClick={this.handleClickOpen}>
                    <div className="gallery__item">
                        {this.props.picture}
                        <h3 className="divContainer__centered">{this.props.name}</h3>
                    </div>
                </a>
                <ReactTooltip id='readMore' place="top" type="light"
                              effect="float">
                    <p><strong>Click</strong> to read more about</p>
                </ReactTooltip>

                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title"><h3>{`Details about ${this.props.name}`}</h3></DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <Grid item xs={12} className="divContainer__centered">
                                <a href={this.props.link} target="_blank">{this.props.picture}</a>
                            </Grid>
                            <Grid item xs={12} className="divContainer__centered">
                                {this.props.text}
                            </Grid>
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
