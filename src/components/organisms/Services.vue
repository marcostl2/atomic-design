<template>
  <div class="services">
    <Service
      title="Front end"
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus dicta eligendi harum, fugiat minus molestiae soluta perspiciatis sit corrupti modi? Enim laborum, aspernatur neque consectetur quas temporibus debitis quibusdam asperiores?"
    />
    <Service
      title="Back end"
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus dicta eligendi harum, fugiat minus molestiae soluta perspiciatis sit corrupti modi? Enim laborum, aspernatur neque consectetur quas temporibus debitis quibusdam asperiores?"
    />
    <Service
      title="Manutenção"
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus dicta eligendi harum, fugiat minus molestiae soluta perspiciatis sit corrupti modi? Enim laborum, aspernatur neque consectetur quas temporibus debitis quibusdam asperiores?"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Service } from "@/components/molecules";

export default defineComponent({
  components: { Service }
});
</script>

<style lang="scss" scoped>
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
}

@media screen and(max-width:600px) {
  .services {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and(max-width:420px) {
  .services {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }
}
</style>
