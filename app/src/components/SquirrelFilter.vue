<template>
  <div class="container">
    <h2>Squirrel Location by Fur Color</h2>

    <form @submit.prevent="handleSearch">
      <label for="colorSelect">Select Fur Color:</label>
      <select id="colorSelect" class="dropdown" v-model="selectedColor">
        <option disabled value="">-- Select a color --</option>
        <option v-for="color in availableColors" :key="color" :value="color">
          {{ color }}
        </option>
      </select>
      <button type="submit">Search</button>
      <p v-if="formError" class="error">{{ formError }}</p>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
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
  name: 'SquirrelFilter',
  components: { Bar },
  data() {
    return {
      squirrels: [],
      selectedColor: '',
      error: null,
      formError: null,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
  methods: {
    handleSearch() {
      if (!this.selectedColor) {
        this.formError = 'Please select a fur color before searching.'
        return
      }
      this.formError = null
    },
  },
  computed: {
    availableColors() {
      const colors = new Set(this.squirrels.map((s) => s.primary_fur_color || 'Unknown'))
      return [...colors]
    },
    filteredSquirrels() {
      return this.squirrels.filter((s) => (s.primary_fur_color || 'Unknown') === this.selectedColor)
    },
    chartData() {
      const locationCounts = {}
      for (const squirrel of this.filteredSquirrels) {
        const location = squirrel.location || 'Unknown'
        locationCounts[location] = (locationCounts[location] || 0) + 1
      }
      const colors = ['#a8a8a8', '#c68642', '#2c2c2c', '#e0d7cc']
      return {
        labels: Object.keys(locationCounts),
        datasets: [
          {
            label: `Location Count for ${this.selectedColor}`,
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
      this.selectedColor = this.availableColors[0]
    } catch (error) {
      this.error = `Failed to load squirrel data: ${error.message}`
    }
  },
}
</script>

<style scoped>
.container {
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.dropdown {
  margin: 1rem 1rem;
  padding: 0.5rem 1rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.chart__container {
  width: 1000px;
  height: 800px;
  margin: 0 auto;
}

.error {
  color: red;
  font-weight: bold;
}
</style>