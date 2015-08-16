import React from 'react-native';

const {
  View,
  Text,
  StyleSheet,
} = React;


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: "Nitti-Bold", fontSize: 30 }}>
          Offcourse
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
