import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowBack } from "../../components/ArrowBack/ArrowBack";

import { Button } from "../../components/Button/Button";
import { CheckBox } from "../../components/CheckBox/CheckBox";

import { Icon } from "../../components/Icon/Icon";
import { Input } from "../../components/Input/Input";
import { Spacer } from "../../components/Spacer/Spacer";
import { Text } from "../../components/Text/Text";
import { height } from "../../components/Theme/Responsive";
import { NAVIGATORS } from "../../navigation/constants";
import { styles } from "./styles";
import { formHelper } from "./_helpers/form.Helper";

export const Login = () => {
  const [form, setForm] = useState(formHelper);

  const { navigate } = useNavigation();

  const [email, password] = form;

  const enabled = email.value.length > 7 && password.value.length > 4;

  const onLogin = () => {
    console.log("Login");
  };

  const onHandlerEmail = (value: string) => {
    setForm(
      form.map((input) => (input.key === "email" ? { ...input, value } : input))
    );
  };
  const onHandlerPassword = (value: string) => {
    setForm(
      form.map((input) =>
        input.key === "password" ? { ...input, value } : input
      )
    );
  };

  const onForgotPassword = () => {
    console.log("Forgot Password");
  };

  const onSignUp = () => {
    navigate(NAVIGATORS.REGISTER as never);
  };

  const onPrivacyPolicy = () => {
    console.log("Privacy Policy");
  };

  const onBackHandler = () => {
    console.log("Back");
  };

  [1, 2, 3, 4].forEach((item) => {
    console.log(item);
  });

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <ArrowBack onPress={onBackHandler} />
        <Spacer amount={height(0.2)} />
        <Icon name={"LegendaryIcon"} />
        <Spacer amount={height(0.8)} />
        <Text font='brutalBold'>Sign in with a Legendary Store Account.</Text>
        <Spacer amount={height(0.4)} />

        <Input onChangeText={onHandlerEmail} placeholder='Account Email' />
        <Spacer amount={height(0.4)} />
        <Input
          onChangeText={onHandlerPassword}
          placeholder='Password'
          secureTextEntry={true}
          maxLength={16}
        />

        <Spacer amount={height(0.4)} />
        <View style={styles.checkBoxContainer}>
          <CheckBox
            text={"Remember me"}
            onPress={() => console.log("checkbox")}
          />
          <Text onPress={onForgotPassword} font='brutalRegular' size={17}>
            Forgot Your Password
          </Text>
        </View>
        <Spacer amount={height(0.4)} />

        <Button enabled={enabled} title={"LOG IN NOW"} onPress={onLogin} />
        <Spacer amount={height(0.4)} />
        <Text
          onPress={onPrivacyPolicy}
          font='brutalRegular'
          size={17}
          textDecorationLine='underline'
        >
          Privacy Policy
        </Text>
        <Spacer amount={height(0.4)} />
        <Text font='brutalRegular' size={17}>
          Dont have a Legendary Store Account?
        </Text>
        <Spacer amount={height(0.1)} />
        <Text
          onPress={onSignUp}
          font='brutalRegular'
          size={17}
          textDecorationLine='underline'
        >
          Sign Up
        </Text>
        <Spacer amount={height(0.4)} />
        <Text
          onPress={onBackHandler}
          font='brutalRegular'
          size={17}
          textDecorationLine='underline'
        >
          Back to all sign in options.
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};
