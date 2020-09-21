import React from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Pedidos(){
    const navigation = useNavigation();


    function navigateToDetail(){
        navigation.navigate('Detail');
    }
    return(
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
                style= { styles.incidentList}
                data={[1,2,3]}
                keyExtractor={incident=>String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={()=>(
                    <View style= {styles.incident}>
                    <Text style = { styles.incidentProperty}>Mesa:</Text>
                    <Text style = { styles.incidentValue}>1</Text>

                    <Text style = { styles.incidentProperty}>Pedido: </Text>
                    <Text style = { styles.incidentValue}>1</Text>

                    <Text style = { styles.incidentProperty}>Cliente: </Text>
                    <Text style = { styles.incidentValue}>Nome do Cliente: </Text>

                    <Text style = { styles.incidentProperty}>Valor do Pedido:</Text>
                    <Text style = { styles.incidentValue}>R$ 0,00</Text>

                    <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>

                        <Text style = { styles.detailsButtonText}>Ver mais Detalhes do Pedido:</Text>
                        <Feather name= "arrow-right" size={18} color = '#E02041'/>
                    </TouchableOpacity>

                </View>
                )}
            
            />
        </View>

          
    );
}