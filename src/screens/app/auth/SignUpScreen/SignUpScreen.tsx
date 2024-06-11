import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';


import { PasswordInput } from '../../../../components/PasswordInput/PasswordInput';
import { Screen } from '../../../../components/Screen/Screen';
import { Text } from '../../../../components/Text/Text';
import { TextInput } from '../../../../components/TextInput/TextInput';
import { RootStackParamList } from '../../../../routes/Routes';
import { Button } from '../../../../components/Button/button';
import { useResetNavigationSuccess } from '../../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({ navigation }: ScreenProps) {
  const { reset } = useResetNavigationSuccess();

  function submitForm() {
    // TODO: implementar
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    })
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput label="Seu username" placeholder="@" boxProps={{ mb: 's20' }} />
      <TextInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: 's20' }}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <PasswordInput
        label="Senha"
        secureTextEntry
        placeholder="Digite sua senha"
        boxProps={{ mb: 's48' }}
      />

      <Button onPress={submitForm} title="Criar uma conta" />
    </Screen>
  );
}