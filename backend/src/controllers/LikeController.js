const Dev =  require('../models/Dev');

module.exports = {
    async store(req, res){
        console.log("like" + req.params.devId);
        console.log("like" + req.headers.user);

        const {user } = req.headers;
        const {devId } = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev){
            return res.status(400).json({error: 'Dev not exists'});
        }

        loggedDev.likes.push(targetDev._id);
        
        if(targetDev.likes.includes(loggedDev._id)){
            const loggedSocket = req.connectedUsers[user];
            const targedSocket = req.connectedUsers[devId];
            
            if(loggedSocket){
                req.io.to(loggedSocket).emit('match',targetDev);
            }

            if(targedSocket){
                req.io.to(targedSocket).emit('match',loggedDev);
            }

            console.log( 'Deu match');
        }


        await loggedDev.save();

        return res.json({ok:true});
    }
};