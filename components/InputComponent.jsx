import React, { useState } from "react";
import { styles } from "../styles";
import { View } from "react-native";
import { Input,  Button } from "react-native-element";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const InputComponent = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={styles.container2}>
      <Input
        placeholder="Email"
        type="email"
        onChangeText={(txt) => setEmail(txt)}
        value={email}
        leftIcon={<AntDesign name="mail" size={24} color={"black"} />}
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
      <Button
        title="Login"
        type="outline"
        onPress={() => console.log(email, password)}
      />
    </View>
  );
};

export default InputComponent;
