import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles";







// import SocialIcons from "../components/SocialIcons";
// import Cards from "../components/Cards";
// import Overlay from "../components/Overlay";
// import PriceCard from "../components/PriceCard";
// import FaB from "../components/FaB";
// import ButtonComponent from "../components/ButtonComponent";
// import InputComponent from "../components/InputComponent";
// import MyPrompt from "../components/MyPrompt";
// import VibrationFeedback from "../components/VibrationFeedback";
// import NativeElement from "../components/NativeElement";
// import SliderAction from "../components/SliderAction";
// import NativeColor from "../components/NativeColor";
// import BackButton from "../components/BackButton";
// import Animate from "../components/Animate";
// import InputProps from "../components/InputProps";
// import FruitScreen from "./FruitScreen";
// import GetUserDetails from "../components/GetUserDetails";
// import MyPressable from '../components/MyPressable';
// import MyRefreshControl from '../components/MyRefreshControl';
// import MemberScreen from './MemberScreen';
// import DiceScreen from './DiceScreen';
// import KeyboardDismiss from './KeyboardDismiss';
// import FlexScreen from './FlexScreen';
// import ModalScreen from './ModalScreen';





const Home = () => {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.home}>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.button} onPress={() => setIndex(1)}>
          <Text style={styles.btnText}>Staff</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setIndex(2)}>
          <Text style={styles.btnText}>Fruits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setIndex(3)}>
          <Text style={styles.btnText}>Dice</Text>
        </TouchableOpacity>
      </View>



      {/* <Cards /> */}
      {/* <SocialIcons /> */}
      {/* <FaB /> */}
      {/* <PriceCard /> */}
      {/* <Overlay /> */}
      {/* <InputComponent /> */}
      {/* <ButtonComponent /> */}
      {/* <SliderAction /> */}
      {/* <NativeElement /> */}
      {/* <VibrationFeedback /> */}
      {/* <MyPrompt /> */}
      {/* <BackButton /> */}
      {/* <NativeColor /> */}
      {/* <Animate /> */}
      {/* <GetUserDetails /> */}
      {/* <InputProps /> */}
      {/* <MyRefreshControl /> */}
      {/* <MyPressable /> */}
      {/* <MemberScreen /> */}
      {/* <FruitScreen />  */}
      {/* <DiceScreen />  */}
      {/* <KeyboardDismiss /> */}
      {/* <FlexScreen /> */}
      {/* <ModalScreen /> */}
      {
        // index === 1 ? (
        //     <MemberScreen />
        // ) : index == 2 ? (
        //     <FruitScreen />
        // ) : ( <DiceScreen /> )
      }
    </View>
  );
};

export default Home;