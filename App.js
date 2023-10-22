import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native';
import Screen1 from './components/Screen1'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen style={styles.container} name="Home" component={Screen1} options={{
          headerStyle: { backgroundColor: '#1BA9FF' },
          title: 'Chat',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              color:'#fff'
            },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack(); // Xử lý sự kiện khi nút "Back" được nhấn
              }}
            >
              <Image
                source={require('./assets/back.png')}
                style={{ width: 32, height: 32, marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                //navigation.goBack(); // Xử lý sự kiện khi nút "Cart" được nhấn
              }}
            >
              <Image
                source={require('./assets/cart.png')}
                style={{ width: 32, height: 32, marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
          


        }} />

      </Stack.Navigator>


    </NavigationContainer>
  );
}

function headerLeft() {
  return (
    <View style={styles.head}>
      <Image
        style={{ width: 32, height: 32 }} resizeMode='contain'
        source={require('./assets/back.png')}
      />

    </View>

  )
}
function headerRight() {
  return (
    <View style={styles.head}>
      <Image
        style={{ width: 32, height: 32 }} resizeMode='contain'
        source={require('./assets/cart.png')}
      />
    </View>

  )
}
function headerTitle() {
  return (
    <View style={styles.head}>
      <Text style={styles.textChat}>Chat</Text>

    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: "100%",
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    height: '50%',
    backgroundColor: '#bbb'
  },
  textChat: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: '2%'
  },

});
