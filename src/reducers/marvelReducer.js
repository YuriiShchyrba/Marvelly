import marvelAPI from "../../server/routes/marvelAPI";

const GETCHARACTERS = 'GETCHARACTERS';

export const getCharacters = (data) => ({type:GETCHARACTERS,data});

export const getCharactersThunk = (limit , page ,nameStartsWith) =>{
    return (dispatch)=>{    
        marvelAPI.getCharacters(limit, page ,nameStartsWith ).then(data=>{
            dispatch(getCharacters(data.data.data.results));
        }).catch(err=>{
            console.log(err);
        });
    }
};

const initialState = {
    characters : []
};

const marvelReducer = (state = initialState , action) => {
    switch(action.type){
        case GETCHARACTERS:{
            return{
                ...state,
                characters : [...action.data]
            }
        }
        default: 
        return state;
    };
};

export default marvelReducer;