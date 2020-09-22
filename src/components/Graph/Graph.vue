<template>
  <div class="graph-container">
    <div class="select-attribute">
      <label for="attribute">Select An Attribute:</label>
      <select id="attribute" v-model="selectedKey">
        <option v-for="(key,index) in graphKeys" :value="key" :key="index">{{ key }}</option>
      </select>
      <Button> 1hr </Button>
      <Button> 1 Day </Button>
      <Button> 1 Wk </Button>
    </div>
    <div class="graph" style="overflow: auto">
      <line-chart :height="chartHeight" :chart-data="chartData" :options="chartOptions"></line-chart>
    </div>
  </div>
</template>

<script>
import colour from "./colours.js";
import LineChart from "./LineChart.js";

export default {
  components: {
    LineChart,
  },
  data: () => {
    return {
      selectedKey: null,
      graphKeys: null,
      graphData: null,
      chartData: null,
      chartOptions: {},
      chartHeight: 100,
      colours: colour.colours,
    };
  },
  mounted() {
    const device_id = 3;
    const url = `/user/device/data?did=${device_id}`;
    this.$axios.get(url, {}).then((resp) => {
      this.graphData = resp.data;
      this.graphKeys = Object.keys(this.graphData);
    });
  },
  watch: {
    selectedKey() {
      const key = this.selectedKey;
      const data = this.graphData[key];
      const y = data.map((d) => parseInt(d.value));
      const x = data.map((d) => d.timestamp);

      this.chartData = {
        labels: x,
        datasets: [{ backgroundColor: 'rgba(248,121,121, 0.1)', label: key, data: y }],
      };
    },
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

@media only screen and (max-width: 800px) {
  .graph-container {
    min-height: 600px;
  }
}
</style>