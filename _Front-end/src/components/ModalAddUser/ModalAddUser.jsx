import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import './ModalAddUser.css';

import SisgamManagerAPI from '../../services/sisgamManagerAPI';
import { useState } from 'react';
import { useEffect } from 'react';

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

export default function ModalAddUser(props) {
    let open = props.open;
    let sisgamManagerAPI = new SisgamManagerAPI();
    const [options, setOptions] = useState([]);
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    function formatUsers(receivers) {
        return receivers.map(receiver => { return { 'id': receiver[0], 'email': receiver[1] } });
    }

    async function loadReceivers() {
        let receivers = await sisgamManagerAPI.getAllUsers();
        receivers = formatUsers(receivers);
        console.log(receivers);
        setOptions(receivers);
    }

    useEffect(async () => { loadReceivers();}, []);

    const handleOpen = () => {
       
        props.openModal();
        setMsg('');
    };

    const handleClose = () => {
        setMsg('');
        props.closeModal();
    };

    function onChange(selectedEmail) {
        setEmail(selectedEmail);
        setMsg('');
    }

    async function bindReceiverSede(email) {
        let response = await props.bindAction(email);

        if (!response.error) {
            setMsg(response.msg);
        }
        else {
            setMsg(response.error);
        }
        setEmail('');
        await loadReceivers();
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
                    <p id="parent-modal-title"> Vincular técnico: </p>
                    { msg &&
                        <p id="parent-modal-title"> {msg} </p>
                    }

                    <Autocomplete
                        inputValue={email}
                        id="emailAutoComplete"
                        onInputChange={(event, newValue) => onChange(newValue)}
                        freeSolo
                        options={options.map((option) => option.email)}
                        renderInput={(params) => <TextField {...params}
                        
                            label="Informe um email @emserf.com" />}
                    />

                    <div className='actions'>
                        <br />
                        <button onClick={() => {
                            bindReceiverSede(email)
                        }
                        }>Vincular</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}