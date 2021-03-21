<template>
  <span class="material-icons menu" @click="handleMobileMenu">menu</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import handleMobileMenu from "@/components/bosons/HandleMenu";

export default defineComponent({
  methods: {
    handleMobileMenu() {
      handleMobileMenu();
    }
  }
});
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  font-size: 32px;
  padding: 4px;
  cursor: pointer;
  display: block;

  &::after {
    content: "";
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    display: block;
    transition: all 0.5s;
    background-color: #9ea1a7;
  }
  &:hover::after {
    opacity: 0.2;
  }
}

@media screen and(min-width:980px) {
  .menu {
    display: none;
  }
}
</style>
