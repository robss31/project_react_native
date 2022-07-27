//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking } from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/robss31?v=4';

const urlToMyGithub = 'https://github.com/robss31';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        console.log('Link aprovado');
        console.log('Abrindo Link....');
        if (res) {
            await Linking.canOpenURL(urlToMyGithub);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image
                    accessibilityLabel=" Robson Soares "
                    style={style.avatar}
                    source={{uri: imageProfileGithub }}
                />
                <Text accessibilityLabel="Nome: Robson Soares "
                      style={[style.defaultText, style.name]}>Robson Soares
                </Text>

                <Text accessibilityLabel="Nicknam: Robson Soares"
                    style={[style.defaultText, style.nickname]}>robss31
                </Text>

                <Text accessibilityLabel="Nome: Robson Soares "
                    style={[style.defaultText, style.description]}>@robss3
                </Text>
                
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            Open in Github
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView >
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        //column
        flex: 1, //Expandir para a tela inteira
        backgroundColor: colorGithub,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,

    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'red',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        color: colorDarkFontGithub,
        fontSize: 22,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },

});
