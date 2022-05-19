<template>
  <q-page class="flex flex-center">

    <div
      class="threatCircle"
      ref="threatCircle"
      :style="{
        width: store.circleMinRadius + 'px',
        height: store.circleMinRadius + 'px',
        backgroundColor: store.circleBackgroundColor
      }"
    >
    </div>

  </q-page>
</template>

<script>
import { defineComponent, watch } from 'vue';
import { useAppStore } from '../stores/app';

export default defineComponent({
  name: 'IndexPage',

  setup(){
    const store = useAppStore();

    store.$subscribe((mutation,state)=>{
      debugger
    })

    return {
      store,
    };
  },

});
</script>

<style scoped>

  .threatCircle {
    border-radius: 50%;
  }

</style>
