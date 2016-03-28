import React from 'react';
import ReactDOM from 'react-dom';
import { navLinks } from './links';
import { mainLinks } from './links';
import NavList from './NavList';
import LinkContainer from './LinkContainer';
import Colors from 'material-ui/lib/styles/colors';
import Cloud from 'material-ui/lib/svg-icons/file/cloud';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';

var user = {
    "name": "תומר"
}

const style = {}
const tilesData = [
    {
        img: require('./pics/Grindr-logo.jpg'),
        title: 'מערכת חשובה'
    },
    {
        img: require('./pics/Grindr-logo.jpg'),
        title: 'Tasty burger'
    },
    {
        img: require('./pics/Grindr-logo.jpg'),
        title: 'Camera'
    },
    {
        img: require('./pics/Grindr-logo.jpg'),
        title: 'Morning'
    },
    {
        img: require('./pics/Grindr-logo.jpg'),
        title: 'Hats'
    },
    {
        img: require('./pics/Grindr-logo.jpg'),
        title: 'Honey'
    },
    {
        img: require('./pics/Grindr-logo.jpg'),
        title: 'Vegetables'
    },
    {
        img: require('./pics/Grindr-logo.jpg'),
        title: 'Water plant'
    },
];

ReactDOM.render(<div>
    <NavList links={ navLinks }/>
    <div
        style={{"position":"absolute","top":0,"bottom":0,"right":"12%","left":0, "background":"white", "width":"88%", "WebkitOverflowScrolling": "touch"}}>
        <Paper>
            <div id="welcome" style={{"background":Colors.lightBlue500,"width":"100%","height":"250px"}}>
                <div style={{
            "position":"relative","top":"30%","bottom":0,"right":"8%","left":0,
            "color":"white", "fontSize":"200%", "float":"right"
            }}> היי {user.name} <br/> ברוך הבא לענן התומכ"ל <br/><span style={{"fontSize":"60%","marginBottom":"50px"}}>עמוד הבית הצה"לי</span>
                </div>

                <div
                    style={{"position":"relative","top":"-10%","bottom":0,"right":"-8%","left":"0", "float":"left", "height":"100%", "width":"180px"}}>

                    <TextField fullWidth={true} hintText="חיפוש..." inputStyle={{color:Colors.grey50}}
                               underlineFocusStyle={{borderColor:"white", border:"2px solid", borderRadius:"15px"}}
                               style={{"width": "180px", "position":"relative","top":"25%", "zIndex":1}}/>
                    <Cloud color={Colors.grey50} hoverColor={Colors.yellow100}
                           style={{"width": "100%", "height": "100%", "position":"relative", "left":"0"}}/>
                </div>
            </div>
        </Paper>
        <LinkContainer data = {tilesData}/>
    </div>
</div>, document.getElementById('app'));
