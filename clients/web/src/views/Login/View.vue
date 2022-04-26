<template lang="pug">
Page(xAlign='center' yAlign='center' gap='40px')
  //- Logo(size='m')
  Block(padding='40px' gap='40px' width='400px')
    h2 {{ isLoginForm ? "Login" : "Sing Up" }}
    Alert(v-if='error' mode='error' width='100%') {{ error }}
    flex(width='100%' col gap='10px')
      transition(name='slide-fade')
        Input(
          v-if='!isLoginForm'
          v-model='inputs.name.value'
          placeholder='User name'
          @blur='blur("name")'
          @update:modelValue='input("name")'
          :error='inputs.name.error'
        )
      Input(
        v-model='inputs.email.value'
        placeholder='Email' 
        @blur='blur("email")'
        @update:modelValue='input("email")'
        :error='inputs.email.error'
      )
      Input(
        :type='passwordVisible ? "text" : "password"'
        v-model='inputs.password.value'
        placeholder='Password'
        @blur='blur("password")'
        @update:modelValue='input("password")'
        :error='inputs.password.error')
        Icon(:icon='passwordVisible ? "eye" : "eye_splash"' pointer @click='passwordVisible = !passwordVisible')
    flex(width='100%' xAlign='space-between')
      Button(@click='isLoginForm = !isLoginForm') {{ isLoginForm ? "Sign Up" : "Log In"}}
      transition(name='slide-fade')
        Button(
          v-if='formValidity'
          icon='right'
          active @click='send'
          :load='load')  {{ isLoginForm ? "Sign In" : "Create account"}}

</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";
import Page from "@/components/templates/Page.vue";
import Block from "@/components/templates/Block.vue";
import Logo from "@/components/widgets/Logo.vue";
import Icon from "@/components/widgets/Icon.vue";
import Input from "@/components/ui/Input.vue";
import Button from "@/components/ui/Button.vue";
import Alert from "@/components/ui/Alert.vue";

type InputsName = "email" | "password" | "name";
type Inputs = {
  [key in InputsName]: {
    value: string;
    regexp: RegExp;
    touched: boolean;
    error: string;
  };
};

export default defineComponent({
  name: "Login",
  components: {
    Page,
    Block,
    Logo,
    Icon,
    Input,
    Button,
    Alert,
  },
  setup() {
    const state = reactive({
      inputs: {
        name: {
          value: "",
          touched: false,
          error: "",
        },
        email: {
          value: "",
          regexp:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          touched: false,
          error: "",
        },
        password: {
          value: "",
          regexp:
            /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
          touched: false,
          error: "",
        },
      } as Inputs,
      passwordVisible: false,
      isLoginForm: true,
      load: false,
      error: "",
    });

    const blur = (name: InputsName) => {
      state.inputs[name].touched = true;
      input(name);
    };

    const input = (name: InputsName) => {
      if (state.inputs[name].touched) {
        switch (name) {
          case "email":
            state.inputs.email.error = checkEmail.value ? "" : "invalid email.";
            break;
          case "password":
            state.inputs.password.error = checkPassword.value ? "" : "A-z 0-9";
            break;
          case "name":
            state.inputs.name.error = "test";
            break;

          default:
            break;
        }
      }
    };

    const checkName = computed(() => {
      return true;
    });
    const checkEmail = computed(() => {
      return (
        state.inputs.email.regexp.test(state.inputs.email.value) &&
        state.inputs.email.touched &&
        state.inputs.email.value
      );
    });
    const checkPassword = computed(() => {
      return (
        state.inputs.password.regexp.test(state.inputs.password.value) &&
        state.inputs.password.touched &&
        state.inputs.password.value
      );
    });

    const formValidity = computed(() => {
      if (state.isLoginForm) {
        return checkEmail.value && checkPassword.value;
      }
      return checkEmail.value && checkPassword.value && checkName.value;
    });

    const login = () => {
      console.log("login");
    };
    const signup = () => {
      console.log("sign up");
    };

    const send = () => {
      state.load = true;
      if (state.isLoginForm) {
        login();
      } else {
        signup();
      }
    };

    return {
      ...toRefs(state),
      checkName,
      checkEmail,
      checkPassword,
      formValidity,
      blur,
      input,
      send,
      login,
      signup,
    };
  },
});
</script>
<style lang="less"></style>
