import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['chartData', 'options'],
  watch: {
    chartData() {
      this.renderChart(this.chartData, {});
    }
  }
}