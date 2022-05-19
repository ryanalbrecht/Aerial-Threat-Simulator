<template>
  <q-layout view="hHh lpR fFf">

    <q-btn-group outline class="absolute q-ma-sm" style="right: 0;z-index: 1000;">
      <q-btn outline size="sm" color="grey" label="Start" />
      <q-btn
        outline
        size="sm"
        color="grey"
        label="Settings"
        :to="{name:'settings'}"
        v-if="$route.name != 'settings'"
      />
      <q-btn
        outline
        size="sm"
        color="grey"
        label="Home"
        :to="{name:'home'}"
        v-if="$route.name != 'home'"
      />
    </q-btn-group>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<script>
import { defineComponent } from 'vue';
import { useAppStore } from '../stores/app';

export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup() {
    const store = useAppStore();

    return {
      store,
    };
  },
});
</script>
