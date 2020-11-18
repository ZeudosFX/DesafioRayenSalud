
import { AppBar, Box, Button, Fab, FormControl, FormGroup, InputLabel, MenuItem, Select, TextField, Toolbar, Typography } from "@material-ui/core";
import Lista from "../../component/list/lista";
import * as Api from '../../service/Api'
import AddIcon from '@material-ui/icons/Add'


const { PureComponent } = require("react");

class ListaTutoriales extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tutoriales: [],
            orden: 1
        }
    }




    componentDidMount() {
        Api.Get('tutorials')
            .then(data => {
                this.setState({ tutoriales: data })
            })
    }

    newTutorial = () => {
        this.props.history.push('/nuevo-tutorial');
    }

    editTutorial = (tutorial) => {
        this.props.history.push('/editar-tutorial', { tutorial: tutorial })
    }

    deleteAll = () => {
        Api.Delete('deletetutorials')
            .then(data => {
                if (data.length > 0) {
                    this.setState({ tutoriales: [] })
                    alert('Tutoriales eliminados')

                }
            })
    }

    order = (event) => {
        this.setState({ orden: event.target.value })
        let tutos = []

        switch (event.target.value) {
            case 1:
                tutos = this.state.tutoriales.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
            case 2:
                tutos = this.state.tutoriales.sort((a, b) => (a.fecha > b.fecha) ? 1 : -1);
        }

    }

    render() {
        return (
            <div>
                <AppBar position="static" >
                    <Toolbar>
                        <Typography variant="h6" >Tutoriales</Typography>
                    </Toolbar>
                </AppBar>
                <Box style={{ margin: 10 }}>
                    <FormGroup  >
                        <TextField type="text" placeholder="Buscar por titulo" variant="outlined" />
                    </FormGroup>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>Ordenado por</InputLabel>
                            <Select value={this.state.orden} onChange={(event) => this.order(event)}>
                                <MenuItem value={1}>Titulo</MenuItem>
                                <MenuItem value={2}>Fecha</MenuItem>
                            </Select>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <Lista tutoriales={this.state.tutoriales} editTutorial={this.editTutorial} />
                    </FormGroup>
                    <FormGroup>
                        {this.state.tutoriales.length > 0 && <Button onClick={() => this.deleteAll()}>ELIMINAR</Button>}
                    </FormGroup>
                </Box>

                <Fab style={{ position: 'absolute', bottom: 10, right: 10 }} onClick={() => this.newTutorial()}>
                    <AddIcon />
                </Fab>
            </div>
        )
    }
}

export default ListaTutoriales;