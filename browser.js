const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 4000;

app.get('/', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    const content = await page.content();
    await browser.close();
    res.send(content);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao carregar a página.');
  }
});

app.listen(port, () => {
  console.log(`Navegador está rodando em http://localhost:${port}`);
});
