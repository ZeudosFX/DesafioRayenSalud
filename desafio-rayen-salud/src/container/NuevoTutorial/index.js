import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


import { Toolbar, IconButton, AppBar, Typography, Box, FormGroup, TextField, Grid, Button } from '@material-ui/core';
import { PureComponent } from 'react';
import * as Api from '../../service/Api';

export class NuevoTutorial extends PureComponent {


    tutorial = {
        nombre: '',
        profesor: '',
        materia: '',
        fecha: new Date().toDateString()
    }

    submit = () => {
        Api.Post('createTutorial', this.tutorial)
            .then(data => {
                if (data.id > 0) {
                    alert('Tutorial Guardado');
                    this.props.history.goBack();
                } else {
                    alert(data)
                }

            }, error => {

            });
    }

    handleTextChange = (event) => {
        switch (event.target.id) {
            case 'nombre':
                this.tutorial.nombre = event.target.value;
                break;
            case 'profesor':
                this.tutorial.profesor = event.target.value;
                break;
            case 'materia':
                this.tutorial.materia = event.target.value;
                break;
            case 'fecha':
                this.tutorial.fecha = event.target.value;
                break;
        }
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={() => this.props.history.goBack()} >
                            <ArrowBackIosIcon />
                        </IconButton>
                        <Typography variant="h6">Agregar tutorial</Typography>
                    </Toolbar>
                </AppBar>
                <FormGroup>
                    <Grid container direction={"column"} spacing={2} style={{ margin: 5 }}>
                        <Grid item >
                            <TextField
                                id="nombre"
                                label="Titulo"
                                placeholder="Titulo"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(event) => this.handleTextChange(event)}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="profesor"
                                placeholder="Profesor"
                                variant="outlined"
                                onChange={(event) => this.handleTextChange(event)}
                            ></TextField>
                        </Grid>
                        <Grid item>
                            <TextField
                                id="materia"
                                placeholder="Materia"
                                variant="outlined"
                                onChange={(event) => this.handleTextChange(event)}
                            ></TextField>
                        </Grid>
                        <Grid item>
                            {/* <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={this.tutorial.fecha}
          onChange={(event) =>this.handleTextChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}
                            <TextField
                                id="fecha"
                                placeholder="Fecha"
                                variant="outlined"
                                value={this.tutorial.fecha}
                                onChange={(event) => this.handleTextChange(event)}
                            ></TextField>
                        </Grid>
                        <Grid >
                            <Button onClick={() => this.submit()}>AGREGAR</Button>
                        </Grid>
                    </Grid>
                </FormGroup>
            </div>
        )
    }

}

export default NuevoTutorial;