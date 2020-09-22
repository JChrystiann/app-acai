import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logoImg from "../../assets/logo.png";
import styles from "./styles";


export default function Detail() {
  const navigation = useNavigation();
  function navigationBack(){
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigationBack}>
          <Feather name="arrow-left" size={30} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <View style={styles.colunasObjetoTitulo}>
          <Text style={styles.incidentProperty}>
            Pedido N: <Text style={styles.incidentValue}>1</Text>
            <Text style={styles.incidentProperty}> Mesa: </Text>
            <Text style={styles.incidentValue}>1</Text>
          </Text>
        </View>

        <View style={styles.colunasObjeto}>
          <Text style={styles.incidentProperty}>
            Cliente:
            <Text style={styles.incidentValue}> Nome Cliente</Text>
          </Text>
        </View>

        <Text style={styles.incidentProperty}>
          Valor do Pedido:
          <Text style={styles.incidentValue}> R$ 0,00</Text>
        </Text>
      </View>
      <Text style={styles.title}> Descrição do Pedido:</Text>

      <View style={styles.statusBox}>
      <Text style={styles.title}> Definir Status do Pedido:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={[styles.action, {backgroundColor:'#9F9823'}]} onPress={() => {}}>
            <Text style={styles.actionText}>Alterar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.action, {backgroundColor:'#69072E'}]} onPress={() => {}}>
            <Text style={styles.actionText}>Cancelar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actions } >
          <TouchableOpacity style={[styles.action, {backgroundColor:'#090769'}]} onPress={() => {}}>
            <Text style={styles.actionText}>Preparar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.action, {backgroundColor:'#45185B'}]} onPress={() => {}}>
            <Text style={styles.actionText}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
