import React from 'react';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const Consent = (props) => {
    const {consentHeader, warningText, onYes, open, setOpen} = props;

    const handleRequestNo = () => {
        setOpen(false);
    }

    const handleRequestYes = () => {
        setOpen(false);
        onYes();
    }

    return (
        <div>
            <Dialog open={open} onClose={handleRequestNo}>
                <DialogTitle>
                    {consentHeader}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {warningText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleRequestNo} variant="contained" color="primary">
                        No
                    </Button>
                    <Button onClick={handleRequestYes} variant="contained" className="bg-danger text-white">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

Consent.propTypes = {
    consentHeader: PropTypes.string,
    warningText: PropTypes.string,
    onYes: PropTypes.func,
    open: PropTypes.bool,
    setOpen: PropTypes.func,
}

export default Consent;