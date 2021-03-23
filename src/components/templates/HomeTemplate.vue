<template>
  <Container class="home-template">
    <Header />
    <Presentation />
    <Services />
  </Container>
  <MobileMenu />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Container } from "@/components/bosons";
import {
  Header,
  Presentation,
  Services,
  MobileMenu
} from "@/components/organisms";

export default defineComponent({
  components: { Container, Header, Presentation, Services, MobileMenu }
});
</script>

<style lang="scss" scoped>
.home-template {
  margin: 5rem auto;
  max-width: 1366px;
  display: grid;
  grid-gap: 5rem;
}

@media screen and(max-width:420px) {
  .home-template {
    grid-gap: 2rem;
  }
}
</style>
