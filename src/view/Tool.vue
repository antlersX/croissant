<template>
  <div class="mx-1 flex items-center justify-center">
    <div
      class="border rounded-full px-5 my-1 mx-1 cursor-pointer"
      :class="{
        'bg-red-500 text-white': device == null,
      }"
      @click="selectDevice"
    >
      select device
    </div>
    <div
      class="border rounded-full text-xs p-1 px-2 bg-green-500 text-white"
      v-if="device != null"
    >
      {{ device?.productName + ":" + device?.productId }}
    </div>
    <div
      v-if="device != null"
      class="
        border
        rounded-full
        px-5
        my-1
        mx-1
        cursor-pointer
        hover:bg-gray-200 
      "
    >
      upload
    </div>
  </div>
</template>

<script>
export default {
  name: "Tool",
  data() {
    return {
      device: null,
    };
  },
  methods: {
    selectDevice() {
      navigator.usb.getDevices().then((devices) => {
        navigator.usb
          .requestDevice({ filters: [] })
          .then((usbDevice) => {
            this.device = usbDevice;
            console.log(this.device);
          })
          .catch((e) => {
            console.log("There is no device. " + e);
          });
      });
    },
  },
  mounted() {},
};
</script>