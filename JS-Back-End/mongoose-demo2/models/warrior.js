const mongoose = require('mongoose');

const warriorSchema = new mongoose.Schema({
    name: String,
    race: String,
    // Usage validators in mongoose
    rank: {type: Number,
        required: true,
        validate: {
          validator: function (v) {
            return v >= 0
          },
          message: 'Rank can not be negative'
        }
    },
    skills: {
        type: Object,
        default: {}
    }  
});

//  Set new method for instance
warriorSchema.methods.Hura = function () {
    console.log(this.name ,'say Hura');
}
// Set virtual property
warriorSchema.virtual('addRank').get(function() {
    return `${this.name } have new rank ${this.rank * 2}`
})

const Warrior = mongoose.model('warriors', warriorSchema);

module.exports = Warrior;


