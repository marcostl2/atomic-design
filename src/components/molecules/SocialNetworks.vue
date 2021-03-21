<template>
  <div class="social-networks">
    <SocialLink
      name="Github"
      to="https://github.com/marcostl2"
      icon="github.svg"
    />
    <SocialLink
      name="LinkedIn"
      to="https://www.linkedin.com/in/marcos006/"
      icon="linkedin.svg"
    />
    <SocialLink
      name="Facebook"
      to="https://www.facebook.com/profile.php?id=100005003911260"
      icon="facebook.svg"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SocialLink } from "@/components/atoms";

export default defineComponent({
  components: {
    SocialLink
  }
});
</script>

<style lang="scss" scoped>
.social-networks {
  display: grid;
  grid-gap: 1rem;
}

@media screen and(max-width:980px) {
  .social-networks {
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-content: center;
  }
}
@media screen and(max-width:420px) {
  .social-networks {
    padding: 32px 0;
  }
}
</style>
