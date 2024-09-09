import { Redirect, router } from "expo-router";
import {  View } from "react-native";
import { useSession } from "../ctx";
import { Button, Text } from "react-native-paper";

export default function HomeScreen(){
    const { signOut } = useSession();
    return(
        <>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text >Home Screen</Text>
                <Button mode="contained" onPress={() => {signOut()}} >Sair</Button>
                
                
                <Button mode="contained" onPress={() => {router.push('/settings')}}>Configuraçoes</Button>

            </View>
        </>
    );
}