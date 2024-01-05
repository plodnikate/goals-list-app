import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = ({ visible, onAddGoal, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              style
              title="Add goal"
              onPress={addGoalHandler}
              color={"#183d44"}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color={"#183d44"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    backgroundColor: "#91b2b7",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    color: "#183d44",
    width: "100%",
    marginRight: 9,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
