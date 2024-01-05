import { Text, View, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ item: { id, text }, onDeleteGoal }) => {
  return (
    <Pressable
      onPress={onDeleteGoal.bind(this, id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "rgb(53,115,126)",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
  },
});
