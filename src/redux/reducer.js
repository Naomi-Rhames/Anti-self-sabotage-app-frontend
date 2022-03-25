const initialAffirmation = {
    phrase: "",
    id: null
}

const initialPost = {
    message: "",
    image_url: "",
    id: null,
    comments: []
}

const initialUser = {
    email: "",
    username: "",
    bio: "",
    id: null
}

const initialState = {
   posts: [],
   setAffirmations: initialAffirmation, 
   setPost: initialPost,
   user: initialUser 
}

export function reducer(state= initialState, action){
    switch(action.type){



    default:
        return {...state}
    }
}
