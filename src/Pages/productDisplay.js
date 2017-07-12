/**
 * Created by Douglas on 7/10/2017.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux';
import Actions from '../Actions/';

import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import Figures from '../figures';
import Drawer from 'material-ui/Drawer'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class productDisplay extends Component {

    state = {
        filter: '',
        showDetails: false,
        selectedFigure: {},
    };


    render(){


        const value = this.state.filter;
        const expression = new RegExp(value, 'i');
        const {showDetails} = this.state;
        const {selectedFigure} = this.state;

        const Quantity = 3;

        return(
            <div>
                <Paper zDepth={1} className="inputStyle">
                    <TextField type="search"
                               value={this.state.filter}
                               onChange={e => this.setState({filter: e.target.value})}
                               fullWidth={true}
                               hintText="Search by a name or a price..."/>
                </Paper>

                <main>
                    { Figures
                        .filter(figure => figure.isActive)
                        .filter(figure => figure.name.match(expression) || figure.price.toString().startsWith(value))
                        .map(figure => {
                            return (
                                <div className="padding10" onClick={handleClick => this.setState({
                                    showDetails: !showDetails,
                                    selectedFigure: figure,
                                }) }>
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
                    <Drawer
                        width={600}
                        docked={false}
                        openSecondary={true}
                        open={this.state.showDetails}
                        onRequestChange={(showDetails) =>
                            this.setState({showDetails, selectedFigure: null})}
                    >
                        {selectedFigure ? (
                            <section>
                                <h2 className="detailsTitle">{selectedFigure.name}</h2>
                                <section>
                                    <div><img className="detailsStyle padding10"
                                              src={selectedFigure.imageUrl}
                                              alt={selectedFigure.name}/></div>
                                    <div className="detailsStyle padding10"
                                         dangerouslySetInnerHTML={{__html: selectedFigure.description}}/>
                                </section>
                                <section className="add2Cart">
                                    <div>
                                        <h3>{selectedFigure.price}</h3>
                                    </div>
                                    <FloatingActionButton onClick={e => this.props.onAddToCart(selectedFigure, Quantity)} >
                                        <ContentAdd />
                                    </FloatingActionButton>
                                </section>
                            </section>
                        ) : null}

                    </Drawer>
                </main>
            </div>
        );
    }
}

export default connect(state => ({
        cart: state.cart,
    }),
    dispatch => ({
        onAddToCart: (item = {}, quantity = 0) => {
            return dispatch(Actions.addToCart(item, quantity));
        },
    }),
)(productDisplay);
