import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux';

export class LibraryList extends Component {
    renderItem(library) {
        <View>
            <Text>{library.title}</Text>
        </View>
    }
    render() {
        console.log(this.props);
        return (
            <FlatList 
                data={this.props.libraries}
                renderItem = {this.renderItem}
                keyExtractor = {library => library.id}
            />
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        libraries: state.libraries
    }
}
export default connect(mapStateToProps)(LibraryList);
