import React from 'react';
import { Button, Image, View } from 'react-native';

import { useAuth } from '../../contexts/Auth';
import Typography from '../../components/Typography';
import Touchable from '../../components/Touchable';
import { styles } from './styles';

const Login = () => {
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Touchable>
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={styles.image}
        />
      </Touchable>
      <Typography type="h1">React Native App</Typography>
      <Button title="Sign in" onPress={signIn} />
    </View>
  );
};

Login.displayName = 'Login';

export default Login;
