/*
    function() constructor
    *expressao new
    *criar um novo objeto
    *this keyword
*/

    function Person (name){
        this.name = name
        this.walk = function (){
            return this.name + " está andando"
        }
    }
    const johnny = new Person ("johnny")
    const mayk = new Person ("mayk")
    console.log(johnny.walk())
    console.log(mayk.walk())