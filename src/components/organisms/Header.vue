<template>
  <header class="header">
    <Logo />
    <NavBar />
    <SearchForm />
    <HamburgerMenuBtn />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Logo, HamburgerMenuBtn } from "@/components/atoms";
import { NavBar, SearchForm } from "@/components/molecules";

export default defineComponent({
  components: { NavBar, SearchForm, Logo, HamburgerMenuBtn }
});
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 160px repeat(2, auto);
  align-items: center;
  justify-content: space-between;
}
@media screen and(max-width:980px) {
  .header {
    grid-template-columns: repeat(2, auto);
  }
}
</style>
