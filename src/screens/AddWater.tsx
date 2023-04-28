import React, {useEffect, useRef, useState} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS} from '../styles';
import {WaterContainer, WATER_CONTAINER} from '../data';
import List from '../components/List';

const AddWater = ({navigation}) => {
  const [name, setItem] = useState('');
  const [animation, setAnimation] = useState(false);

  const {current} = useRef(new Animated.Value(0));

  useEffect(() => {
    animation &&
      Animated.timing(current, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(({finished}) => {
        finished && navigation.goBack();
      });
  }, [animation, current, navigation]);

  const selectItem = (container: WaterContainer) => {
    setItem(container.title);
  };
  const addWater = () => {
    console.log('🔥 addWater');
    setAnimation(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>
        <View>
          <Text style={styles.header}>Add Water</Text>
          <List
            data={WATER_CONTAINER}
            selectItem={selectItem}
            nameSelected={name}
          />
        </View>
        <TouchableOpacity
          disabled={name === ''}
          style={[styles.button, name === '' && styles.disabled]}
          onPress={addWater}>
          <Text style={styles.buttonText}>Add Water</Text>
        </TouchableOpacity>

        {animation && (
          <AnimatedLottieView
            source={require('../assets/lottie/106576-water-drop.json')}
            autoPlay={true}
            resizeMode={'cover'}
            progress={current}
            loop={false}
            style={{backgroundColor: COLORS.background}}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.dark,
    marginTop: 25,
  },
  page: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
  header: {
    fontFamily: 'Inter-Bold',
    fontSize: 34,
    lineHeight: 41,
    color: COLORS.pink,
    marginBottom: 35,
  },
  button: {
    backgroundColor: COLORS.pink,
    borderRadius: 16,
    marginBottom: 16,
  },
  disabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    lineHeight: 24,
    color: COLORS.black,
    textAlign: 'center',
    marginVertical: 16,
  },
});

export default AddWater;
