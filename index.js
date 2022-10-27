const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")
app.use(cors())

const courseCategory = require('./Data/Course_category.json')
const allCourses = require("./Data/Courses.json")

app.get('/', (req, res) => {
    res.send("hello")
})

app.get('/course-category', (req, res) => {
    res.send(courseCategory)
})

app.get('/courses', (req, res) => {
    res.send(allCourses)
})

app.get('/course-category/:id', (req, res) => {
    const id = req.params.id
    if (id === "07") {
        res.send(allCourses)
    } else {
        const categoryCourse = allCourses.filter(course => course.category_id === id)
        res.send(categoryCourse)
    }
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const singleCourse = allCourses.find(course => course._id === id)
    res.send(singleCourse)
})

app.listen(port, () => {
    console.log("Listening at port", port)
})