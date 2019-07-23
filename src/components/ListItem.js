import React, { Component } from 'react';
import CardSection  from './common/CardSection';
import { Text,View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {

    renderDescription(){
        const {expanded, library} = this.props
            
        if (expanded) {
            return (
                <Text>{library.item.description}</Text>
            );
        }
    }
    
    render() {
        const {titleStyle} = styles
        const { id, title } = this.props.library.item
        
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                                               
                    </CardSection>
                    
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
})

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectLibraryId === ownProps.library.item.id;
    return {
        expanded
    };
}

export default connect(mapStateToProps, actions)(ListItem)
