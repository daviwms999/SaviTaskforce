import { createStore } from 'redux';

const INITIAL_STATE = {
    drawerActive: "Minha Localização",
    user: {
        gender: "Masculino",
        occupation: "Programador",
        name: "Guilherme",
        lastname: "Salvo",
        location: {
            latitude: -10,
            longitude: -40,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        },
        birthYear: new Date(),
        email: "ggelmisalvo@gmail.com",
        numero: null,
    },
    markers: [],
    filterActive: {
        food: false,
        documentation: false,
        education: false,
        shelter: false,
        health: false,
        clothes: false,
        job: false,
        acessibility: false,
        nursery: false
    },
    filterTabActive: false,
    filterTabLoading: false,
    editProfileActive: false,
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'DRAWER_ACTIVE':
            return { ...state, drawerActive: action.title };
        case 'UPDATE_LOCATION':
            //console.log('ASODASD'+action.latitude)
            return { ...state, 
                user:{
                    ...state.user,
                    location: {
                        ...state.user.location,
                        latitude: action.latitude,
                        longitude: action.longitude
                    }
                }
            }
        case 'ADD_MARKERS':
            console.log(action.markers);
            return { ...state, markers:  action.markers }
        case 'FILTER_ACTIVE':
            const filterA = action.filter;
            console.log(state.filterActive);
            console.log(filterA);
            let newState = state;
            newState.filterActive[filterA] = !state.filterActive[filterA];
            return newState 
        case 'FILTERTAB_ACTIVE':
            return { ...state, filterTabActive: !state.filterTabActive}
        case 'FILTER_LOADING':
            return { ...state, filterTabLoading: !state.filterTabLoading}
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;