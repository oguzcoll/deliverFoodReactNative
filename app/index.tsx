import { Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "@/components/Categories";
import Restaurants from "@/components/Restaurants";
import Colors from "@/constants/Colors";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Categories />
        <Text style={styles.header}>Top picks in your neighbourhood</Text>
        <Restaurants />

        <Text style={styles.header}>Offers near you</Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 50,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    paddingHorizontal: 16,
    marginTop: 8,
  },
});

export default Page;
