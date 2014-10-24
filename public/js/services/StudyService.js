// public/js/services/StudyService.js
angular.module('StudyService', []).factory('Study', ['$http', function($http) {

    return {
        // call to get all studies
        get : function() {
            return $http.get('/api/study');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new study
        create : function(studyData) {
            return $http.post('/api/study', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/study/' + id);
        }
    }       

}]);