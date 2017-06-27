import React, {Component} from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import Figures from './figures';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class App extends Component {

    state = {
        filter: '',
    };

    render() {


        const value = this.state.filter;
        const expression = new RegExp(value, 'i');


        return (
            <div>
                <AppBar
                    title="Lego Search App"
                    onLeftIconButtonTouchTap={e => this.setState({ open: !this.state.open })}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                    <MenuItem href='/page'>Emmet</MenuItem>
                    <MenuItem href='/page'>Wild Style</MenuItem>
                </Drawer>

                <div>
                    <input type="text"
                           className="inputStyle"
                           placeholder="Search by name or price"
                           value={this.state.filter}
                           onChange={ e => this.setState({filter: e.target.value})}/>
                </div>

                <main>
                    { Figures
                        .filter(figure => figure.isActive)
                        .filter(figure => figure.name.match(expression) || figure.price.toString().startsWith(value))
                        .map(figure => {
                            return (
                                <div className="padding10">
                                    <Card>
                                        <CardMedia
                                            className="cardStyle"
                                            overlay={<CardTitle
                                                title={figure.name}
                                                subtitle={figure.price}/>
                                            }>
                                            <img src={figure.imageUrl} alt=""/>
                                        </CardMedia>
                                    </Card>
                                </div>
                            )

                        }) }
                </main>
            </div>
        );
    }
}

export default App;