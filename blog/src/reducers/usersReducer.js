
export default (users=[],action) =>{
    switch(action.type){
        case 'FETCH_USER':
            var user = users.find(user => user.id === action.payload.id);
            if(!user){
                return [...users, action.payload];
            }
            return users;
        default:
            return users;
    }
};