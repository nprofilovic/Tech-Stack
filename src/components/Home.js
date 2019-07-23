import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header } from './common'
import LibraryList from './LibraryList';



class Home extends Component { 
    render() {
        
        return (
            <View style={{flex: 1}}>
                <Header title="Tech Stack" />
                <LibraryList />
            </View>
        )
    }
}

export default Home;
