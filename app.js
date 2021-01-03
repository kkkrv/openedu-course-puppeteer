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

        .get('/login/', (req, res) => res.send('kokkareva97'))

        .get('/test/', async (req, res) => {
            const URL = req.query.URL;
            const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
            const page = await browser.newPage();
            await page.goto(URL);
            await page.waitForSelector('#inp')
            await page.waitForSelector('#bt')
            await page.click('#bt');
            const got = await page.$eval('#inp', el => el.value);
            res.set('Content-Type', 'text-plain;charset=utf-8');
            res.end(got);
        })
        .all('/*', (req, res) => res.send('kokkareva97'));


    return app;

};
