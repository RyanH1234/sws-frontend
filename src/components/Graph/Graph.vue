<template>
  <div class="graph-container">
    <div class="select-attribute">
      <label for="device">Select A Device:</label>
      <select id="device" v-model="selectedDevice">
        <option
          v-for="(device, index) in devices"
          :value="device.id"
          :key="index"
        >
          {{ device.name }}
        </option>
      </select>

      <Button
        :class="{ 'selected-granularity': granularityHrs == 1 }"
        @click="granularityHrs = 1"
        >1hr</Button
      >

      <Button
        :class="{ 'selected-granularity': granularityHrs == 24 }"
        @click="granularityHrs = 24"
        >24hrs</Button
      >

      <Button
        :class="{ 'selected-granularity': granularityHrs == 168 }"
        @click="granularityHrs = 168"
        >1 Wk</Button
      >

      <label for="attribute">Select An Attribute:</label>
      <select id="attribute" v-model="selectedKey">
        <option v-for="(key, index) in graphKeys" :value="key" :key="index">
          {{ key }}
        </option>
      </select>
    </div>

    <div class="graph" style="overflow: auto">
      <line-chart
        :height="chartHeight"
        :chart-data="chartData"
        :options="chartOptions"
      ></line-chart>
    </div>
  </div>
</template>

<script>
import colour from "./colours.js";
import LineChart from "./LineChart.js";
import { mapGetters } from "vuex";

export default {
  components: {
    LineChart,
  },
  data: () => {
    return {
      devices: [],
      selectedDevice: null,
      granularityHrs: -1,
      selectedKey: null,
      graphKeys: null,
      graphData: null,
      chartData: null,
      chartOptions: {},
      chartHeight: 180,
      colours: colour.colours,
    };
  },
  methods: {
    formatXAxis(labels) {
      return labels.map((label) => {
        const [date, time] = label.split("T");
        const [yyyy, mm, dd] = date.split("-");
        const [hh, min] = time.split(":");
        return `${dd}/${mm}/${yyyy} @ ${hh}:${min}`;
      });
    },
    getDeviceData(hours) {
      let endLocal = new Date();

      let startLocal = new Date();
      startLocal = new Date(startLocal.setHours(startLocal.getHours() - hours));

      const device_id = this.selectedDevice;
      const url = `/user/device/data?did=${device_id}`;
      const params = {
        did: device_id,
        start: startLocal,
        end: endLocal,
      };
      this.$axios.post(url, params).then((resp) => {
        this.graphData = resp.data;
        if (this.graphData.length === 0) {
          this.graphKeys = [];
          this.selectedKey = null;
        } else {
          this.graphKeys = Object.keys(this.graphData);
          this.selectedKey = this.graphKeys[0];
        }
      });
    },
  },
  watch: {
    selectedDevice() {
      this.granularityHrs = -1;
      this.selectedKey = null;
    },
    selectedKey() {
      const key = this.selectedKey;
      if (key != null) {
        const data = this.graphData[key];
        const y = data.map((d) => parseFloat(d.value));
        let x = data.map((d) => d.timestamp);
        x = this.formatXAxis(x);

        this.chartData = {
          labels: x,
          datasets: [
            {
              backgroundColor: "rgba(251, 167, 46, 0.2)",
              label: key,
              data: y,
              pointRadius: 0,
            },
          ],
        };
      }
    },
    granularityHrs() {
      const hours = this.granularityHrs;
      this.getDeviceData(hours);
    },
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  mounted() {
    const user = this.getCurrentUser;
    const url = "/user/device/all";
    const params = {
      uid: user.id,
    };
    this.$axios.get(url, { params }).then((resp) => {
      this.devices = resp.data;
    });
  },
};
</script>

<style scoped>
label {
  margin: 0px;
}

.graph-container {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  flex-direction: column;
  margin-bottom: 40px;
}

.select-attribute {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}

.select-attribute label,
.select-attribute select,
Button {
  margin-left: 10px;
}

.selected-granularity {
  background-color: green;
}

@media only screen and (max-width: 800px) {
  .graph-container {
    min-height: 600px;
  }
}
</style>