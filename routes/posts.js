const puppeteer = require('puppeteer');
const express = require('express');
const router = express.Router();

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    let bodyHTML = await page.evaluate(() => document.body.innerHTML);
    console.log(bodyHTML);
}

router.get('/', async (req, res) => {
    try {
        // res.send('We are on posts');
        scrapeProduct('https://www.oxfordlearnersdictionaries.com/autocomplete/english/?q=s&contentType=application/json; charset=utf-8');
    } catch (error) {
        res.json({ message: err });
    }

});


router.post('/', (req, res) => {
    console.log(req.body);
});

// Specific post
router.get('/:postId', (req, res) => {
    console.log(req.params.postId);
});


module.exports = router;