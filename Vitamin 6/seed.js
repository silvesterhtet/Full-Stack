const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/companyDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const ProjectSchema = new mongoose.Schema({
    name: String,
    budget: Number
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

ProjectModel.insertMany([
    { name: 'Project A', budget: 50000 },
    { name: 'Project B', budget: 30000 },
    { name: 'Project C', budget: 20000 }
]).then(() => {
    console.log('Sample projects inserted');
    mongoose.connection.close();
}).catch(err => {
    console.error('Error inserting projects:', err);
});