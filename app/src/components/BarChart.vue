<template>
  <div>
    <p>Squirrels loaded: {{ squirrels.length }}</p>
    <div v-if="squirrels.length" class="chart__container">
      <Bar :options="chartOptions" :data="chartData" />
    </div>
    <p v-else>Loading squirrels...</p>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      squirrels: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
  computed: {
    chartData() {
      const colorCounts = {}

      for (const squirrel of this.squirrels) {
        const color = squirrel.primary_fur_color || 'Unknown'
        colorCounts[color] = (colorCounts[color] || 0) + 1
      }

      return {
        labels: Object.keys(colorCounts),
        datasets: [
          {
            label: 'Fur Color Count',
            data: Object.values(colorCounts),
            backgroundColor: ['#e0d7cc', '#a8a8a8', '#c68642', '#2c2c2c'],
          },
        ],
      }
    },
  },
  async mounted() {
    const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
    const data = await response.json()
    this.squirrels = data.slice(0, 1000)
    console.log('Squirrels loaded:', this.squirrels.length)
  },
}
</script>

<style scoped>
.p {
  font-size: 20px;
}
.chart__container {
  width: 1000px;
  height: 800px;
  margin: 0 auto;
}
</style>