import React from 'react';
import ReactDOM from 'react-dom';
import { navLinks } from './links';
import { mainLinks } from './links';
import NavList from './NavList';
import Colors from 'material-ui/lib/styles/colors';
import Cloud from 'material-ui/lib/svg-icons/file/cloud';

var user = {
    "name":"תומר"
}

ReactDOM.render( <div>
    <NavList links ={ navLinks }/>
    <div style={{"position":"absolute","top":0,"bottom":0,"right":"150px","left":0, "background":"white"}}>
        <div id="welcome" style={{"background":Colors.lightBlue500,"width":"100%","height":"250px"}}>

            <div style={{
            "position":"relative","top":"35%","bottom":0,"right":"10%","left":0,
            "color":"white", "fontSize":"200%", "float":"right"
            }}> היי {user.name} <br/> ברוך הבא לענן התומכ"ל <br/><span style={{"fontSize":"60%","marginBottom":"50px"}}>עמוד הבית הצה"לי</span></div>
            <Cloud color={Colors.grey50} hoverColor={Colors.yellow100} style={{"width": "180px", "height": "180px", "position":"relative","top":"15%","bottom":0,"right":"-10%","left":0, "float":"left"}}/>


        </div>
    </div>
</div>, document.getElementById('app') );
