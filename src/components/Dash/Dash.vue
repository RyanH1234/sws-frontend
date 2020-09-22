<template>
  <div class="app-content">
    <div class="tiles">
      <div class="tile" :class="getClass(index)" v-for="(type, index) in deviceData" :key="index">
        <div class="header">{{ type.latest_value.type }}</div>
        <div class="body">{{ type.latest_value.value }} {{ type.latest_value.unit }}</div>
        <div class="footer">{{ formatTimestamp(type.latest_value.timestamp) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => {
    return {
      deviceData: null,
    };
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  methods: {
    getClass(index) {
      index = index % 4;
      return "bg-" + index;
    },
    formatTimestamp(timestamp) {
      const [date, time] = timestamp.split("T");
      const [hh, mm] = time.split(":");
      const [yyyy, month, dd] = date.split("-");
      return `Last Updated At Time ${hh}:${mm} on ${dd}/${month}/${yyyy}`;
    },
    getDashData() {
      const user = this.getCurrentUser;
      const url = "/user/dash";
      const params = {
        uid: user.id,
      };
      this.$axios.get(url, { params }).then((resp) => {
        const devices = resp.data;
        if (devices.length > 0) {
          this.deviceData = devices[0].device_data;
          console.dir(this.deviceData);
        }
      });
    },
  },
  mounted() {
    this.getDashData();
    setInterval(() => {
      this.getDashData();
    }, 300000);
  },
};
</script>

<style scoped>
.tiles {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
}

.tile {
  width: 33%;
  height: 200px;
  margin-right: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  flex: 1;
}
.tile .header {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
}
.tile .body {
  font-size: 20px;
  font-weight: 900;
}
.tile .footer {
  font-size: 12px;
  text-align: center;
}

.bg-0 {
  background-color: rgb(218, 84, 147);
}

.bg-1 {
  background-color: rgb(43, 189, 180);
}

.bg-2 {
  background-color: rgb(251, 167, 46);
}

.bg-3 {
  background-color: rgb(250, 101, 55);
}

@media only screen and (max-width: 800px) {
  .tiles {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    flex-wrap: nowrap;
    overflow: auto;
  }

  .tile {
    width: 100% !important;
    min-height: 200px;
  }
}
</style>