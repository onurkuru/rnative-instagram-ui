import React, {Component}  from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import { Container, Content, Icon, Item, Input, Thumbnail, Header, Body, Left, Right, Button } from 'native-base'

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

class SearchTab extends Component {

static navigationOptions = {

  tabBarIcon: ({ tintColor }) => (
    
    <Icon name="ios-search" style={{ color: tintColor }} />

  )
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

	render(){
		return (
		<Container style={{flex: 1, backgroundColor: 'white'}}>
    <Header >
      <View style={{padding : 10, flex: 3}}>
           <Input placeholder="Search" style={{ borderRadius: 15, height: 15, backgroundColor: '#eee', textAlign: 'center' }}/>
      </View>
    </Header>
       <Content>

          <View style={{height: 100}} >
       
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
            <View style={{flexDirection: 'row', flexWrap: 'wrap'  }}>
           {this.renderSectionOne()}
          </View>

              </Content>
      </Container>
			
	);
  }
}
export default SearchTab;


const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'white'
  }
});
