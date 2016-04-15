        //TODO:return a number, how much levels the elevator must go up or down
    function goto(level,button){
        return level in [0,1,2,3] && button in [0,1,2,3] ? button - level : 0;
    }
        //TODO:return the sum of all arguments given.
    function sum(arg) {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }

        //TODO: Return a new array with each value twice as large as the corresponding value in the passed in array.
    function double(array) {
        for (i = 0; i < array.length; i++) {
            array[i] = array[i] * 2;
        }
        return array
    }

        //TODO: Returns an array containing the named property of each object
        function pluck(objs, name) {
            var result = [];
            for(var i = 0; i < objs.length; i++){
                if(objs[i].hasOwnProperty(name)){
                    result.push(objs[i][name]);
                }
            }
            return result;
        }