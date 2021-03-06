// Importing Libraries from React and React Native
import * as React from "react";
import { Text, StyleSheet, View, ScrollView, Linking } from "react-native";

// Using an open source Node package, "react native paper".
import {
  Card,
  Provider,
  Button,
  Appbar,
  Title,
  Paragraph,
} from "react-native-paper";

const MyComponent = () => {
  // Simple arrow functions
  const _goBack = () => alert("Went Back");

  const _handleMore = () => alert("Shown more");

  return (
    // The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.
    <Provider>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content
          title="Our Application"
          subtitle="By Aayushi, Hridyesh and Kavya"
        />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <ScrollView>
        <Card style={styles.cardbox}>
          <Card.Cover
            source={{
              uri: "https://avatars.githubusercontent.com/u/68463809?v=4",
            }}
          />
          <Card.Actions>
            <Card.Title title="Aayushi Verma" subtitle="Front End Developer" />
          </Card.Actions>
        </Card>
        <Card style={styles.cardbox}>
          <Card.Cover
            source={{
              uri: "https://avatars.githubusercontent.com/u/41201308?v=4",
            }}
          />
          <Card.Actions>
            <Card.Title
              title="Hridyesh Singh Bisht"
              subtitle="Full Stack Developer"
            />
          </Card.Actions>
        </Card>
        <Card style={styles.cardbox}>
          <Card.Cover
            source={{
              uri: "https://avatars.githubusercontent.com/u/59604782?v=4",
            }}
          />
          <Card.Actions>
            <Card.Title title="Kavya Suthar" subtitle="Data Analysis" />
          </Card.Actions>
        </Card>
        <Button
          icon="android"
          mode="outlined"
          onPress={() =>
            Linking.openURL("https://github.com/kakabisht/React_native_demo")
          }
          style={styles.btn}
        >
          Press me to get source code
        </Button>
      </ScrollView>
    </Provider>
  );
};

// Giving CSS styling to our components
const styles = StyleSheet.create({
  image: {
    width: 345,
  },
  cardbox: {
    margin: 10,
    backgroundColor: "#ebd4ff",
  },
  btn: {
    marginLeft: 50,
    marginRight: 50,
  },
  paragraph: {
    alignContent: "center",
    marginLeft: 10,
  },
});
export default MyComponent;
