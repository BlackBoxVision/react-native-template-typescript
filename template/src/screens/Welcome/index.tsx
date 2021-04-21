import React from 'react';
import { ActivityIndicator, Button, FlatList, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuth } from '../../contexts/Auth';
import Touchable from '../../components/Touchable/index';
import Typography from '../../components/Typography';
import { useWelcome } from './hook';
import { styles } from './styles';

const Welcome = () => {
  const { signOut } = useAuth();
  const { isLoading, reminders } = useWelcome();

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Typography type="h1">Welcome</Typography>
      <FlatList
        data={reminders}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <Touchable>
            <Surface style={styles.reminder}>
              <Typography type="h3">{item.text}</Typography>
            </Surface>
          </Touchable>
        )}
      />
      <Button title="Sign out" onPress={signOut} />
    </SafeAreaView>
  );
};

Welcome.displayName = 'Welcome';

export default Welcome;
