import React from 'react';
import Colors from './Theme';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

export default class mainPage extends React.Component {
    render() {
        return (
            <div style={{"height":window.screen.height}}>
                <List style={{"width": "150px", "height":"100%", "background":Colors.navRight}}>
                    <ListItem primaryText="Item 1"></ListItem>
                    <ListItem primaryText="Item 2"></ListItem>
                    <ListItem primaryText="Item 3"></ListItem>
                    <ListItem primaryText="Item 4"></ListItem>
                </List></div>
        )
    }
}
