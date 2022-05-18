<template>
  <q-layout view="hHh lpR fFf">

    <q-btn-group outline class="absolute q-ma-sm" style="right: 0">
      <q-btn outline size="sm" color="grey" label="Run" />
      <q-btn outline size="sm" color="grey" label="Reset" />
      <q-btn outline size="sm" color="grey" label="Settings" />
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
