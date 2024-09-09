import { Redirect, router } from "expo-router";
import { Button, Text, View } from "react-native";
import { useSession } from "../ctx";

export default function HomeScreen(){
    const { signOut } = useSession();
    return(
        <>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Home Screen</Text>
                <Button title="Sair" onPress={() => {signOut()}} />

            </View>
        </>
    );
}