var merge = require('merge');
var Field = require('./field');

import updateValue from '../methods/update-value'

module.exports = function() {
 return merge.recursive(Field(), {
   props: {
    placeholder: {
      type:String,
      required:false,
      default:''
    },
    debounce:{
      type:Number,
      default:300
    },
    lazy:{
      type:Boolean
    }
  },
  data: function() {
    return {
     lastKeyStroke:new Date()
   }
 },
 methods:{
  updateValue
}
});

}



