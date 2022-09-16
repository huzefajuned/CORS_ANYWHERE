import axios from "axios";
import express, {Response, Request} from "express";
import cors from 'cors';

const app = express()


app.use(express.json())
app.use(cors())

app.use("/proxy", async (req: Request, res: Response) => {
    const url = req.body.redirect_url as string;
    console.log(url)
    const red_resp = await axios.get(url);
    const data = await red_resp.data;
    console.log(data)
    res.json(data);
})

app.listen(4000, () => {
    console.log('App listening on 4000')
})
