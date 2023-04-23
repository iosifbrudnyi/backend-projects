const users = [
    {id: 1, name: 'Mark'},
    {id: 2, name: "Alina"}
]

const getUsers = (req, res) => {
    if(req.params.id){
        return res.send(users.find(user => user.id == req.user.id))
    }

    res.send(users)
}

const createUser = (req, res) => {
    console.log(req.body)
    const user = req.body;
    users.push(user);
    res.send(user);    
}

module.exports = {
    getUsers, 
    createUser
}