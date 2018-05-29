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
import FaClose from 'react-icons/lib/fa/close';

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
        let closeImg = {cursor:'pointer', float:'right', marginTop: '0px', marginRight: '0px'};

        return (
            <div>
                <a data-tip data-for='readMore' onClick={this.handleClickOpen}>
                    <div className="gallery__item">
                        {this.props.picture}
                        <h2 className="divContainer__centered fontLarger whiteShadow">{this.props.name}</h2>
                    </div>
                </a>
                <ReactTooltip id='readMore' place="top" type="light"
                              effect="float">
                    <p><strong>Click</strong> to read more</p>
                </ReactTooltip>

                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogTitle>
                        <div className="modal__header">
                            <h4>{'Details about:'} <FaClose onClick={this.handleClose} style={closeImg}/> </h4>
                            <h2>{this.props.name}</h2>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <Grid container justify="space-around" alignItems="center">
                        <Grid item xs={12} className="divContainer__centered">
                                <a href={this.props.link} target="_blank">{this.props.picture}</a>
                            </Grid>
                            <Grid item xs={12} className="divContainer__centered">
                                <DialogContentText className="modal__text">{this.props.text}</DialogContentText>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button href={this.props.link} target="_blank" color="primary">
                            Open website
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
