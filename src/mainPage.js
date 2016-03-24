import React from 'react';
import Color from 'material-ui/lib/styles/colors';
import { links } from './links';
import navList from './navList';

export default class mainPage extends React.Component {
    render() {
        return (
            <navList links={ links }/>
        )
    }
}
