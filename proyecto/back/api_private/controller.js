

module.exports.probarGet= probarGet;
module.exports.msgReceived=msgReceived;

function probarGet(req,res) {
    return res.json("Probando get");
}

//Para el post
function msgReceived (req,res) {
    let objectReceivedToTraslate = req.body
    return res.json("Recibido para traducir "+ objectReceivedToTraslate.msg);
}