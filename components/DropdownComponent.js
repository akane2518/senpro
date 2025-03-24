import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Ionicons } from "@expo/vector-icons";

const data = [
  { label: "Dakar", value: "Dakar" },
  { label: "Thies", value: "Thies" },
  { label: "St-Louis", value: "St-Louis" },
  { label: "Louga", value: "Louga" },
  { label: "Kaolack", value: "Kaolack" },
  { label: "Tambacounda", value: "Tambacounda" },
  { label: "Ziguinchor", value: "Ziguinchor" },
  { label: "Banjul", value: "Banjul" },
  { label: "Bamako", value: "Bamako" },
  { label: "Abidjan", value: "Abidjan" },
];

const DropdownComponent = ({ onSelect }) => {
  //  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Filter by location"
      searchPlaceholder="Search..."
      // value={value}
      onChange={(item) => {
        onSelect(item.value);
      }}
      renderLeftIcon={() => (
        <Ionicons
          name="location-outline"
          size={24}
          color="black"
          style={styles.icon}
        />
      )}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
