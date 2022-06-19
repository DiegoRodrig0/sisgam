import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import './CardSede.css';


export default function CardSede(props) {
    let navigate = useNavigate();
    const card = (
        <Box className="cardSede">
            <Card className="" variant="outlined"> <React.Fragment>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    </Typography>
                    <Typography className="sizeSedeName" variant="h5" component="div">
                        🚂 {props.sede.nome}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} variant="h5" color="text.secondary">
                        <br />
                        👷🏼 {props.sede.Qtde} usuários
                    </Typography>
                    <Typography variant="body2">
                        {props.sede.km_inicio}
                        <br />
                        📌 {props.sede.km_fim}
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={(e) => navigate(`/sedesDt/${props.sede.id}`)}> Listar Usuários </Button>
                </CardActions>
            </React.Fragment> </Card>
        </Box>
    );

    return (
        <div>{card}</div>
    );
}