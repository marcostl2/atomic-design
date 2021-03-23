<template>
  <div class="presentation">
    <PresentationImg />
    <SocialNetworks />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SocialNetworks } from "@/components/molecules";
import { PresentationImg } from "@/components/atoms";

export default defineComponent({
  components: { SocialNetworks, PresentationImg }
});
</script>

<style lang="scss" scoped>
.presentation {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;

  .social-networks {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}

@media screen and(max-width:980px) {
  .presentation {
    // grid-template-columns: auto;
    flex-direction: column;
    justify-content: space-around;

    .social-networks {
      position: relative;
      // grid-row: 3;
    }
  }
}
</style>
