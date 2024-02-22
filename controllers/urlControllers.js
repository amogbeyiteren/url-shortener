const db = require('../models/db')
const shortid = require('shortid')

exports.shortenUrl = (req, res) =>{
    const {originalUrl} = req.body;
    const shortCode = shortid.generate();

    db.query('INSERT INTO url_table (original_url, short_url) VALUES(?,?)', [originalUrl,shortCode],
    (err)=>{
        if(err){
            Console.log('Server Error', err);
            res.status(500).json({message:'Url shortening failed'})

        }
        else{
            const shortUrl = `http://localhost:3001/urls/${shortCode}`
            res.json({shortUrl});
        }
    }
    )


}

exports.redirectToOriginalUrl = (req, res) =>{
    const {shortCode} = req.params;

    db.query('SELECT original_url FROM url_table WHERE short_url = ?',[shortCode],
    (err,result)=>{
        if(err){
            Console.log('Server Error', err);
            res.status(500).json({message:'Url Redirection failed'})

        }
        else{
            if(result){
                res.redirect(result[0].original_url)
            }
        }
    }
    )
}