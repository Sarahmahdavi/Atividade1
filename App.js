import React, { Component } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

// A classe App será usada para a página de carros
class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Título da Página */}
        <Text style={styles.header}>Página de Carros</Text>

        {/* Carro 1 - Fusca */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://th.bing.com/th/id/R.e4e967673cc49520832ccbe3262804e8?rik=xSFIJIFg2PsvdQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-hi0K6g0Pvig%2fUOopmjzMN7I%2fAAAAAAAABfo%2f32tjyqlDUNI%2fs1600%2f734252_290958907674414_140913667_n.jpg&ehk=epbNv89Sy6jfrEsFRbb0F6r%2fVCN6BI1xw5X08pGrCpY%3d&risl=&pid=ImgRaw&r=0' }}  
            style={styles.carImage}
          />
          <Text style={styles.carTitle}>Fusca</Text>
          <Text style={styles.carInfo}>Ano: 1978</Text>
          <Text style={styles.carInfo}>Cor: Preto</Text>
        </View>

        {/* Carro 2 - Gol */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://th.bing.com/th/id/R.23e0dff9209aa85fc3234a3d87d726ae?rik=Oc2MobJngjGZLw&riu=http%3a%2f%2fimg.revendapro.com.br%2f377ab13361d6fdff77cc333ad04d7fa4_thumb.jpeg&ehk=14GGZrt2w8aTl4V%2bbwR%2fTgk7soblOki8RcjPMvw7Sw8%3d&risl=&pid=ImgRaw&r=0' }}  
            style={styles.carImage}
          />
          <Text style={styles.carTitle}>Gol</Text>
          <Text style={styles.carInfo}>Ano: 2010</Text>
          <Text style={styles.carInfo}>Cor: Vermelho</Text>
        </View>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', 
    padding: 10,
  },
  header: {
    color: '#4B0082',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Arial', 
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  carImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  carTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  carInfo: {
    fontSize: 16,
    color: '#666',
  },
});

export default App;