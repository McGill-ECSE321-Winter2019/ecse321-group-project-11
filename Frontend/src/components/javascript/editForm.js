import axios from 'axios'
var config = require('../../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'https://cooperator-backend-3417.herokuapp.com/'

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

export default {
  data() {
    return {
      forms: [],
      form: ''
    }
  },

  created: function() {
    AXIOS.get('/forms')
      .then(response => {
        this.forms = response.data;
        // Find student by userId
        for (var i in this.forms) {
          if (this.forms[i].formId === this.$route.params.formId) {
            this.form = this.forms[i]
          }
        }
      })

    if ((localStorage.getItem('loggedIn') != null)) {
      //if cookies expired, refresh
      if (this.$cookie.get("username") == null || this.$cookie.get("password") == null) {
        localStorage.removeItem('loggedIn')
        this.$cookie.delete('username');
        this.$cookie.delete('password');
        window.location.href = "/";
      }
      else {
        //reverify login information
        AXIOS.post(`/login/` + this.$cookie.get("username") + '/' + this.$cookie.get("password"), {}, {})
          .then(response => {
            if (response.data == 'Accepted') {
              if(localStorage.getItem('loggedIn') != "Administrator"){
                localStorage.setItem('loggedIn', "Administrator");
                window.location.href = "/";
              }

            }
            else {
              localStorage.removeItem('loggedIn')
              this.$cookie.delete('username');
              this.$cookie.delete('password');
              console.log("bad log in information");
              window.location.href = "/";
            }
          })
          .catch(e => {
            localStorage.removeItem('loggedIn')
            this.$cookie.delete('username');
            this.$cookie.delete('password');
            console.log("error in post request: " + e);
            window.location.href = "/";
          });
      }
    }
  },
  methods: {
    editAcceptanceForm(submissionDate){
      if (submissionDate !== undefined) {
        AXIOS.put('/form/' + this.form.formId + '/acceptanceForm/submissionDate/' + submissionDate,{},{})
        .then(response => {
          this.form = response.data;
        });
      }
    },

    editCoopEvaluation(submissionDate, workExperience, employerEvaluation, softwareTechnologies, usefulCourses){
      if (submissionDate !== undefined) {
        AXIOS.put('/form/' + this.form.formId + '/coopEvaluation/submissionDate/' + submissionDate,{},{})
          .then(response => {
            this.form = response.data;
          });
      }
      if (workExperience !== undefined) {
        AXIOS.put('/form/' + this.form.formId + '/coopEvaluation/workExperience/' + workExperience,{},{})
          .then(response => {
            this.form = response.data;
          });
      }
      if (employerEvaluation !== undefined) {
        AXIOS.put('/form/' + this.form.formId + '/coopEvaluation/employerEvaluation/number/' + employerEvaluation,{},{})
          .then(response => {
            this.form = response.data;
          });
      }
      if (softwareTechnologies !== undefined) {
        AXIOS.put('/form/' + this.form.formId + '/coopEvaluation/softwareTechnologies/' + softwareTechnologies,{},{})
          .then(response => {
            this.form = response.data;
          });
      }
      if (usefulCourses !== undefined) {
        AXIOS.put('/form/' + this.form.formId + '/coopEvaluation/usefulCourses/' + usefulCourses,{},{})
          .then(response => {
            this.form = response.data;
          });
      }
    },

    editStudentEvaluation(submissionDate, studentPerformance, studentWorkExperience){
      if (submissionDate !== undefined) {
        AXIOS.put('/form/' + this.form.formId + '/studentEvaluation/submissionDate/' + submissionDate,{},{})
          .then(response => {
            this.form = response.data;
          });
      }
      if (studentPerformance !== undefined) {
        AXIOS.put('/form/' + this.form.formId + '/studentEvaluation/studentPerformance/number/' + studentPerformance,{},{})
          .then(response => {
            this.form = response.data;
          });
      }
      if (studentWorkExperience !== undefined) {
        AXIOS.put('/form/' + this.form.formId + '/studentEvaluation/studentWorkExperience/' + studentWorkExperience,{},{})
          .then(response => {
            this.form = response.data;
          });
      }
    },

    editTasksWorkloadReport(submissionDate, hoursPerWeek, tasks, training, wage){
      if (submissionDate !== undefined) {
        AXIOS.put('/form/' + this.form.formId + '/tasksWorkloadReport/submissionDate/' + submissionDate,{},{})
          .then(response => {
            this.form = response.data;
          });
      }
      if (hoursPerWeek !== undefined) {
        AXIOS.put('/form/' + this.form.formId + '/tasksWorkloadReport/hoursPerWeek/number/' + hoursPerWeek,{},{})
          .then(response => {
            this.form = response.data;
          });
      }
      if (tasks !== undefined) {
        AXIOS.put('/form/' + this.form.formId + '/tasksWorkloadReport/tasks/' + tasks,{},{})
          .then(response => {
            this.form = response.data;
          });
      }
      if (training !== undefined) {
        AXIOS.put('/form/' + this.form.formId + '/tasksWorkloadReport/training/' + training,{},{})
          .then(response => {
            this.form = response.data;
          });
      }
      if (wage !== undefined) {
        AXIOS.put('/form/' + this.form.formId + '/tasksWorkloadReport/wage/number/' + wage,{},{})
          .then(response => {
            this.form = response.data;
          });
      }
    }
  }
}
