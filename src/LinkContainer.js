import React from 'react';
import Colors from 'material-ui/lib/styles/colors';
import Paper from 'material-ui/lib/paper';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import Android from 'material-ui/lib/svg-icons/action/android';
import IconButton from 'material-ui/lib/icon-button';


export default class LinkContainer extends React.Component {
    render() {
        let linkStyle = {
            "color": "black",
            "textDecoration": "none",
            "fontSize": "110%",
            "textAlign": "center"
        };
        return (
            <Paper
                style={{"position":"relative","marginTop":"-3.4%","right":"11%","bottom":0, "width":"77%","minHeight":"70%"}}
                zDepth={2}>
                <GridList cellHeight={150} cols={5}>
                    {
                        this.props.data.map(function (tile) {
                            return (
                                <GridTile
                                    style={{marginLeft:"10px", marginRight:"10px"}}
                                    title={tile.title}
                                    actionIcon={<IconButton><Android color="white"/></IconButton>}
                                >
                                    <img src={tile.img} alt=""/>
                                </GridTile>
                            )
                        })
                    }
                </GridList>
            </Paper>
        )
    }
}
