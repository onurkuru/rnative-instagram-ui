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

import CardComponent from '../CardComponent'

 var images = [
    require('../../assets/feeds/1.jpg'),
    require('../../assets/feeds/2.jpg'),
    require('../../assets/feeds/3.jpg'),
    require('../../assets/feeds/4.jpg'),
    require('../../assets/feeds/5.jpg'),
    require('../../assets/feeds/6.jpg'),
    require('../../assets/feeds/7.jpg'),
    require('../../assets/feeds/8.jpg'),
    require('../../assets/feeds/9.jpg'),
    require('../../assets/feeds/10.jpg'),
    require('../../assets/feeds/11.jpg')
  ]

  var {width,height} = Dimensions.get('window')

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

  renderSectionOne = () => {

    return images.map((image, index) => {
      return (
       <View key={index} style={[{width: (width)/3}, {height: (width)/3}, {marginBottom: 2}, index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0}  ]} >
         <Image style={{flex:1, width: undefined, height: undefined}}
              source={image} />
       </View>
       )
    })

  } 

  renderSection = () => {

    if(this.state.activeIndex == 0)
    {
      return(
          <View style={{flexDirection: 'row', flexWrap: 'wrap'  }}>
           {this.renderSectionOne()}
          </View>
        )
    }

    else if (this.state.activeIndex == 1)
    {
      return (
        <View>
          <CardComponent ImageSource="1" Likes="111" />
          <CardComponent ImageSource="2" Likes="333" />
          <CardComponent ImageSource="3" Likes="301" />
          <CardComponent ImageSource="4" Likes="401" />
        </View>
      )
    } 

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
              <Text>Digital Marketer | React Native</Text>
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

            {this.renderSection()}

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
