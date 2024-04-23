import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';
import Modal from "react-native-modal";

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false)
  const changeHandler = (text) => {
    setMessage(text);
  }
  let isSpam = 0;
  const sendMessage = async () => {
   
    try {
      const response = await axios.post('http://192.168.0.115:5000/predict', { message });
      const result = await response.data.prediction;
      setPrediction(result);
      console.log(prediction)
      if(prediction==='spam'){
        isSpam = 1;
        setIsModalVisible(true)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleModal = () => {
    setIsModalVisible(false);
  }

  return (
    <View>
      
      {
        isSpam?(<Modal isVisible={isModalVisible}>
      <View style={{ flex: 1 }}>
          <Text className="text-red-700 font-bold text-[18px]">Alert! Its a Spam Message</Text>
          <Button title="Hide modal" onPress={handleModal} />
        </View>
      </Modal>):(
        <></>
      )
      }
      
      <TextInput
      name="message"
      value={message}
        placeholder="Type your message here"
        className="flex-wrap flex"
       
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
