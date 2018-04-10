import React, {Component}  from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'


class CardComponent extends Component {

static navigationOptions = {

  tabBarIcon: ({ tintColor }) => (
    
    <Icon name="person" style={{ color: tintColor }} />

  )
}

	render(){

  const images = {
    "1": require('../assets/feeds/1.jpg'),
    "2": require('../assets/feeds/2.jpg'),
    "3": require('../assets/feeds/3.jpg'),
    "4": require('../assets/feeds/4.jpg')
  }


		return (
			<Card>
        <CardItem>
          <Left>

        
            <Thumbnail source={require
                        ('../assets/onrkr.jpg')} />
              <Body>
                <Text>Onur Kuru</Text>
                <Text>Mayıs 08, 2018</Text>
              </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image   source={images
                              [this.props.ImageSource]}  style={
                          {height: 200,width: null,flex: 1}} />
        </CardItem>
        <CardItem style={{height: 45}}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart-outline" style={{color: 'black'}} />
            </Button>
             <Button transparent>
              <Icon name="ios-chatbubbles-outline" style={{color: 'black'}} />
            </Button>
             <Button transparent>
              <Icon name="ios-send-outline" style={{color: 'black'}} />
            </Button>
          </Left>
        </CardItem>
        
        <CardItem style={{height: null }}>
          <Text>{this.props.Likes} Likes</Text>
        </CardItem> 
        <CardItem>
          <Body>
            <Text>
            <Text style={{fontWeight:  '900' }}>onrkr </Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Body>
        </CardItem>

      </Card>
		);
	}
}
export default CardComponent;


const styles = StyleSheet.create({
  
 
});

