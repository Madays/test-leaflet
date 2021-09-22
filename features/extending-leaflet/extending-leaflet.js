/*L.Class.extend()
*/
var MyDemoClass = L.Class.extend({
    //A property with initial value = 42
    myDemoProperty: 42,

    //A method
    myDemoMethod: function(){return this.myDemoProperty;}
});

var myDemoInstance = new MyDemoClass();

//This will output "42" to the development console
console.log(myDemoInstance.myDemoMethod());

/*L.Class.include()
*/
MyDemoClass.include({
    // Adding a new property to the class
    _myPrivateProperty: 78,

    //Redefining a method
    myDemoMethod: function(){return this._myPrivateProperty;}
});

var mySecondDemoInstance = new MyDemoClass();

//This will output "78"
console.log(mySecondDemoInstance.myDemoMethod());

// However, properties and methods from before still exist
// This will output "42"
console.log( mySecondDemoInstance.myDemoProperty );

/*L.Class.initialize()
*/
var MyBoxClass = L.Class.extend({

    options: {
        width: 1,
        height: 1
    },

    initialize: function(name, options){
        this.name = name;
        L.setOptions(this, options);
    }
});

var instance = new MyBoxClass('Red', {width: 10});

console.log(instance.name);
console.log(instance.options.width);
console.log(instance.options.height);

var MyCubeClass = MyBoxClass.extend({
    options: {
        depth: 1
    }
});

var instance = new MyCubeClass('Blue');

console.log(instance.name);
console.log(instance.options.width); // Outputs "1", parent class default
console.log(instance.options.height); // Outputs "1", parent class default
console.log(instance.options.depth); // Outputs "1"

MyBoxClass.addInitHook(function(){
    this._area = this.options.width * this.options.length;
});

MyCubeClass.include({
    _calculateVolume: function(arg1, arg2){
        this._volume = this.options.width * this.options.length * this.options.depth;
    }
});

MyCubeClass.addInitHook('_calculateVolume', argValue1, argValue2);