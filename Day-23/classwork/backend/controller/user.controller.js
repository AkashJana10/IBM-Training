const login = (req,res)=>{
    const data = req.body;
    const {email,password} = data;
    try {
        if(!email || !password){
            return res.status(400).send({message:'Data not found'});
        }else{
            return res.status(200).send({message:'User login Successsfuly'});
        }
    } catch (error) {
        return res.status(500).send({message:error});
    }
}

const signUp = (req,res)=>{
    const data = req.body;
    const {email,password} = data;
    try {
        if(!email || !password){
            return res.status(400).send({message:'Data not found'});
        }
        else{
            return res.status(200).send({message:'User register Successsfuly'});
        } 
    } catch (error) {
        return res.status(500).send({message:error});   
    }
}

module.exports = {signUp,login};