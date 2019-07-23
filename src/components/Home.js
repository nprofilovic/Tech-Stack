import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header } from './common'
import LibraryList from './LibraryList';



class Home extends Component { 
    render() {
        
        return (
            <View>
                <Header title="Tech Stack" />
                <LibraryList />
            </View>
        )
    }
}

export default Home;
