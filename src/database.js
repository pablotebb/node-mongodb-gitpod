const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fazt:fazt@cluster0-1rrfz.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB is connected'))
    .catch(e => console.log(e));