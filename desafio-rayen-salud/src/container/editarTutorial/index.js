import { Toolbar, IconButton, AppBar, Typography, Box, FormGroup, TextField, Grid, Button } from '@material-ui/core';
import { PureComponent } from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import EditIcon from '@material-ui/icons/Edit';
import * as Api from '../../service/Api';

export class EditarTutorial extends PureComponent {
    constructor(props) {
        super(props);
        this.state ={
            disabled: true,
            tutorial:{
                id: this.props.location.state.tutorial.id,
                nombre: this.props.location.state.tutorial.nombre,
                profesor: this.props.location.state.tutorial.profesor,
                materia: this.props.location.state.tutorial.materia,
                fecha: this.props.location.state.tutorial.fecha         

            }
        }
    }

    handleTextChange = (event) => {
        let tutorial = this.state.tutorial;
        switch (event.target.id) {
            case 'nombre':
                tutorial.nombre = event.target.value;
                break;
            case 'profesor':
                tutorial.profesor = event.target.value;
                break;
            case 'materia':
                tutorial.materia = event.target.value;
                break;
            case 'fecha':
                tutorial.fecha = event.target.value;
                break;
        }
        this.setState({tutorial:tutorial});
    }

    
    edit = () =>{
        this.setState({disabled: false});
    }
    delete = () =>{
        Api.Delete(`deletetutorial/${(this.state.tutorial.id)}`)
        .then(data => {
            if(data.id > 0){
            alert('Tutorial Eliminado');
            this.props.history.goBack();
        }else{
            alert(data)
        }
        })
    }

        submit = () => {
            Api.Put(`updatetutorial/${this.state.tutorial.id}`, this.state.tutorial)
                .then(data => {
                    if(data.id > 0)
                        {alert('Tutorial Guardado');
                    this.props.history.goBack();
                }else{
                    alert(data)
                }
    
                }, error =>{
                    
                });
    }
    render() {
        return (
            <div>
                <AppBar position="static" >
                    <Toolbar>
                        <IconButton onClick={() => this.props.history.goBack()} >
                            <ArrowBackIosIcon />
                        </IconButton>
                        <Typography variant="h6" >Modificar Tutorial</Typography>
                        <Button onClick={()=> this.edit()} >
                            <EditIcon/>
                        </Button>
                    </Toolbar>
                </AppBar>
                <FormGroup>
                    <Grid container direction={"column"} spacing={2} style={{ margin: 5 }}>
                        <Grid item >
                            <TextField
                            disabled={this.state.disabled}
                                id="nombre"
                                label="Titulo"
                                placeholder="Titulo"
                                variant="outlined"
                                value={this.state.tutorial.nombre}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(event) => this.handleTextChange(event)}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                            disabled={this.state.disabled}
                                id="profesor"
                                placeholder="Profesor"
                                variant="outlined"
                                value={this.state.tutorial.profesor}
                                onChange={(event) => this.handleTextChange(event)}
                            ></TextField>
                        </Grid>
                        <Grid item>
                            <TextField
                            disabled={this.state.disabled}
                                id="materia"
                                placeholder="Materia"
                                variant="outlined"
                                value={this.state.tutorial.materia}
                                onChange={(event) => this.handleTextChange(event)}
                            ></TextField>
                            <Grid item>
                                <TextField
                                disabled={this.state.disabled}
                                    id="fecha"
                                    placeholder="Fecha"
                                    variant="outlined"
                                    value={this.state.tutorial.fecha}
                                    onChange={(event) => this.handleTextChange(event)}
                                ></TextField>
                            </Grid>
                            <Grid >
                            {!this.state.disabled && <Button onClick={() => this.delete()}>ELIMINAR</Button>}
                            {!this.state.disabled && <Button onClick={() => this.submit()}>MODIFICAR</Button>}
                        </Grid>
                        </Grid>
                    </Grid>
                </FormGroup>
            </div>
        )
    }
}

export default EditarTutorial;