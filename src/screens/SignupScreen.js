import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container} >
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                label="Email"
                value={email}
                onChangeText={(newEmail) => setEmail(newEmail)}
            />
            <Spacer />
            <Input
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                label="Passwrod"
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)}
            />
            <Spacer>
                <Button title="Sign Up" />
            </Spacer>
        </View>
    )
};

SignupScreen.navigationOptions = {
    headerShow: false
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    }
});

export default SignupScreen;
