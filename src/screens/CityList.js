import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import cityListApi from '../api/CityListApi';
import { ScrollView } from 'react-native-gesture-handler';
import { Input } from 'react-native-elements';


export default class CityList extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      cities: [],
      searchCities: [],
      search_input : "",
    };
  }

  componentDidMount() {
    cityListApi.fetchAvailableCities()
      .then(cities => {
        console.log('cities =', cities.length);
        this.setState({
          cities : cities,
          searchCities : cities
        });
      });
  }

  onPressCity(item) {
    this.props.navigation.navigate(
      'Detail',
      {
        city: item
      }
    );
  }

  onKeyPressInput(){
    let searchInput = this.state.searchInput;
    let cities = this.state.cities;

    this.setState({
      searchCities : cities.filter(city=>city.toLowerCase().indexOf(searchInput)>-1)
    })
  }

  renderItem(city) {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.onPressCity(city)}>
        <Text style={styles.text}>{city}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ScrollView>
        <Input
          placeholder='Search'
          onKeyPress={()=>this.onKeyPressInput()}
          onChangeText={(searchInput) => this.setState({searchInput})}
          value={this.state.searchInput}
        />
        <FlatList style={styles.container}
          numColumns={3}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={item => item}
          data={this.state.searchCities}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
    },

    text: {
        fontSize: 14,
        textAlign: 'center'
    }
})