import * as React from 'react';

import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import EmojiPicker from 'react-native-emoji-keyboard';

export default function App() {
  const [result, setResult] = React.useState<string>();
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const handlePick = (emoji: any) => {
    console.log(emoji);
    setResult(emoji.emoji);
    setIsModalOpen((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Result: {result}</Text>
      <TouchableOpacity onPress={() => setIsModalOpen(true)}>
        <Text>Open</Text>
      </TouchableOpacity>
      <EmojiPicker
        onEmojiSelected={handlePick}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    margin: 64,
    fontSize: 18,
  },
  containerStyles: {
    backgroundColor: '#efefef',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 20,
  },
});