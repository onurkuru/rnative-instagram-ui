import React, {Component}  from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

import { Container, Content, Icon, Thumbnail, Header, Body, Left, Right, Button } from 'native-base'

import EntypoIcon from 'react-native-vector-icons/Entypo'


class LikesTab extends Component {

static navigationOptions = {

  tabBarIcon: ({ tintColor }) => (
    
    <Icon name="ios-heart" style={{ color: tintColor }} />

  )
}

	render(){
		return (
		<Container style={{flex: 1, backgroundColor: 'white'}}>
        <Header>
          <Body><Text>Activity</Text></Body>
        </Header>
        <Content>
          <View>
            <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-around',flexWrap: 'nowrap', padding: 10, }}>
              <Thumbnail  source={require
                        ('../../assets/onrkr.jpg')} />
              <Text style={{ flexWrap: 'wrap', flex: 2, paddingLeft: 10, paddingTop: 10 }}><Text style={{fontWeight:  '900' }}>onrkr</Text> started following you. <Text style={{color: 'grey'}}>23h </Text></Text>
              <Button dark style={{ flex:1, marginLeft: 10, marginTop: 10, justifyContent: 'center', height: 30, backgroundColor: '#3897f1' }}>
                <Text style={{color: 'white'}}>Follow</Text>
               </Button>
           </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-around',flexWrap: 'nowrap', padding: 10}}>
              <Thumbnail  source={require
                        ('../../assets/stories/1.jpg')} />
              <Text style={{ flexWrap: 'wrap', flex: 2, paddingLeft: 10, paddingTop: 10 }}><Text style={{fontWeight:  '900' }}>Elena</Text> started following you. <Text style={{color: 'grey'}}>23h </Text></Text>
              <Button dark style={{ flex:1, marginLeft: 10, marginTop: 10, justifyContent: 'center', height: 30, backgroundColor: '#fff',borderColor: 'grey', borderWidth: 0.5 }}>
                <Text style={{color: 'black'}}>Following</Text>
               </Button>
           </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-around',flexWrap: 'nowrap', padding: 10}}>
              <Thumbnail  source={require
                        ('../../assets/stories/2.jpg')} />
              <Text style={{ flexWrap: 'wrap', flex: 2, paddingLeft: 10, paddingTop: 10 }}><Text style={{fontWeight:  '900' }}>Martin</Text> started following you. <Text style={{color: 'grey'}}>2w </Text></Text>
              <Button dark style={{ flex:1, marginLeft: 10, marginTop: 10, justifyContent: 'center', height: 30, backgroundColor: '#3897f1' }}>
                <Text style={{color: 'white'}}>Follow</Text>
               </Button>
           </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-around',flexWrap: 'nowrap', padding: 10}}>
              <Thumbnail  source={require
                        ('../../assets/stories/3.jpg')} />
              <Text style={{ flexWrap: 'wrap', flex: 2, paddingLeft: 10, paddingTop: 10 }}><Text style={{fontWeight:  '900' }}>Ceren</Text> liked your post. <Text style={{color: 'grey'}}>3w </Text></Text>
              <Image  style={{ flex:1, marginLeft: 10, marginTop: 10, justifyContent: 'center', height: 30, backgroundColor: '#fff',borderColor: 'grey', borderWidth: 0.5 }}
                      source={require('../../assets/feeds/5.jpg')} />
           </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-around',flexWrap: 'nowrap', padding: 10}}>
              <Thumbnail  source={require
                        ('../../assets/stories/4.jpg')} />
              <Text style={{ flexWrap: 'wrap', flex: 2, paddingLeft: 10, paddingTop: 10 }}><Text style={{fontWeight:  '900' }}>Pamela</Text> started following you. <Text style={{color: 'grey'}}>4w </Text></Text>
              <Button dark style={{ flex:1, marginLeft: 10, marginTop: 10, justifyContent: 'center', height: 30, backgroundColor: '#fff',borderColor: 'grey', borderWidth: 0.5 }}>
                <Text style={{color: 'black'}}>Following</Text>
               </Button>
           </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-around',flexWrap: 'nowrap', padding: 10}}>
              <Thumbnail  source={require
                        ('../../assets/stories/5.jpg')} />
              <Text style={{ flexWrap: 'wrap', flex: 2, paddingLeft: 10, paddingTop: 10 }}><Text style={{fontWeight:  '900' }}>Zehra</Text> started following you. <Text style={{color: 'grey'}}>5w </Text></Text>
              <Button dark style={{ flex:1, marginLeft: 10, marginTop: 10, justifyContent: 'center', height: 30, backgroundColor: '#3897f1' }}>
                <Text style={{color: 'white'}}>Follow</Text>
               </Button>
           </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-around',flexWrap: 'nowrap', padding: 10}}>
              <Thumbnail  source={require
                        ('../../assets/stories/6.jpg')} />
              <Text style={{ flexWrap: 'wrap', flex: 2, paddingLeft: 10, paddingTop: 10 }}><Text style={{fontWeight:  '900' }}>Ahmet</Text> started following you. <Text style={{color: 'grey'}}>6w </Text></Text>
              <Button dark style={{ flex:1, marginLeft: 10, marginTop: 10, justifyContent: 'center', height: 30, backgroundColor: '#3897f1' }}>
                <Text style={{color: 'white'}}>Follow</Text>
               </Button>
           </View>

          </View>

        </Content>
    </Container>
		);
	}
}
export default LikesTab;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});
