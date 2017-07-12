/**
 * Created by Douglas on 7/10/2017.
 */

import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';



export default class extends Component {

    state ={
        open: false,
    }

    render(){
        return(
        <div>
            <AppBar
                title="Lego Search App"
                onLeftIconButtonTouchTap={e => this.setState({open: !this.state.open})}
            />
            <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
            >
                {/*drawer content*/}
                <MenuItem href='/page'>Products</MenuItem>
                <MenuItem href='/page'>Cart</MenuItem>
            </Drawer>

        </div>
    );
    }
}