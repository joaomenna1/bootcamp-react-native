import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
/**
 * DEV é uma variavel global do react native que ela retorna true quando
 * o usuario esta emulando a aplicação
 */
