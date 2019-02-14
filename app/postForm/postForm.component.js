"use strict";

const postForm = {
    templateUrl: "app/postForm/postForm.html",
    bindings: {
        thought: "<",
        onSubmit:"&",
        formToggle: "<",
        // name: "<"
    }
}



angular
    .module("app")
    .component("postForm", postForm)