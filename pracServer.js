// // imports
// const express = require('express');
// const taskRoutes = require('./routes/tasks');

// // create server
// const app = express();

// // middleware
// app.use(express.json()); // parse json 

// // routes
// app.get('/', (req, res) => {
//     res.send('Task API running')
// });

// app.use('/tasks', taskRoutes); // route mounting

// // start server
// const PORT = 5000;
// app.listen(PORT, (err) => {
//     if (err) {
//         console.log('Error setting up server')
//     } else {
//         console.log(`Server running on http://localhost:${PORT}`)
//     };
// });

// // import express
// const express = require('express');
// // create router
// const router = express.Router();
// // additional data -> define what you want to return
// const tasks = [
//     {
//         id: 1,
//         name: 'Do laundry',
//         completed: false,
//     },
//     {
//         id: 2,
//         name: 'Do homework',
//         completed: true,
//     }
// ]
// // routes
// // This route 'gets' data and sends it 
// router.get('/', (req, res) => {
//     res.json(tasks);
// });

// // This route 'posts' data to be saved 
// router.post('/', (req, res) => {
//     // grab new task from req.body
//     const newTask = req.body;
//     // add an id maybe by taking last task id + 1
//     const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
//     newTask.id = newId;
//     // push new task to tasks array
//     tasks.push(newTask);
//     // return new task with res.json and status response with res.status
//     res.status(200).json(newTask);
// })
// // export
// module.exports = router;
// // imports
// const express = require('express');
// const postRoutes = require('./routes/postRoutes');
// const commentRoutes = require('./routes/commentRoutes');

// // create server
// const app = express();

// // middleware
// app.use(express.json()); // parse json objects

// // routes 
// app.get('/', (req, res) => {
//     res.send('Blog API running')
// });

// app.use('/posts', postRoutes);
// app.use('/comments', commentRoutes);

// // listen 
// const PORT = 5000;
// app.listen(PORT, (err) => {
//     if (err) {
//         console.log("Error setting up server")
//     } else {
//         console.log(`Server is running on http://localhost:${PORT}`)
//     }
// });