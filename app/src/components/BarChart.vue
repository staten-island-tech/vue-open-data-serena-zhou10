<template>
  <div>
    <p v-if="error" class="error">{{ error }}</p>
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
      error: null,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
  computed: {
    chartData() {
      const locationCounts = {}
      for (const squirrel of this.squirrels) {
        const location = squirrel.location || 'Unknown'
        locationCounts[location] = (locationCounts[location] || 0) + 1
      }
      const colors = ['#a8a8a8', '#c68642', '#2c2c2c', '#e0d7cc']
      return {
        labels: Object.keys(locationCounts),
        datasets: [
          {
            label: 'Location Count',
            data: Object.values(locationCounts),
            backgroundColor: Object.keys(locationCounts).map((_, i) => colors[i % colors.length]),
          },
        ],
      }
    },
  },
  async mounted() {
    try {
      const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      const data = await response.json()
      this.squirrels = data.slice(0, 1000)
      console.log('Squirrels loaded:', this.squirrels.length)
    } catch (error) {
      this.error = `Failed to load squirrel data: ${error.message}`
    }
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