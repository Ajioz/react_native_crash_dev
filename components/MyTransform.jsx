import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles";

const MyTransform = () => {
  return (
    <View style={styles.container2}>
      <ScrollView style={styles.scrollContentContainer}>
        <View style={styles.box}>
          <Text style={styles.textView2}>Original Object</Text>
        </View>

        <View style={[styles.box, { transform: [{ scale: 2 }] }]}>
          <Text style={styles.textView2}>Scale by 2</Text>
        </View>

        <View style={[styles.box, { transform: [{ scaleX: 2 }] }]}>
          <Text style={styles.textView2}>ScaleX by 2</Text>
        </View>

        <View style={[styles.box, { transform: [{ scaleY: 2 }] }]}>
          <Text style={styles.textView2}>ScaleY by 2</Text>
        </View>

        <View style={[styles.box, { transform: [{ rotate: "45deg" }] }]}>
          <Text style={styles.textView2}>Rotate by 45 deg</Text>
        </View>

        <View
          style={[
            styles.box,
            { transform: [{ rotateX: "45deg" }, { rotateZ: "45deg" }] },
          ]}
        >
          <Text style={styles.textView2}>Rotate x and z by 45 deg</Text>
        </View>

        <View
          style={[
            styles.box,
            { transform: [{ rotateX: "45deg" }, { rotateY: "45deg" }] },
          ]}
        >
          <Text style={styles.textView2}>Rotate x and y by 45 deg</Text>
        </View>

        <View style={[styles.box, { transform: [{ skewX: "45deg" }] }]}>
          <Text style={styles.textView2}>SkewX by 45 deg</Text>
        </View>

        <View style={[styles.box, { transform: [{ skewY: "45deg" }] }]}>
          <Text style={styles.textView2}>SkewY by 45 deg</Text>
        </View>

        <View style={[styles.box, { transform: [{ translateX: -50 }] }]}>
          <Text style={styles.textView2}>TranslateX by -50</Text>
        </View>

        <View style={[styles.box, { transform: [{ translateY: 50 }] }]}>
          <Text style={styles.textView2}>TranslateY by 50</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyTransform;
