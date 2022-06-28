const jwt = require("jsonwebtoken")

module.exports = async function(req,res,next) {
    
    const token = req.header('Authorization')

    if (!token)
    {
        return res.json.status(401).json({
            msg:"No token ,Authorization denied"
        })
    }
    try {
        await jwt.verify(token, process.env.jwtUsertoken, (err, decoded) => {
            if (err)
            {
                res.status(401).json({
                    msg:"Token not valid"
                })
            }
            else {
                req.user = decoded.user
                next()
            }
        })
    }
    catch (err)
    {
        console.log("jwt error -> ", err);
        res.json(500)({
            msg:"Server Error"
        })
    }

}