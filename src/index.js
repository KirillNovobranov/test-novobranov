import Post from '@models/Post'
// import json from './assets/json.json'
import csv from './assets/data.csv'
import WebpackLogo from '@/assets/webpack-logo.png'
import './babel'
import './styles/styles.css'
import './styles/styles.scss'

const post = new Post('WebPack Post title', WebpackLogo)

// console.log('Post to String:', post.toString())

// console.log('JSON: ', json)
// console.log('CSV: ', csv)

