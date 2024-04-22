import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { useLoadFonts } from "./src/hooks/useLoadFonts";
import { store } from "./src/store/store";
import Navigator from "./src/navigation";
import { styles } from "./appStyles";

export default function App() {
  const [loaded] = useLoadFonts();

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.appStyle}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
