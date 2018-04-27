import {apiConstants} from '../constants';

export const learnedCourseService = {
    getLearnedCourses,
};

var axios = require('axios');

function getLearnedCourses(userUID) {
    var url = apiConstants.URL + 'learned/';
    url += userUID;
    return axios.get(url)
    .then(function(response) {
        if (response.data.length === 0) {
            throw new Error('No learned course');
        } else {
            return response.data;
        }
    }, function(error) {
        throw new Error('Something went wrong');
    })
}