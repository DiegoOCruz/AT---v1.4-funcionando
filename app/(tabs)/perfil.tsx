import { Redirect, router } from "expo-router";
import { Button, Text, View } from "react-native";
import { useSession } from "../ctx";

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