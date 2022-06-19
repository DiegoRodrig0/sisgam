import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    pt: 2,
    px: 4,
    pb: 3,
};

export default function MessageModal(props) {
    let open = props.open;
    let msg = props.msg;

    const handleClose = () => { 
        props.handleClose();
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>                    
                    {msg &&
                        <p id="parent-modal-title"> {msg} </p>
                    }
                </Box>
            </Modal>
        </div>
    );
}