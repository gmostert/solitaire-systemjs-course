System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "stage": 0
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "app.bundle.js": [
      "app.js",
      "klondike/klondike.js",
      "klondike/scoring.js",
      "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
      "npm:babel-runtime@5.8.38/helpers/create-class.js",
      "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
      "npm:core-js@1.2.6/library/fn/object/define-property.js",
      "npm:core-js@1.2.6/library/modules/$.js",
      "klondike/board.js",
      "github:angular/bower-angular-route@1.5.7.js",
      "github:angular/bower-angular-route@1.5.7/angular-route.js",
      "github:angular/bower-angular@1.5.7.js",
      "github:angular/bower-angular@1.5.7/angular.js",
      "klondike/game.js",
      "klondike/piles/remainderPile.js",
      "klondike/piles/pile.js",
      "npm:babel-runtime@5.8.38/core-js/object/create.js",
      "npm:core-js@1.2.6/library/fn/object/create.js",
      "klondike/piles/foundationPile.js",
      "klondike/piles/tableauPile.js",
      "npm:underscore@1.8.3.js",
      "npm:underscore@1.8.3/underscore.js",
      "cards/deck.js",
      "cards/card.js",
      "github:fatlinesofcode/ngDraggable@0.1.8.js",
      "github:fatlinesofcode/ngDraggable@0.1.8/ngDraggable.js"
    ]
  },
  map: "This is used by the system.js loader to map dependencies to the actual resources",
  map: {
    "angular": "github:angular/bower-angular@1.5.7",
    "angular-mocks": "github:angular/bower-angular-mocks@1.5.7",
    "angular-route": "github:angular/bower-angular-route@1.5.7",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "card": "cards/card.js",
    "core-js": "npm:core-js@1.2.6",
    "deck": "cards/deck.js",
    "ngDraggable": "github:fatlinesofcode/ngDraggable@0.1.8",
    "underscore": "npm:underscore@1.8.3",
    "github:angular/bower-angular-mocks@1.5.7": {
      "angular": "github:angular/bower-angular@1.5.7"
    },
    "github:angular/bower-angular-route@1.5.7": {
      "angular": "github:angular/bower-angular@1.5.7"
    },
    "github:fatlinesofcode/ngDraggable@0.1.8": {
      "angular": "github:angular/bower-angular@1.5.7"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
