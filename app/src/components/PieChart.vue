<template>
  <div>
    <p>Squirrels loaded: {{ squirrels.length }}</p>
    <div v-if="squirrels.length" class="chart__container">
      <Pie :options="chartOptions" :data="chartData" />
    </div>
    <p v-else>Loading squirrels...</p>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
  name: 'PieChart',
  components: { Pie },
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
    try {
      const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      const data = await response.json()
      this.squirrels = data.slice(0, 1000)
    } catch (error) {
      this.error = `Failed to load squirrel data: ${error.message}`
    }
  },
}
</script>

<style scoped>
.chart__container {
  width: 800px;
  height: 800px;
  margin: 0 auto;
}
</style>
