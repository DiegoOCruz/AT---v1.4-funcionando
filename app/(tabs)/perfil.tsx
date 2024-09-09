import { Redirect, router } from "expo-router";
import { View } from "react-native";
import { useSession } from "../ctx";
import { Text } from "react-native-paper";

export default function PerfilScreen(){
    
    return(
        <>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Perfil Screen</Text>
              

            </View>
        </>
    );
}