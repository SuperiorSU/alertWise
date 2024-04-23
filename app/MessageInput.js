import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';
import Modal from "react-native-modal";

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeHandler = (text) => {
    setMessage(text);
  };

  const sendMessage = async () => {
    try {
      const response = await axios.post('http://192.168.138.173:5000/predict', { message });
      const result = await response.data.prediction;
      setPrediction(result);
      if (result === "spam") {
        setIsModalVisible(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View>
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 18 }}>Alert! It's a Spam Message</Text>
          <Button title="Hide modal" onPress={handleModal} />
        </View>
      </Modal>
      
      <TextInput
        value={message}
        placeholder="Type your message here"
        onChangeText={changeHandler}
      />
      <Button
        title="Predict"
        onPress={sendMessage}
      />
      
      {prediction !== null && (
        <Text>
          Prediction: {prediction === 'spam' ? 'Spam' : 'Ham'}
        </Text>
      )}
    </View>
  );
};

export default MessageInput;
