import express from 'express'
import path from 'path'

// express instance
const app = express()

// allow cors
// app.all('*', (_: any, res: any, next: ()=>void) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With");
// 	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// 	res.header("X-Powered-By", ' 3.2.1');
// 	next();
// })

.use(express.static(path.join(__dirname, '/www')))

app.get("/test", (req, res) => {
	res.json({
		data: [1,31231]
	});
})

.listen(5000, () => {
	console.info('success')
});
