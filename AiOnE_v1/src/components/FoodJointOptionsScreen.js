import React, {useState} from 'react';
import {
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import { BackIcon } from 'svg';

import styles from '../styles/FoodJointOptionsScreen.styles.js'


const FoodJointOptionsScreen = ({ navigation }) => {

    const url = "https://raw.githubusercontent.com/Prabhash33/AiOnE_DB/main/foodJointData.json";
    const [data, setData] = useState([]);

    menuDisplay = (cafeCode) => {
        fetch(url)
          .then(response => response.json())
          .then(json => {
            // Filter the data based on the text name of the touchable opacity that was pressed
            // const filteredData = json.filter(item => item.name === cafeCode);
            
            // Pass the filtered data to your custom page
            // console.log(json);

            setData(json);
            let cafeObj = null;

            switch(cafeCode) {
                case 'Metro_Joint':
                    cafeObj = data.Metro_Joint;
                case 'Clubhouse':
                    cafeObj = data.Clubhouse;
            }

            console.log(cafeObj);

          })
          .catch(error => console.error(error));
      }

    return (
        <View style={styles.mainContainer}>
            <StatusBar translucent backgroundColor={'#E8E8E8'} />
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}>
                    <BackIcon height={32} width={32} />
                </TouchableOpacity>
                <Text style={styles.textStyle}>Food Joint</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bodyContainer}>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={() => menuDisplay('Metro_Joint')}>
                            <Image source={require('../images/restaurant.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Metro Joint</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={() => menuDisplay()}>
                            <Image source={require('../images/spaghetti.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Clubhouse</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={() => menuDisplay()}>
                            <Image source={require('../images/food_cart.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>South Story</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={() => menuDisplay()}>
                            <Image source={require('../images/breakfast.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Khatta Meetha</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={() => menuDisplay()}>
                            <Image source={require('../images/topping.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Flavours</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={() => menuDisplay()}>
                            <Image source={require('../images/dosa.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Eurest</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={() => menuDisplay()}>
                            <Image source={require('../images/vending-machine.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Vending Machine</Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item} activeOpacity={0.7} onPress={() => menuDisplay()}>
                            <Image source={require('../images/coffee.png')} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Hatti Kaapi</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
export default FoodJointOptionsScreen;
