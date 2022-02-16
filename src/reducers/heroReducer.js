const initialState = {
    login: '',
    password: '',
    fullName: '',
    age : 0,
    birthDate : '',
    powers: '',
    isLogged : false,
};

const heroReducer = (state = initialState, action) =>{
    if(!action) return state;
    switch(action.type){
        default:
            return state;
    };
};

export default heroReducer;