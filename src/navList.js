import React from 'react';
import Colors from 'material-ui/lib/styles/colors';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Cloud from 'material-ui/lib/svg-icons/file/cloud';


export default class NavList extends React.Component {
    render() {
        let linkStyle = {
            "color": "black",
            "textDecoration": "none",
            "fontSize": "110%",
            "textAlign": "center"
        };
        return (
            <div style={{"position":"absolute","top":0,"right":0,"bottom":0}}>
                <List
                    style={{"width": "150px", "height": "100%", "background":Colors.blueGrey100}}
                    subheaderStyle={{"marginRight": "30px","marginBottom": "-25px", "background":Colors.blueGrey100}}
                    subheader={<Cloud color={Colors.grey50} hoverColor={Colors.cyan50} style={{"width": "90px", "height": "90px", "marginTop": "-10px"}}/>}
                    zDepth={1}>
                    {

                        this.props.links.map(function (link) {
                            return (
                                <a href={link.url} style={linkStyle}><ListItem primaryText={link.name}
                                                                               style={linkStyle}></ListItem></a>
                            )
                        })
                    }
                </List>
            </div>
        )
    }
}
