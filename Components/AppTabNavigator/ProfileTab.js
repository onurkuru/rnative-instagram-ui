import React, {Component}  from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import { Container, Content, Icon, Thumbnail, Header, Body, Left, Right, Button } from 'native-base'

import EntypoIcon from 'react-native-vector-icons/Entypo'

class ProfileTab extends Component {

static navigationOptions = {

  tabBarIcon: ({ tintColor }) => (
    
    <Icon name="person" style={{ color: tintColor }} />

  )
}

	render(){
		return (
      <Container style={{flex: 1, backgroundColor: 'white'}}>
        <Header>
          <Left><Icon name="md-person-add"  style={{paddingLeft:10}} /></Left>
          <Body><Text>onrkr</Text></Body>
          <Right><EntypoIcon name="back-in-time" style={{paddingRight:10,
            fontSize: 32}}></EntypoIcon></Right>
        </Header>
        <Content>
          <View style={{ paddingTop: 10 }} >
            <View style={{flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={require('../../assets/onrkr.jpg')} 
                      style={{width: 75, height: 75, borderRadius: 37.5}} />
              </View>
              <View style={{ flex: 3 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'  }}>
                  <View style={{alignItems:  'center' }}>
                    <Text>20</Text>
                    <Text style={{fontSize: 10, color: 'grey'}}>posts</Text>
                  </View>
                  <View style={{alignItems:  'center' }}>
                    <Text>206</Text>
                    <Text style={{fontSize: 10, color: 'grey'}}>followers</Text>
                  </View>
                  <View style={{alignItems:  'center' }}>
                    <Text>167</Text>
                    <Text style={{fontSize: 10, color: 'grey'}}>following</Text>
                  </View>
                  
               
                </View>
                   <View style={{ flexDirection: "row", paddingTop: 10}}>
                    <Button dark bordered style={{ flex:3, marginLeft: 10, justifyContent: 'center', height: 30 }}>
                      <Text>Edit Profile</Text>
                    </Button>
                    <Button dark bordered style={{ flex:1, marginRight: 10, marginLeft: 5, justifyContent: 'center', height: 30 }}>
                      <Icon name="settings" />
                    </Button>
                  </View>
              </View>
            </View> 
          </View>
        </Content>

      </Container>
		);
	}
}
export default ProfileTab;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
 
});
