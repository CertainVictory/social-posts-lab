"use strict";
const socialPosts = {
    templateUrl: "app/socialPosts/socialPosts.html",
    controller: [function () {
        const vm = this;
        vm.posts = [
            {
                title: "eeee",
                text: "ffff"
            }
        ];
        vm.onSubmit = function (thought) {
            vm.posts.push({ ...thought });
            vm.formToggle = false;
            console.log(vm.posts)
        }
        vm.removePost = function(index) {
            vm.posts.splice(index, 1)
            console.log("dlkwejhf")
        }
        vm.formToggle = false;
        vm.showForm = function(){
            vm.formToggle = true;
            console.log("this is a button")
            console.log(vm.formToggle)
        }
    }]
}


angular
    .module("app")
    .component("socialPosts", socialPosts)
