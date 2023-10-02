import React from "react";
import { styles } from "../styles";
import { View, Alert } from "react-native";
import { PricingCard } from "react-native-element";

const PriceCard = () => {
  const press = () => {
    Alert.alert("Successful Purchase", "You have purchased this package");
  };
  return (
    <View style={styles.container2}>
      <PricingCard
        color="green"
        title="Free"
        price="$0"
        info={["1 User", "Basic Support", "All core feature"]}
        button={{ title: "Buy", icon: "flight-takeoff" }}
        onButtonPress={press}
      />
      <PricingCard
        color="blue"
        title="Premium"
        price="$100"
        info={["10 Users", "Premium Support", "All Premium Features"]}
        button={{ title: "Buy", icon: "flight-takeoff" }}
        onButtonPress={press}
      />
    </View>
  );
};

export default PriceCard;
