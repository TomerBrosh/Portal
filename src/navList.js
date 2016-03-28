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
            "fontSize": "110%"};
        return (
            <div style={{"position":"fixed","top":0,"right":0,"bottom":0, "width": "12%"}}>
                <List
                    style={{"width": "100%", "height": "100%", "background":Colors.lightBlue50}}
                    subheaderStyle={{"marginRight": "6%","marginLeft": "6%","marginBottom": "-25px", "background":Colors.lightBlue50}}
                    subheader={<Cloud color={Colors.grey50} hoverColor={Colors.cyan50} style={{"width": "70px", "height": "70px", "marginTop": "-10px"}}/>}
                    zDepth={0}>
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
