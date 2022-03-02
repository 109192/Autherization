const ROLE ={
    ADMIN : 'admin',
    BASIC:'basic'
}

module.exports={
    ROLE:ROLE,
    users:[
        {id:1 , name:'Sam', role:ROLE.ADMIN},
        {id:2 , name:'Stive', role:ROLE.BASIC},
        {id:3, name:'Sara', role:ROLE.BASIC},
    ],
    projects:[
        {id:1 , name:"Sam's project", userId:1},
        {id:2 , name:"Stive's project", userId:2},
        {id:3 , name:"Sara's project", userId:3}
]
}