<template lang="pug">
Page(xAlign='center' gap='40px')
  flex.support(width='100%' padding='20px' gap='20px' yAlign='center')
    Button(size='xl') SUPPORT
    flex(col width='450px')
      h2 🙏 Support Mitter! 
      span cposkpo okpkpok wqd kopkpokqwdpo  ;lcm lkqwpodk poqwd kpwoqkdp ok qwdkpo qwkdp ok
  //- Logo(size='m' text)

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

