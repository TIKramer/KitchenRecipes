import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  IconButton,
  useTheme,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const SearchBar = ({ term, onTermChange, onTermSubmit, searchBarRef} : {
  term: string,
  onTermChange(value: string): void,
  onTermSubmit(): void,
  searchBarRef: React.RefObject<TextInput>
}) => {
  const theme = useTheme();

  return (
    <View style={styles.backgroundStyle}>
      <View style={styles.searchInputRoot}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
          ref={searchBarRef}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="Search"
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
        />
        <IconButton
          borderless
          rippleColor="transparent"
          onPress={() => onTermChange('')}
          color={theme.colors.mediumGrey}
          icon={({ size, color }) => (
            <MaterialCommunityIcons name="close" color={color} size={size} />
          )}
          disabled={!term}
          style={styles.inputIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 30,
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  searchInputRoot: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

    marginRight: 0,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 20,
    alignSelf: "center",
    marginHorizontal: 10,
  },
  inputIcon: {
    height: 26,
    width: 26,
    color: "#F0EEEE",
    marginHorizontal: 4,
  },
});

export default SearchBar;
