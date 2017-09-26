var angular = require("angular")
var ngMaterial = require("angular-material")

var app = angular.module('learningFrontendV1', [ngMaterial])

app.controller("mainController", require("./screens/main/mainController"))
app.controller("dialogController", require("./screens/dialog/dialogController"))