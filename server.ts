// import 'reflect-metadata';
// import 'zone.js/dist/zone-node';
// import { platformServer, renderModuleFactory } from '@angular/platform-server'
// import { enableProdMode } from '@angular/core'
// import * as express from 'express';
// import { readFileSync } from 'fs';
// import { join } from 'path';
//
// const PORT = 5000;
//
// enableProdMode();
//
// const app = express();
//
// let template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();
// //
// // app.engine('html', (_, options: any, callback) => {
// //   const opts = { document: template, url: options.req.url };
// //
// //   renderModuleFactory(AppServerModuleNgFactory, opts)
// //       .then(html => callback(null, html));
// // });
// app.engine('html','pug')
//
// app.set('view engine', 'html');
// app.set('views', 'src')
//
// app.get('*.*', express.static(join(__dirname, '..', 'dist')));
//
// app.get('*', (req, res) => {
//   res.render('index', { req });
// });
//
// app.listen(PORT, () => {
//   console.log(`listening on http://localhost:${PORT}!`);
// });

const express = require('express');
const path = require('path')
const port = 8080;
const app = express();

app.use(express.static('./dist'))
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.sendFile('index.html',{root:'./dist'})
});


app.listen(port, () => {
  console.log("Server is listening on port "+port);
});
