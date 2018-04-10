import React, {Component}  from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { Container, Content, Icon, Thumbnail, Header, Body, Left, Right } from 'native-base'
import CardComponent from '../CardComponent'

class HomeTab extends Component {

static navigationOptions = {

  tabBarIcon: ({ tintColor }) => (
    
    <Icon name="ios-home" style={{ color: tintColor }} />

  )
}

	render(){
		return (

      <Container style={styles.container}>
        <Header>
          <Left><Icon name="ios-camera-outline"  style={{paddingLeft:10}} /></Left>
          <Body><Text>Instagram</Text></Body>
          <Right><Icon name="ios-send-outline" style={{paddingRight:10}} /></Right>
        </Header>

			 <Content>

          <View style={{height: 100}} >
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7  }}>
              <Text>Stories</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'  }}>
                <Icon name="md-play" style={{fontSize: 14}} />
                <Text style={{fontWeight: 'bold'}}>Watch All</Text>
              </View>
            </View>

            <View style={{flex: 3}}>
              <ScrollView 
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    alignItems:  'center',
                    paddingStart: 5,
                    paddingEnd: 5 
                  }}
                >
                 <Thumbnail 
                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                    source={require
                        ('../../assets/stories/1.jpg')} />
                  <Thumbnail 
                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                    source={require
                        ('../../assets/stories/2.jpg')} />
                  <Thumbnail 
                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                    source={require
                        ('../../assets/stories/3.jpg')} />
                  <Thumbnail 
                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                    source={require
                        ('../../assets/stories/4.jpg')} />
                  <Thumbnail 
                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                    source={require
                        ('../../assets/stories/5.jpg')} />
                  <Thumbnail 
                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                    source={require
                        ('../../assets/stories/6.jpg')} />
          <Thumbnail 
                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                    source={require
                        ('../../assets/stories/7.jpg')} />              </ScrollView>
            </View>


          </View>

          <CardComponent ImageSource="1" Likes="111" />
          <CardComponent ImageSource="2" Likes="333" />
          <CardComponent ImageSource="3" Likes="301" />
          <CardComponent ImageSource="4" Likes="401" />
        </Content>
      </Container>

		);
	}
}
export default HomeTab;


const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'white'
  }
});
