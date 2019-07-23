import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet } from 'react-native';
import Home from './src/components/Home';
import reducers from './src/reducers';


const store = createStore(reducers);

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
