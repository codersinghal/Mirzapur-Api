var quotes = require('./quotes');

module.exports = {
    getRandom: function getRandom(name) {
        var out = new Array(1);
        var quote;
        var cnt=1000;
        if(name==null)
        {
            quote = quotes[Math.floor(Math.random() * quotes.length)];
            out[0]=quote;
            return out;
        }
            do {
                quote = quotes[Math.floor(Math.random() * quotes.length)];
                cnt--;
            } while (quote.author!=name&&cnt>0);
            if(cnt==0)
            return "sorry no dialogue available"
            out[0] = quote;
        
        return out;
    }
};