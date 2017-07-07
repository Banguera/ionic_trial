webpackJsonp([0],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeModalPageModule", function() { return PokeModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__poke_modal__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PokeModalPageModule = (function () {
    function PokeModalPageModule() {
    }
    return PokeModalPageModule;
}());
PokeModalPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__poke_modal__["a" /* PokeModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__poke_modal__["a" /* PokeModalPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__poke_modal__["a" /* PokeModalPage */]
        ]
    })
], PokeModalPageModule);

//# sourceMappingURL=poke-modal.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokeModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_pokemon_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the PokeModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PokeModalPage = (function () {
    function PokeModalPage(platform, navParams, viewCtrl, pokeService) {
        this.platform = platform;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.pokeService = pokeService;
        this.id = this.navParams.get('id');
        this.getPokemon();
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad PokeModalPage');
    // }
    PokeModalPage.prototype.getPokemon = function () {
        var _this = this;
        this.pokeService.getPokemonDetail(this.id).subscribe(function (res) {
            var result = res.json().results;
            console.log('result in PokeModalPage:', result);
            _this.pokemon = result;
        });
    };
    PokeModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return PokeModalPage;
}());
PokeModalPage = __decorate([
    IonicPage(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-poke-modal',template:/*ion-inline-start:"/Users/jorge.banguera/projects/banguera/ionic_trial/src/pages/poke-modal/poke-modal.html"*/'<!--\n  Generated template for the PokeModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-icon name="arrow-dropleft-circle" (click)="dismiss()"></ion-icon>\n    <ion-title>{{ pokemon.name | capitalize }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jorge.banguera/projects/banguera/ionic_trial/src/pages/poke-modal/poke-modal.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__app_shared_pokemon_service__["a" /* PokemonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_shared_pokemon_service__["a" /* PokemonService */]) === "function" && _d || Object])
], PokeModalPage);

var _a, _b, _c, _d;
//# sourceMappingURL=poke-modal.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map