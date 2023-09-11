/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {accelerometer} from 'react-native-sensors';

function getRandomChoice() {
  return Math.ceil(Math.random() * 3);
}

let timer: NodeJS.Timeout | null = null;

const Rock = require('./Rock.png');
const Scissor = require('./Scissor.png');
const Paper = require('./Paper.png');

function App(): JSX.Element {
  const [userChoice, setUserChoice] = React.useState<number>(getRandomChoice());

  useEffect(() => {
    const subscription = accelerometer.subscribe(({x, y, z}) => {
      // 가속도계 데이터를 처리하고 흔들림을 감지하는 로직을 구현합니다.
      // 여기에서는 x, y, z 값 중 하나라도 특정 임계값을 넘으면 흔들림으로 판단합니다.
      const threshold = 2.0; // 흔들림을 판단하는 임계값

      if (Platform.OS === 'ios') {
        if (
          Math.abs(x) > threshold ||
          Math.abs(y) > threshold ||
          Math.abs(z) > threshold
        ) {
          console.log(x, y, z);
          setUserChoice(getRandomChoice());
        }
      } else {
        if (
          Math.abs(x) > threshold &&
          Math.abs(y) > threshold &&
          Math.abs(z) > threshold
        ) {
          console.log(x, y, z);
          setUserChoice(getRandomChoice());
        }
      }
    });

    return () => {
      // 컴포넌트가 언마운트되면 구독을 해제합니다.
      subscription.unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle={'dark-content'} />
      <Pressable
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          console.log('timer', timer);
          if (!timer) {
            timer = setInterval(() => {
              setUserChoice(getRandomChoice());
            }, 100);
            return;
          }

          clearInterval(timer);
          timer = null;
          setUserChoice(getRandomChoice());
        }}>
        {userChoice === 1 && <Image source={Rock} />}
        {userChoice === 2 && <Image source={Scissor} />}
        {userChoice === 3 && <Image source={Paper} />}
      </Pressable>
    </SafeAreaView>
  );
}

export default App;
