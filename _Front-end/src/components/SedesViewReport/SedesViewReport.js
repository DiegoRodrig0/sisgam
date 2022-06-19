import React, { useEffect, useState } from 'react';
import SisgamManagerAPI from '../../services/sisgamManagerAPI';
import CardSede from '../CardSede/CardSede';
import './SedesViewReport.css';

export default function SedesViewReport() {

    const sisgamManagerAPI = new SisgamManagerAPI();
    const [sedes, setSedes] = useState([]);

    useEffect(() => { getSedes(); }, []);

    function convertToObject(response) {
        let objects = [];

        for (let sedes of response) {
            objects.push({ id: sedes[0], nome: sedes[1], km_inicio: sedes[2], km_fim: sedes[3], Qtde: sedes[4] })
        }
        return objects;
    }

    async function getSedes() {
        let response = await sisgamManagerAPI.getCountUsers();
        console.log(response);

        let objects = convertToObject(response);
        console.log(objects);
        setSedes(objects);
    }    

    return (<div className='sedesGrid'> {sedes && (
        sedes.map(sede => <CardSede sede={sede} />)
    )} </div>);
}