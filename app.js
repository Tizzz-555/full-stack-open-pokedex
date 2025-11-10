const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

// Simulate production error for health check testing
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(500).send('Server Error - Production failure simulation')
  }
  next()
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})

app.get('/version', (req, res) => {
  res.send('7') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})
