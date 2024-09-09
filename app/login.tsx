import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { router } from "expo-router";
import { View } from "react-native";
import { useSession } from "./ctx";
import { Button, Text } from "react-native-paper";

export default function LoginScreen(){
    const { signIn } = useSession();
    return(
        <>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Tela Login</Text>
                <Button mode="contained" onPress={() => {signIn()}}>Login</Button>
                
            </View>
        </>
    );
}