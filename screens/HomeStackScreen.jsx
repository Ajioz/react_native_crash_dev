import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Alert } from "react-native";
import { Button, Input } from "react-native-elements";
import { styles } from "../styles";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const HomeStackScreen = () => {

  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    if (email != "" && password != "") {
      navigation.navigate("ProductCategory", {
        name, email, age
      });
    } else {
      Alert.alert("Error ", "Details are required");
    }
  };

  return (
    <View style={styles.container3}>
      <Input
        placeholder="Enter your Name"
        onChangeText={(txt) => setName(txt)}
        value={name}
      />
      <Input
        placeholder="Enter email"
        value={email}
        type="email"
        onChangeText={(txt) => setEmail(txt)}
        leftIcon={<AntDesign name="mail" size={24} color={"black"} />}
      />
      <Input
        placeholder="Enter your Age"
        type="numeric"
        onChangeText={(txt) => setAge(txt)}
        value={age}
      />
      <Input
        placeholder="Password"
        type="password"
        secureTextEntry
        value={password}
        onChangeText={(txt) => setPassword(txt)}
        leftIcon={
          <MaterialCommunityIcons
            name="onepassword"
            size={24}
            color={"black"}
          />
        }
        onSubmitEditing={() => console.log(email, password)}
      />

      <Button title="Register" onPress={register} />
    </View>
  );
};

export default HomeStackScreen;
