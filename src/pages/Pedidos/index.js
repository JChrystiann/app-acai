import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import logoImg from "../../assets/logo.png";
import styles from "./styles";
import api from "../../services/api";

export default function Pedidos() {
  const navigation = useNavigation();

  const [pedidos, setPedidos] = useState();

  async function carregarPedidos() {
    const response = await api.get("/pedidos");
    setPedidos(response.data);
    console.log(response);
  }

  function navigateToDetail() {
    navigation.navigate("Detail");
  }

  useEffect(() => {
    carregarPedidos();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de Pedidos: <Text style={styles.headerTextBold}>0 Pedidos</Text>
        </Text>
      </View>

      <Text style={styles.title}> Lista de Pedidos!</Text>
      <Text style={styles.descricao}>Abaixo todos os pedidos em Aberto:</Text>

      <FlatList
        style={styles.incidentList}
        data={pedidos}
        keyExtractor={pedido => String(pedido.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item:pedido}) => (
          <View style={styles.incident}>
            <View style={styles.colunasObjetoTitulo}>
              <Text style={styles.incidentProperty}>
                Pedido N: <Text style={styles.incidentValue}>{pedido.id}</Text>
                <Text style={styles.incidentProperty}> Mesa: </Text>
                <Text style={styles.incidentValue}>1</Text>
              </Text>
            </View>

            <View style={styles.colunasObjeto}>
              <Text style={styles.incidentProperty}>
                Cliente:
                <Text style={styles.incidentValue}> {pedido.cliente}</Text>
              </Text>
            </View>

            <Text style={styles.incidentProperty}>
              Valor do Pedido:
              <Text style={styles.incidentValue}> {pedido.totalPed}</Text>
            </Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailsButtonText}>
                Ver mais Detalhes do Pedido:
              </Text>
              <Feather name="arrow-right" size={18} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
