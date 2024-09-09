import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { useSession } from "./ctx";

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
                <Button title="Login" onPress={() => {signIn()}} />
            </View>
        </>
    );
}