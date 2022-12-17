import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./rotes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(express.json());
app.use(todoRoutes)


const uri: string = `mongodb+srv://yuhee2020:ab19742285256082@yuhee2020.ep9fyfa.mongodb.net/?retryWrites=true&w=majority`
mongoose.set('strictQuery', false)

mongoose
    .connect(uri)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .then(()=>{
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
})
    .catch(error => {
        throw error
    })


