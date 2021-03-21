<template>
  <div class="mobile-menu">
    <span class="material-icons close" @click="handleMobileMenu">close</span>
    <SearchForm style="display:block" />
    <NavBar style="display:block" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SearchForm, NavBar } from "@/components/molecules";
import handleMobileMenu from "@/components/bosons/HandleMenu";

export default defineComponent({
  components: {
    NavBar,
    SearchForm
  },
  methods: {
    handleMobileMenu() {
      handleMobileMenu();
    }
  }
});
</script>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  left: 100%;
  transition: all 1s;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #e6e6e6;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .close {
    position: absolute;
    top: 32px;
    right: 32px;
    font-size: 32px;
    cursor: pointer;
  }

  .nav-bar {
    margin-top: 32px;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
