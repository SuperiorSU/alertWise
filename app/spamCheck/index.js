import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import MessageInput from '../MessageInput';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View style={styles.container}>
      <MessageInput />
      <View className="pt-3 pb-2"></View>
      <Link href="">
        <View className="bg-red-500 p-3">
          <Text className="text-white font-semibold">Go to Home Screen</Text>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default index