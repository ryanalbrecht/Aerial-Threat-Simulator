<template>

  <h4 class="q-pa-xs">Settings</h4>

  <div class="q-pa-md row">
    <div class="q-pa-md q-gutter-y-md col-2" style="">

      <q-input
        outlined
        v-model="store.simDelayTime"
        label="Sim delay time :"
        bottom-slots
      >
        <template v-slot:hint>
          <q-icon
            size="xs"
            name="help"
          >
            <q-tooltip>
              The amount of time in seconds before the circle will appear
            </q-tooltip>
          </q-icon>
        </template>
      </q-input>

      <q-input
        outlined
        v-model="store.simMaxRandomTime"
        label="Max Random delay :"
        bottom-slots
      >
        <template v-slot:hint>
          <q-icon
            size="xs"
            name="help"
          >
            <q-tooltip>
              The maximum random amount of time added after the delay time
              for the circle to appear. Set to zero to disable random delay addition
            </q-tooltip>
          </q-icon>
        </template>
      </q-input>

      <q-input
        outlined
        v-model="store.circleMinRadius"
        label="Circle min radius :"
        bottom-slots
      >
       <template v-slot:hint>
          <q-icon
            size="xs"
            name="help"
          >
            <q-tooltip>
              The minimum radius of the circle
            </q-tooltip>
          </q-icon>
        </template>
      </q-input>

      <q-input
        outlined
        v-model="store.circleMaxRadius"
        label="Circle max radius :"
        bottom-slots
      >
        <template v-slot:hint>
          <q-icon
            size="xs"
            name="help"
          >
            <q-tooltip>
              The maximum radius of the circle
            </q-tooltip>
          </q-icon>
        </template>
      </q-input>

      <q-input
        outlined
        v-model="store.circleGrowTime"
        label="Circle grow time :"
        bottom-slots
      >
        <template v-slot:hint>
          <q-icon
            size="xs"
            name="help"
          >
            <q-tooltip>
              The speed at which the circle will grow to it's max radius. In seconds
            </q-tooltip>
          </q-icon>
        </template>
      </q-input>

      <q-input
        outlined
        v-model="store.simBackgroundColor"
        label="Simulator background color :"
        bottom-slots
      >
        <template v-slot:hint>
          <q-icon
            size="xs"
            name="help"
          >
            <q-tooltip>
              The background color of the simulator
            </q-tooltip>
          </q-icon>
        </template>

        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-color v-model="store.simBackgroundColor" />
            </q-popup-proxy>
          </q-icon>
        </template>

      </q-input>

      <q-input
        outlined
        v-model="store.circleBackgroundColor"
        label="Circle background color :"
        bottom-slots
      >
        <template v-slot:hint>
          <q-icon
            size="xs"
            name="help"
          >
            <q-tooltip>
              The background color of the circle
            </q-tooltip>
          </q-icon>
        </template>

        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-color v-model="store.circleBackgroundColor" />
            </q-popup-proxy>
          </q-icon>
        </template>

      </q-input>


    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { mapState } from 'pinia';
import { useAppStore } from '../stores/app';

export default defineComponent({
  name: 'SettingsPage',

  mounted(){
  },

  data(){

  },

  setup() {
    const store = useAppStore();

    return {
      store,
    };
  },

});
</script>

<style>

  q-input {
    margin-bottom: 10px
  }

</style>
