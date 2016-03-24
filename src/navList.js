import React from 'react';
import Color from 'material-ui/lib/styles/colors';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

export default class navList extends React.Component {
    render() {
        return (
            <div style={{"height":"500px"}}>
                <div>Hello</div>
                <List style={{"width": "150px", "height":"100%", "background":Color.indigo100}}>
                    {
                        this.props.links.map(function (link) {
                            return (
                                <ListItem primaryText={link.name} />
                            )
                        })
                    }
                </List></div>
        )
    }
}
