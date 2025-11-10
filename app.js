const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

const shouldFailHealthCheck = process.env.FAIL_HEALTH_CHECK === 'true'

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})

app.get('/version', (req, res) => {
  res.send('7') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  if (shouldFailHealthCheck) {
    return res.status(500).json({ status: 'fail', reason: 'Forced health check failure' })
  }

  res.send('ok')
})
