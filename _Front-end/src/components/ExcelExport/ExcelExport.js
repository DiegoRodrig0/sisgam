import * as React from 'react';
import SisgamManagerAPI from  '../../services/sisgamManagerAPI'
import { useEffect, useState } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

function ButtonExport() {
    return (
        <GridToolbarContainer>
            <GridToolbarExport csvOptions={{
                fileName: 'Sisgam • Report',
                delimiter: ';',
                utf8WithBom: true,
            }} />
        </GridToolbarContainer>
    );
}

const colunasTabela = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'email', headerName: 'Email', width: 400 },
    { field: 'sede', headerName: 'Sede', width: 200 },
]


export default function ExcelExport() {
    let sisgamManagerAPI = new SisgamManagerAPI();
    const [linhasTabela, setLinhasTabela] = useState([]);

    useEffect(() => getGeneralList(), []);

    const getGeneralList = async () => {
        let response = await sisgamManagerAPI.getGeneralList();
        setLinhasTabela(response);
        console.log(response);
    }

    return (
        <Box sx={{ display: 'flex', height: 450, width: '180%', width: 750 }} >
            <DataGrid
                rows={linhasTabela}
                columns={colunasTabela}
                components={{
                    Toolbar: ButtonExport,
                }} />
        </Box>
    );
}
