const Dev =  require('../models/Desenvolvedores.js');

module.exports = {
    async store(req, res){
        console.log(req.params.devId);
        console.log(req.headers.user);

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev){
            return res.status(400).json({error: 'Dev not exists'});
        }

        if(targetDev.likes.includes(loggedDev._id)){
            console.log( 'Deu match');
        }

        loggedDev.likes.push(targetDev, _id);

        await loggedDev.save();

        return res.json({ok:true});
    }
}