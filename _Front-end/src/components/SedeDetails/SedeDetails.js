import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import SisgamManagerAPI from '../../services/sisgamManagerAPI';
import SedeUserTable from '../SedeUserTable/SedeUserTable';
import ModalAddUser from '../ModalAddUser/ModalAddUser';

export default function SedeDetails() {
    let params = useParams();
    let showModalMessage = useOutletContext();
    let sedeId = params.sedeId;
    let sisgamManagerAPI = new SisgamManagerAPI();
    const [sedeInfo, setSedeInfo] = useState([]);
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const openModal2 = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    useEffect(() => getUnityDetails(sedeId), []);

    const getUnityDetails = async (sedeId) => {
        let response = await sisgamManagerAPI.getUnityDetails(sedeId);
        setSedeInfo(response);
    }

    const removeUserFromSede = async (sedeId, receivers_id) => {
        try {
            let response = await sisgamManagerAPI.deleteUsersByUnity(sedeId, receivers_id);
            getUnityDetails(sedeId);
            showModalMessage("Vínculo(s) removido(s) com sucesso!");
            return true;
        }
        catch (ex) {
            showModalMessage(` Erro ao excluir vínculos!: ${ex}`);
            return false;
        }

    }

    const bindMap = async (email) => {
        let response = await sisgamManagerAPI.bindMap(sedeId, email);
        if (!response.error) {
            getUnityDetails(sedeId);
        }
        return response;
    };

    return (
        <div>
            <ModalAddUser openModal={openModal} closeModal={closeModal}
                open={modalIsOpen} sedeId={sedeId} bindAction={bindMap} />

            <SedeUserTable
                openFormAction={openModal2}
                users={sedeInfo}
                deleteAction={removeUserFromSede}
            ></SedeUserTable>
        </div>
    )
}
