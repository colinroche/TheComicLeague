// requiring imports
const express = require('express')
const router = express.Router()

// get request
router.get('/', (req, res) => {
    res.send('From API route')
})

// export router
module.exports = router
