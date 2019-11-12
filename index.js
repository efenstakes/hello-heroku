const express = require('express')

let app = express()

const PORT = process.env.PORT || 4400


app.get('/', (_req, res)=> {
    res.json({ 'page': 'index', 'status': 'indexing' })
})

app.get('/about', (_req, res)=> {
    res.json({ 'page': 'about', 'status': 'abouting' })
})

app.get('/services', (_req, res)=> {
    res.json({ 'page': 'services', 'status': 'chilling' })
})


app.listen(PORT, ()=> {
    console.log(`running app on port ${PORT}`)
})