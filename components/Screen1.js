import { StatusBar } from 'expo-status-bar';
import { ScrollView, SafeAreaView, StyleSheet, Text, FlatList, View, Image, Button, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const DATA = [
  {
    id: 'ca_nau_lau',
    title: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Devang'
  },
  {
    id: 'ga_bo_toi',
    title: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'LTD Food'
  },
  {
    id: 'xe_can_cau',
    title: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi'
  },
  {
    id: 'do_choi_dang_mo_hinh',
    title: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi'
  },
  {
    id: 'lanh_dao_gian_don',
    title: 'Lãnh đạo giản đơn',
    shop: 'Minh Long Book'
  },
  {
    id: 'hieu_long_con_tre',
    title: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book'
  },
  {
    id: 'trump 1',
    title: 'Donal Trump Thiên tài lãnh đạo',
    shop: 'Minh Long Book'
  },
];



const renderItem = ({ item }) => (
  <View style={styles.list}>
    <View style={styles.item}>
      <View style={styles.image}><Image
        source={require('../assets/' + item.id + '.png')}
        style={{ width: 74, height: 74, }}
      /></View>
      <View style={styles.detail}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.shop}>shop: <Text style={styles.shopName} numberOfLines={1}>{item.shop}</Text></Text>
      </View>
      <View style={styles.button} >
        <Pressable style={styles.delete}>Chat</Pressable>
      </View>

    </View>
    <View style={styles.line}></View>
  </View>

);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textTitle}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      </View>
      <SafeAreaView style={styles.body}>
        <ScrollView contentContainerStyle={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  header: {
    width: '90%',
    height: '10%',
    marginLeft: '5%'
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 500
  },
  list:{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    margin: 5,
  },
  image: {
    width: '20%'
  },
  detail: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '60%',
    height: '50%',
  },
  title: {
    fontSize: 20,
    fontWeight: 400,
    flexWrap: 'nowrap'
  }, shop: {
    fontSize: 18,
    fontWeight: 400,
    color: '#7D5B5B'
  }, shopName: {
    fontSize: 20,
    fontWeight: 400,
    color: 'red'
  },
  button: {
    width: '20%',
  },
  delete: {
    backgroundColor: 'red',
    width: '80%',
    height: 40,
    fontSize: 20,
    textAlign: 'center',
    margin: 'auto',
    paddingTop: '8%'
  },
  line: {
    height: 1,
    backgroundColor: '#bbb',
    width: '100%'
  },

});
