<template lang="pug">
Page(xAlign='center' yAlign='center' :col='false' gap='200px')
  Logo(size='m' text)
  Block(padding='20px' gap='20px' width='400px')
    h3 {{ isLoginForm ? "Login" : "Sing Up" }}
    flex(width='100%' col gap='10px')
      transition(name='slide-fade')
        Input(
          v-if='!isLoginForm'
          v-model='form.name'
          placeholder='User name'
        )
      Input(
        v-model='form.email'
        placeholder='Email' 
        @blur='blur("email")'
        @update:modelValue='input("email")'
        :error='errors.email'
      )
      Input(
        :type='passwordVisible ? "text" : "password"'
        v-model='form.password'
        placeholder='Password'
        @blur='blur("password")'
        @update:modelValue='input("password")'
        :error='errors.password')
        Icon(:icon='passwordVisible ? "eye" : "eye_splash"' pointer @click='passwordVisible = !passwordVisible')
    flex(width='100%' xAlign='space-between')
      Button(@click='isLoginForm = !isLoginForm') {{ isLoginForm ? "Sign Up" : "Log In"}}
      transition(name='slide-fade')
        Button(
          v-if='formIsValid'
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

export default defineComponent({
  name: "Login",
  components: {
    Page,
    Block,
    Logo,
    Icon,
    Input,
    Button,
  },
  setup() {
    const state = reactive({
      touchedInputs: {
        name: false,
        email: false,
        password: false,
      },
      passwordVisible: false,
      isLoginForm: true,
      load: false,
      form: {
        name: "",
        email: "",
        password: "",
      } as { [key: string]: string },
      errors: {
        name: "",
        email: "",
        password: "",
      } as { [key: string]: null | string },
    });

    const validationMap = {
      email: {
        r: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        msg: "invalid email.",
      },
      password: {
        r: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
        msg: "A-z 0-9",
      },
    } as {
      [key in "email" | "password"]: { r: RegExp; msg: string };
    };

    const validation = (name: "email" | "password") => {
      const test = validationMap[name].r.test(state.form[name]);
      if (state.form[name] && !test) {
        state.errors[name] = validationMap[name].msg;
      } else {
        state.errors[name] = "";
      }
      return test;
    };

    const blur = (name: "email" | "password") => {
      state.touchedInputs[name] = true;
      validation(name);
    };

    const input = (name: "email" | "password") => {
      if (state.touchedInputs[name]) {
        validation(name);
      }
    };

    const formIsValid = computed(() => {
      if (state.isLoginForm) {
        return (
          !state.errors.email &&
          !state.errors.password &&
          state.form.email &&
          state.form.password
        );
      }
      return (
        !state.errors.email &&
        !state.errors.password &&
        state.form.email &&
        state.form.password
      );
    });

    const login = () => {
      console.log("login", state.form);
    };
    const signup = () => {
      console.log("sign up", state.form);
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
      blur,
      input,
      validation,
      formIsValid,
      send,
      login,
      signup,
    };
  },
});
</script>
<style lang="less"></style>
