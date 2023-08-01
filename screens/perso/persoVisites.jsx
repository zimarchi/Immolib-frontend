import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function PersoVisites() {
  const visitesPerso = [
    {
      nom: "Appartement 3 pièces",
      adresse: "77 rue victor hugo, 75000 Paris",
      date: "21/09/2023",
      statut : "en attente de validation"
    },
    {
      nom: "Maison 160m²",
      adresse: "77 rue victor hugo, 75000 Paris",
      date: "24/12/2023",
      statut : "en attente de validation"
    },
    {
      nom: "studio 20 m²",
      adresse: "77 rue victor hugo, 75000 Paris",
      date: "11/01/2024",
      statut : "confirmées"
    },
    {
      nom: "Villa 220 m²",
      adresse: "77 rue victor hugo, 75000 Paris",
      date: "21/09/2023",
      statut : "en attente de validation"
    },
    {
      nom: "Chateau ",
      adresse: "77 rue victor hugo, 75000 Paris",
      date: "21/05/2023",
      statut : "passées"
    },
  ];

  const visitesCards = visitesPerso.map(data => { 
    let visiteEnAttente
      if (data.statut === 'en attente de validation') {
      return (
        <View style={styles.clientsCard}>
          <View style={styles.clientsCardOrientation}>
            <View style={styles.leftCardOrientation}>
              <TouchableOpacity style={styles.cardIcon}>
                <FontAwesome style={styles.iconClient} name='user' size={40} color='#1F2937' />
              </TouchableOpacity>
            </View>
            <View style={styles.centerCardOrientation}>
              <Text style={styles.titleCard}>{data.nom} {data.prénom} </Text>
              <Text style={styles.subCard}>{nextvisite}</Text>
            </View>
            <View style={styles.rigthCardOrientation}>
              <TouchableOpacity style={styles.cardIcon}>
                <FontAwesome style={styles.iconPhone} name='phone' size={40} color='#1F2937' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Text> Pas de visite en attente de validation</Text>
        </View>
      )
    }}
  );

  return (
    <View style={styles.container}>
      {/* Use LinearGradient as the container's background */}
      <LinearGradient
        colors={["#BCCDB6", "#46AFA5"]} // Set your desired gradient colors
        start={{ x: 0, y: 0 }} // Start point of the gradient
        end={{ x: 1, y: 1 }} // End point of the gradient
        style={styles.container}
      >
        <Text style={styles.title}>Mon Dossier</Text>
        <View style={styles.pageContainer}>
          <View style={styles.pageNumberActive}>
            <Text>En attente</Text>
          </View>
          <View style={styles.pageNumber}>
            <Text>Confirmées</Text>
          </View>
          <View style={styles.pageNumber}>
            <Text>Passées</Text>
          </View>
        </View>
        
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  pageContainer: {
    flexDirection: "row",
    borderColor: "#47AFA5",
    borderWidth: 2,
    borderRadius: 15,
    width: "90%",
    height: "8%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },

  pageNumberActive: {
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: "80%",
    backgroundColor: "#47AFA5",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    marginLeft: 3,
  },
  pageNumber: {
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: "80%",
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 3,
  },
  title: {
    fontFamily: "Nunito",
    color: "white",
    fontSize: 40,
    fontStyle: "normal",
    fontWeight: "600",
    marginTop: "10%",
  },

  clientsCard :{
    justifyContent : 'center',
    alignItems : 'center',
    height : 100,
    width : '90%',
    borderRadius: 40,
    backgroundColor:'#BCCDB6',
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11.95,
      elevation: 18,
      margin: 10,
  
  },
  clientsCardOrientation:{
    width : '100%',
    height : '90%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
})
