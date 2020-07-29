const get = "https://yalantis-react-school-api.yalantis.com/api/task0/users";


let Yalantis = {
    result : [[],[],[],[],[],[],[],[],[],[],[],[]],
    start(){
        return fetch (get)
        .then(response =>{
            return response.json();
        }).then(jsonResponse=>{
            return jsonResponse.map(user=>{
                return {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    dob: user.dob,
                    mob: user.dob.substring(5,7),
                }
            })
        }).then(jsonResponse=>{ return jsonResponse.forEach(user=>{
            if(user.mob[0]==='0'){
             user.mob=user.mob[1];
             }
                this.result[user.mob-1].push(user);        
        })


    })
}
}

export default Yalantis;