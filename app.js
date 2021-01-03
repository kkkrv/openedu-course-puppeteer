export default (express, bodyParser, puppeteer) => {

    const app = express();

    const CORS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers':'x-test,Content-Type,Accept, Access-Control-Allow-Headers'
    };


    app
        .use((r, res, next) => { r.res.set(CORS); next(); })
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: true }))

        .get('/login/', (req, res) => {
            res.send(author)
        })

        .get('/test/', async (req, res) => {
            const { URL } = req.query
            const browser = await puppeteer.launch({
                headless: true,
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                ],
            })
            const page = await browser.newPage()
            await page.goto(URL)
            await page.click('#bt')
            const value = await page.evaluate(async () => {
                const input = document.getElementById('inp')
                return input.value
            })
            res.send(value)
        })

        .all('/*', (req, res) => res.send('kokkareva97'));


    return app;

};
