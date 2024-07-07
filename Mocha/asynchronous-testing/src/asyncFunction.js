function fetchData(callback){
    setTimeout(()=>{
        const data = {name:'sudha'};
        callback(null,data); //function calling
    },1000)
}

module.exports = fetchData;