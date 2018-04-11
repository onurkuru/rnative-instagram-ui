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
  
constructor(props) {
  super(props);

  this.state = {
    activeIndex: 0
  };
}

segmentClicked = (index) => {

    this.setState({
        activeIndex : index
    })
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
                      <Icon name="settings" style={{fontSize: 18}} />
                    </Button>
                  </View>
              </View>
            </View> 

            <View style={{ padding: 10, paddingHorizontal: 10}} >
              <Text style={{fontWeight: 'bold'}}>Onur Kuru</Text>
              <Text>Digital Marketer</Text>
              <Text>www.onurkuru.com</Text>
            </View>

            <View>
              <View style={{ flexDirection: 'row', justifyContent:  'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
                <Button 
                  transparent
                  onPress={() => this.segmentClicked(0)}
                  active={this.state.activeIndex == 0}
                >
                  <Icon name="ios-apps-outline" 
                      style={[this.state.activeIndex == 0 ? {}: {
                        color: 'grey'
                      } ]}
                  />
                </Button>
                  <Button 
                  transparent
                  onPress={() => this.segmentClicked(1)}
                  active={this.state.activeIndex == 1}
                >
                  <Icon name="ios-list-outline" 
                      style={[this.state.activeIndex == 1 ? {}: {
                        color: 'grey'
                      } ]}
                  />
                </Button>
                  <Button 
                  transparent
                  onPress={() => this.segmentClicked(2)}
                  active={this.state.activeIndex == 2}
                >
                  <Icon name="ios-people-outline" 
                      style={[this.state.activeIndex == 2 ? {}: {
                        color: 'grey'
                      } ]}
                  />
                </Button>
                  <Button 
                  transparent
                  onPress={() => this.segmentClicked(3)}
                  active={this.state.activeIndex == 3}
                >
                  <Icon name="ios-bookmark-outline" 
                      style={[this.state.activeIndex == 3 ? {}: {
                        color: 'grey'
                      } ]}
                  />
                </Button>
              
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
