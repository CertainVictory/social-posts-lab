"use strict";

const post = {
    templateUrl: "app/post/post.html",
    bindings: {
        post: "<",
        removePost: "&"
    }
}


angular
    .module("app")
    .component("post", post)