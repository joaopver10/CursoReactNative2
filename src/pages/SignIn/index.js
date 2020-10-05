import React, { useState, useContext } from 'react'
import { View, Text, Platform } from 'react-native'
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from './styles'
import { useNavigation } from '@react-navigation/native'
import {AuthContext} from '../../contexts/auth'

export default function SignIn() {
    const navigation = useNavigation()


    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const {usuarioEntrando} = useContext(AuthContext)

    function entrar(){
        usuarioEntrando(email, senha)
    }

    return (
        <Background>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo source={require('../../assets/Logo.png')} />
                <AreaInput>
                    <Input placeholder='Email'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input placeholder='Senha'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />
                </AreaInput>

                <SubmitButton onPress={entrar}>
                    <SubmitText> Acessar </SubmitText>
                </SubmitButton>

                <Link onPress={() => navigation.navigate('Cadastro')}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>

            </Container>
        </Background>
    )
}