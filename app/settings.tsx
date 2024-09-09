import { useTheme } from "../hooks/useTheme";
import { router } from "expo-router";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function SettingsScreen() {
  const { toggleTheme, colorScheme } = useTheme();
  const tema = colorScheme;
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Settings Screen</Text>

        <Button
          mode="contained"
          onPress={() => {
            // This is how you can redirect to a different route
            router.push("/(tabs)");
          }}
        >
          Home
        </Button>

        <Button icon="repeat" mode="outlined" onPress={toggleTheme}>
        {colorScheme === "light" ? "Dark" : "Light"} Theme
      </Button>
      </View>
    </>
  );
}
