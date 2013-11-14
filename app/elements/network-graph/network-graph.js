var o = define;
var define = Polymer.define('network-graph');
define(['d3', 'lls'], function(d3, lls) {

	function restore(stateKey) {

	}

  return {
  	publish: {
  		data: []
  	},
    //applyAuthorStyles: true,
    //resetStyleInheritance: true,
    // created: function() {
    // },
    
    ready: function() {
    	if (this.stateKey) {
    		// populate ourselves
    	}
    },

    // enteredView: function() { },
    // leftView: function() { },

    dataChanged: function(oldVal, newVal) {
    	// d3 stuff to construct the graph
    }
  }
});
define = o;