import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { color } from 'react-native-reanimated';
 export default StyleSheet.create({
    container :{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 5,
    },

    header: {
        margin:10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
        
        
    },

    headerText: {
        fontSize: 15,
        color: '#45185B'
    },

    headerTextBold: {
        fontWeight:'bold'
    },

    title: {
        fontSize: 20,
        marginBottom:16,
        marginTop:5,
        color: '#45185B',
        textAlign:'center'
    },

    descricao:{
        fontSize: 12,
        marginBottom:5,
        marginTop:1,
        textAlign:'center'
        
    },

    incidentList:{
        marginTop:8,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom:16,
    },

    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginBottom:8,
    },

   

    incidentValue: {
        marginTop: 8,
        fontSize:15,
        marginBottom: 24,
        color: '#737380'

    },

    detailsButton:{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems:"center"
    },
    
    detailsButtonText:{
        color: '#E02041',
        fontSize: 15,
        fontWeight: "bold"
    
    },

    colunasObjetoTitulo:{
        alignItems:"center",
        flexDirection: "row",
        justifyContent: 'space-between'

    },

    colunasObjeto:{
        alignItems:"center",
        flexDirection: "row",
        

    },

    statusBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom:16,
        
    },

    actions:{
        marginTop: 16,
        flexDirection: "row",
        justifyContent: 'space-between'

    },

    action:{
        //backgroundColor:'#45185B',
        borderRadius: 8,
        height: 50,
        width: '48%' ,
        justifyContent: 'center',
        alignItems: 'center'

    },
    actionText: {
        color: '#FFF'
    }
});