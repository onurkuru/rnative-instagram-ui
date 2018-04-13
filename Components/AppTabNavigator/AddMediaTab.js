import React, { Component } from 'react';
import {
AppRegistry,
Dimensions,
StyleSheet,
Text,
TouchableHighlight,
View
} from 'react-native';

import Camera from 'react-native-camera';
import { Icon } from 'native-base'

class AddMediaTab extends Component {

static navigationOptions = {

  tabBarIcon: ({ tintColor }) => (
    
    <Icon name="ios-add-circle" style={{ color: tintColor }} />

  )
}

render() {
return (
<View style={styles.container}>
<Camera
ref={(cam) => {
this.camera = cam;
}}
onBarCodeRead={this.onBarCodeRead.bind(this)}
style={styles.preview}
aspect={Camera.constants.Aspect.fill}>
<View style={styles.CircleShapeView}>
<Text style={styles.capture} onPress={this.takePicture.bind(this)}><Icon name="camera" style={{color: 'black',fontSize: 42}} /></Text>
   </View>
</Camera>
</View>
);
}

onBarCodeRead(e) {
console.log(
"Barcode Found!",
"Type: " + e.type + "\nData: " + e.data
);
}

takePicture() {
const options = {};
//options.location = ...
this.camera.capture({metadata: options})
.then((data) => console.log(data))
.catch(err => console.error(err));
}
}

export default AddMediaTab;

const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: 'row',
},
preview: {
flex: 1,
justifyContent: 'flex-end',
alignItems: 'center'
},
capture: {
flex: 1,
paddingLeft: 20,
paddingTop: 14,
},
  CircleShapeView: {
    width: 70,
    height: 70,
    borderRadius: 70/2,
    backgroundColor: '#fff',
    marginBottom: 20
},
});

AppRegistry.registerComponent('AddMediaTab', () => AddMediaTab);