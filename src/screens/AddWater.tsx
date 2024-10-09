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
import {WaterContainer, WATER_CONTAINER} from '../types';
import List from '../components/List';
import {createRecord} from '../api/records/createRecord';
import {useStore} from '../store/storage';

import {LinearGradientText} from 'react-native-linear-gradient-text';

const AddWater = ({navigation}) => {
  const {drinker} = useStore();
  const [record, setRecord] = useState({name: '', capacity: 0});
  const [animation, setAnimation] = useState(false);

  const {current} = useRef(new Animated.Value(0));

  useEffect(() => {
    animation &&
      Animated.timing(current, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(async ({finished}) => {
        await createRecord(drinker!.id, record.capacity);
        finished && navigation.goBack();
      });
  }, [animation, current, record, drinker, navigation]);

  const selectItem = (container: WaterContainer) => {
    setRecord(container);
  };
  const addWater = async () => {
    setAnimation(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>
        <View>
          <LinearGradientText
            colors={[COLORS.pink, COLORS.blue]}
            text="Add Water"
            start={{x: 0.0, y: 0}}
            end={{x: 0.8, y: 0}}
            textStyle={styles.header}
          />
          <List
            data={WATER_CONTAINER}
            selectItem={selectItem}
            nameSelected={record.name}
          />
        </View>
        <TouchableOpacity
          disabled={record.name === ''}
          style={[styles.button, record.name === '' && styles.disabled]}
          onPress={addWater}>
          <Text style={styles.buttonText}>Add Water</Text>
        </TouchableOpacity>

        {animation && (
          <AnimatedLottieView
            source={require('../assets/lottie/water-drop.json')}
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
