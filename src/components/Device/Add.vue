<template>
  <div class="app-content">
    <div class="devices">
      <div class="device" v-for="device in devices" :key="device.id">
        <div class="id">{{ device.id }}</div>
        <div class="name">{{ device.name }}</div>
        <Button @click="deleteDevice(device.id)">Delete</Button>
      </div>
    </div>

    <div class="editable-device" v-if="showAddDevice">
      <input type="text" placeholder="id" v-model="addDeviceId" />
      <input type="text" placeholder="name" v-model="addDeviceName" />
      <Button @click="saveDevice(addDeviceId, addDeviceName)">Add</Button>
    </div>

    <Button @click="addDevice()">Add Device</Button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => {
    return {
      devices: [],
      addDeviceId: null,
      addDeviceName: "",
      showAddDevice: false,
    };
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  methods: {
    getDevices() {
      const user = this.getCurrentUser;
      const url = "/user/device/all";
      const params = {
        uid: user.id,
      };
      this.$axios.get(url, { params }).then((resp) => {
        console.dir(resp.data);
        this.devices = resp.data;
      });
    },
    addDevice() {
      this.showAddDevice = true;
    },
    deleteDevice(did) {
      const confirmation = window.confirm("Are you sure you want to delete this device?");
      if (confirmation) {
        const url = "/user/device";
        const params = {
          did,
        };
        this.$axios.delete(url, { params }).then(() => {
          this.getDevices();
        });
      }
    },
    saveDevice(id, name) {
      const user = this.getCurrentUser;
      const url = "/user/device";
      const params = {
        user_id: user.id,
        id: id,
        name,
      };
      this.$axios.post(url, params).then(() => {
        this.getDevices();

        this.addDeviceId = null;
        this.addDeviceName = "";
        this.showAddDevice = false;
      });
    },
  },
  mounted() {
    this.getDevices();
  },
};
</script>

<style scoped>
.devices {
  margin-top: 40px;
  /* margin: 40px 0px 40px 0px; */
}

.devices .device,
.editable-device {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.device Button,
.editable-device Button {
  margin-left: auto;
}

.device .id {
  margin: 0px 40px 0px 10px;
  font-weight: 800;
}

.editable-device input {
  margin-right: 20px;
}

Button {
  width: 100px;
}
</style>