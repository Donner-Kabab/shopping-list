import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShoppingLists from "./components/ShoppingLists";

const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDrexCp7l48vuLjMdffZQOy-4rAhWKphaM",
    authDomain: "chat-19011.firebaseapp.com",
    projectId: "chat-19011",
    storageBucket: "chat-19011.appspot.com",
    messagingSenderId: "49552325055",
    appId: "1:49552325055:web:365b4cafa8052ab003c90a",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="ShoppingLists">
          {(props) => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
