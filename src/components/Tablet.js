import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

export default class Tablet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Показатель", "мг/л"],
      tableData: [
        ["Ca", "80"],
        ["Mg", "20"],
        ["K", "20"],
        ["гидрокарбонаты", "<250"],
        ["хлориды", "<150"],
        ["сульфаты", "<50"],
        ["жёсткость", "<6"],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});
