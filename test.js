//test
const config = require('config')
const fs = require('fs')
import { json-text-sequence } from './node_modules/json-text-sequence'
const ogr2ogrPath = config.get('ogr2ogrPath')

console.log(ogr2ogrPath)

/*
fs.readFile('src/01223__13_r_2023.geojson','UTF-8',function(err,data){

 console.log(data)

})
*/