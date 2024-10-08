import { ScrollView } from "react-native";
import Home from "./Home";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <ScrollView className="flex-1">
        <Home />
      </ScrollView>
    </GestureHandlerRootView>
  );
}
