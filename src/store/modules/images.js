import api from '../../api/imgur';
import { router } from '../../main.js';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fetchImages({ rootState, commit }) { 
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data);
        console.log(response.data.data);
    },
    async uploadImages({ rootState }, images) {
        // Get access token
        const { token } = rootState.auth;

        // Call APi module to upload
        await api.uploadImages(images, token);


        //Redirect user to ImageList component
        router.push('/');
        

    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}