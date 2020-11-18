const { Box, List, ListItem, ListItemText } = require("@material-ui/core");
const { Label } = require("@material-ui/icons");

const Lista = (props) => {
    const {
        tutoriales,
        editTutorial
    } = props;

    

    return (
        <List>

{tutoriales !== undefined && tutoriales.map((tutorial)=>(
            <ListItem key={tutorial.id} onClick={() => editTutorial(tutorial)}>
                <ListItemText primary={tutorial.nombre} secondary={tutorial.profesor}  />
            </ListItem>
        ))}
        </List>


    )
}

export default Lista;