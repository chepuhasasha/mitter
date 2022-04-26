<template lang="pug">
Page(xAlign='center' gap='40px')
  flex.support(width='100%' padding='20px' height='max-content' gap='20px' yAlign='center')
    flex(col width='100%')
      h2 Support Mitter! 
      span cposkpo okpkpok wqd kopkpokqwdpo  ;lcm lkqwpodk poqwd kpwoqkdp ok qwdkpo qwkdp ok
    Button(size='l' hardSize) support 🙏
    Button(size='l' icon='error')
  flex(width='100%' height='100%' padding='20px' gap='20px' yAlign='center' xAlign='center' col)
    h1.home_header.home_textgrad Mitter.
    Button.home_button(size='xl' icon='right') Get started
    //- Logo(size='m')
  flex.home_card(padding='40px' gap='40px' yAlign='center' xAlign='center' col)
    h2.home_textgrad Use websockets.

</template>

<script lang="ts">
import { defineComponent } from "vue";
import Page from "@/components/templates/Page.vue";
import Block from "@/components/templates/Block.vue";
import Logo from "@/components/widgets/Logo.vue";
import Icon from "@/components/widgets/Icon.vue";
import Input from "@/components/ui/Input.vue";
import Button from "@/components/ui/Button.vue";
import Alert from "@/components/ui/Alert.vue";

export default defineComponent({
  name: "Home",
  components: {
    Page,
    Block,
    Logo,
    Icon,
    Input,
    Button,
    Alert,
  },
});
</script>
<style lang="less">
.home {
  &_card {
    background: var(--bg_200);
    border-radius: 40px;
  }
  &_button {
    background: white;
    color: black;
    border-color: white;
    path {
      fill: black;
    }
    &:hover {
      background: none;
      path {
        fill: white;
      }
    }
  }
  &_header {
    font-size: 100px;
  }
  &_textgrad {
    background: conic-gradient(
      #acd2fb -32.07deg,
      #df7ed5 9.12deg,
      #ff749b 54.78deg,
      #f6e2ff 54.91deg,
      #b5eadd 132.08deg,
      #effefa 138.42deg,
      #e6edff 166.99deg,
      #fafafa 167.69deg,
      #d4ecfe 208.13deg,
      #bce9fc 210.06deg,
      #e7bcfd 300.68deg,
      #cdf1fd 302.83deg,
      #acd2fb 327.93deg,
      #df7ed5 369.12deg
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.support {
  * {
    z-index: 1;
  }
  h2,
  span {
    color: var(--bg_100);
  }
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2000px;
    background: conic-gradient(
      #acd2fb -32.07deg,
      #df7ed5 9.12deg,
      #ff749b 54.78deg,
      #f6e2ff 54.91deg,
      #b5eadd 132.08deg,
      #effefa 138.42deg,
      #e6edff 166.99deg,
      #fafafa 167.69deg,
      #d4ecfe 208.13deg,
      #bce9fc 210.06deg,
      #e7bcfd 300.68deg,
      #cdf1fd 302.83deg,
      #acd2fb 327.93deg,
      #df7ed5 369.12deg
    );
    top: -1000px;
    left: 0;
    z-index: 0;
    animation: rotate infinite 40s linear;
  }
}
</style>

