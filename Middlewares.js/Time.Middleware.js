module.exports = (req, res, next) => {
    const today = new Date();
    const day = today.getDay();
    const hours = today.getHours();

    if(hours >= 9 || hours<= 17 || day!= 6 || day!= 1){
        next();
    }
    else{
        res.send("not available")
    }
};