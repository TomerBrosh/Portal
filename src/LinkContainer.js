import React from 'react';
import Colors from 'material-ui/lib/styles/colors';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Cloud from 'material-ui/lib/svg-icons/file/cloud';
import Paper from 'material-ui/lib/paper';


export default class LinkContainer extends React.Component {
    render() {
        let linkStyle = {
            "color": "black",
            "textDecoration": "none",
            "fontSize": "110%",
            "textAlign": "center"
        };
        return (
            <Paper style={{"position":"relative","marginTop":"-3.4%","right":"11%","bottom":0, "width":"77%","minHeight":"70%"}} zDepth={2}>

            </Paper>
        )
    }
}
