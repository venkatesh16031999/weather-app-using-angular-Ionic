(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar color=\"primary\">\n  <ion-title>Weather App</ion-title>\n</ion-toolbar>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-gird>\n    <ion-row *ngIf=\"cityPanel==1\">\n      <ion-col width-100 class=\"d-flex justify-content-center\">\n        <ion-card>\n          <ion-card-header class=\"text-center\">\n            <ion-card-title>Select City</ion-card-title>\n          </ion-card-header>\n          <ion-card-content class=\"text-center\">\n            <ion-input [(ngModel)]=\"cityname\" width-100 placeholder=\"Enter City Name\"></ion-input>\n            <section class=\"full-width\" style=\"border-radius: 5px;\">\n              <ion-button expand=\"full\" (click)=\"findweather(cityPanel)\" color=\"secondary\">Find Weather</ion-button>\n            </section>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row >\n      <ion-col width-100 class=\"d-flex justify-content-center\">\n        <ion-card style=\"width: 80vw;\">\n          <ion-card-header class=\"text-center\">\n            <ion-button expand=\"full\" style=\"margin-bottom: 10px;\" (click)=\"enableSelect(1)\" color=\"secondary\">Edit City</ion-button>\n            <ion-card-subtitle>City Details </ion-card-subtitle>\n            <ion-card-title *ngIf=\"weatherdata.name\" style=\"border-bottom: 2px solid#3dc2ff;\" >{{weatherdata.name}}</ion-card-title>\n            <ion-card-title *ngIf=\"weatherdata.length==0\" >No City Entered</ion-card-title>\n            <ion-gird *ngIf=\"weatherdata.length!=0\">\n              <ion-row>\n                <ion-col>\n                  <img src=\"http://openweathermap.org/img/wn/{{weatherdata.weather[0].icon}}@2x.png\" alt=\"\">\n                  <p><b>Condition : </b>{{weatherdata.weather[0].main}}</p>\n                  <p><b>Description : </b>{{weatherdata.weather[0].description}}</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <img src=\"https://img.icons8.com/color/2x/summer.png\" alt=\"\">\n                  <p>{{weatherdata.main.temp}}</p>\n                </ion-col>\n                <ion-col>\n                  <img src=\"https://img.icons8.com/color/2x/wind.png\" alt=\"\">\n                  <p>{{weatherdata.wind.speed}} Speed</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <p><b>Longitude :</b>{{weatherdata.coord.lon}}</p>\n                </ion-col>\n                <ion-col>\n                  <p><b>Latitute :</b>{{weatherdata.coord.lat}}</p>\n                </ion-col>\n              </ion-row>\n            </ion-gird>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"cityPanel==2\">\n      <ion-col width-100 class=\"d-flex justify-content-center\">\n        <ion-card>\n          <ion-card-header class=\"text-center\">\n            <ion-card-title>Select City</ion-card-title>\n          </ion-card-header>\n          <ion-card-content class=\"text-center\">\n            <ion-input [(ngModel)]=\"cityname1\" width-100 placeholder=\"Enter City Name\"></ion-input>\n            <section class=\"full-width\" style=\"border-radius: 5px;\">\n              <ion-button expand=\"full\" (click)=\"findweather(cityPanel)\" color=\"secondary\">Find Weather</ion-button>\n            </section>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row >\n      <ion-col width-100 class=\"d-flex justify-content-center\">\n        <ion-card style=\"width: 80vw;\">\n          <ion-card-header class=\"text-center\">\n            <ion-button expand=\"full\" style=\"margin-bottom: 10px;\" (click)=\"enableSelect(2)\" color=\"secondary\">Edit City</ion-button>\n            <ion-card-subtitle>City Details</ion-card-subtitle>\n            <ion-card-title *ngIf=\"weatherdata1.name\" style=\"border-bottom: 2px solid#3dc2ff;\" >{{weatherdata1.name}}</ion-card-title>\n            <ion-card-title *ngIf=\"weatherdata1.length==0\" >No City Entered</ion-card-title>\n            <ion-gird *ngIf=\"weatherdata1.length!=0\">\n              <ion-row>\n                <ion-col>\n                  <img src=\"http://openweathermap.org/img/wn/{{weatherdata1.weather[0].icon}}@2x.png\" alt=\"\">\n                  <p><b>Condition : </b>{{weatherdata1.weather[0].main}}</p>\n                  <p><b>Description : </b>{{weatherdata1.weather[0].description}}</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <img src=\"https://img.icons8.com/color/2x/summer.png\" alt=\"\">\n                  <p>{{weatherdata1.main.temp}}</p>\n                </ion-col>\n                <ion-col>\n                  <img src=\"https://img.icons8.com/color/2x/wind.png\" alt=\"\">\n                  <p>{{weatherdata1.wind.speed}} Speed</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <p><b>Longitude :</b>{{weatherdata1.coord.lon}}</p>\n                </ion-col>\n                <ion-col>\n                  <p><b>Latitute :</b>{{weatherdata1.coord.lat}}</p>\n                </ion-col>\n              </ion-row>\n            </ion-gird>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"cityPanel==3\">\n      <ion-col width-100 class=\"d-flex justify-content-center\">\n        <ion-card>\n          <ion-card-header class=\"text-center\">\n            <ion-card-title>Select City</ion-card-title>\n          </ion-card-header>\n          <ion-card-content class=\"text-center\">\n            <ion-input [(ngModel)]=\"cityname2\" width-100 placeholder=\"Enter City Name\"></ion-input>\n            <section class=\"full-width\" style=\"border-radius: 5px;\">\n              <ion-button expand=\"full\" (click)=\"findweather(cityPanel)\" color=\"secondary\">Find Weather</ion-button>\n            </section>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row >\n      <ion-col width-100 class=\"d-flex justify-content-center\">\n        <ion-card style=\"width: 80vw;\">\n          <ion-card-header class=\"text-center\">\n            <ion-button expand=\"full\" style=\"margin-bottom: 10px;\" (click)=\"enableSelect(3)\" color=\"secondary\">Edit City</ion-button>\n            <ion-card-subtitle>City Details</ion-card-subtitle>\n            <ion-card-title *ngIf=\"weatherdata2.name\" style=\"border-bottom: 2px solid#3dc2ff;\" >{{weatherdata2.name}}</ion-card-title>\n            <ion-card-title *ngIf=\"weatherdata2.length==0\" >No City Entered</ion-card-title>\n            <ion-gird *ngIf=\"weatherdata2.length!=0\">\n              <ion-row>\n                <ion-col>\n                  <img src=\"http://openweathermap.org/img/wn/{{weatherdata2.weather[0].icon}}@2x.png\" alt=\"\">\n                  <p><b>Condition : </b>{{weatherdata2.weather[0].main}}</p>\n                  <p><b>Description : </b>{{weatherdata2.weather[0].description}}</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <img src=\"https://img.icons8.com/color/2x/summer.png\" alt=\"\">\n                  <p>{{weatherdata2.main.temp}}</p>\n                </ion-col>\n                <ion-col>\n                  <img src=\"https://img.icons8.com/color/2x/wind.png\" alt=\"\">\n                  <p>{{weatherdata2.wind.speed}} Speed</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <p><b>Longitude :</b>{{weatherdata2.coord.lon}}</p>\n                </ion-col>\n                <ion-col>\n                  <p><b>Latitute :</b>{{weatherdata2.coord.lat}}</p>\n                </ion-col>\n              </ion-row>\n            </ion-gird>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"cityPanel==4\">\n      <ion-col width-100 class=\"d-flex justify-content-center\">\n        <ion-card>\n          <ion-card-header class=\"text-center\">\n            <ion-card-title>Select City</ion-card-title>\n          </ion-card-header>\n          <ion-card-content class=\"text-center\">\n            <ion-input [(ngModel)]=\"cityname3\" width-100 placeholder=\"Enter City Name\"></ion-input>\n            <section class=\"full-width\" style=\"border-radius: 5px;\">\n              <ion-button expand=\"full\" (click)=\"findweather(cityPanel)\" color=\"secondary\">Find Weather</ion-button>\n            </section>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row >\n      <ion-col width-100 class=\"d-flex justify-content-center\">\n        <ion-card style=\"width: 80vw;\">\n          <ion-card-header class=\"text-center\">\n            <ion-button expand=\"full\" style=\"margin-bottom: 10px;\" (click)=\"enableSelect(4)\" color=\"secondary\">Edit City</ion-button>\n            <ion-card-subtitle>City Details</ion-card-subtitle>\n            <ion-card-title *ngIf=\"weatherdata3.name\" style=\"border-bottom: 2px solid#3dc2ff;\" >{{weatherdata3.name}}</ion-card-title>\n            <ion-card-title *ngIf=\"weatherdata3.length==0\" >No City Entered</ion-card-title>\n            <ion-gird *ngIf=\"weatherdata3.length!=0\">\n              <ion-row>\n                <ion-col>\n                  <img src=\"http://openweathermap.org/img/wn/{{weatherdata3.weather[0].icon}}@2x.png\" alt=\"\">\n                  <p><b>Condition : </b>{{weatherdata3.weather[0].main}}</p>\n                  <p><b>Description : </b>{{weatherdata3.weather[0].description}}</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <img src=\"https://img.icons8.com/color/2x/summer.png\" alt=\"\">\n                  <p>{{weatherdata3.main.temp}}</p>\n                </ion-col>\n                <ion-col>\n                  <img src=\"https://img.icons8.com/color/2x/wind.png\" alt=\"\">\n                  <p>{{weatherdata3.wind.speed}} Speed</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <p><b>Longitude :</b>{{weatherdata3.coord.lon}}</p>\n                </ion-col>\n                <ion-col>\n                  <p><b>Latitute :</b>{{weatherdata3.coord.lat}}</p>\n                </ion-col>\n              </ion-row>\n            </ion-gird>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-gird>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather.service.ts");



let Tab1Page = class Tab1Page {
    constructor(weatherservice) {
        this.weatherservice = weatherservice;
        this.weatherdata = "";
        this.cityname = "";
        this.weatherdata1 = "";
        this.cityname1 = "";
        this.weatherdata2 = "";
        this.cityname2 = "";
        this.weatherdata3 = "";
        this.cityname3 = "";
        this.cityPanel = 0;
    }
    enableSelect(num) {
        this.cityPanel = num;
    }
    findweather(num) {
        if (num == 1) {
            this.weatherservice.getReport1(this.cityname);
            this.weatherservice.getPostObserver1().subscribe((data) => {
                this.weatherdata = data[0];
            });
        }
        if (num == 2) {
            this.weatherservice.getReport2(this.cityname1);
            this.weatherservice.getPostObserver2().subscribe((data) => {
                this.weatherdata1 = data[0];
            });
        }
        if (num == 3) {
            this.weatherservice.getReport3(this.cityname2);
            this.weatherservice.getPostObserver3().subscribe((data) => {
                this.weatherdata2 = data[0];
            });
        }
        if (num == 4) {
            this.weatherservice.getReport4(this.cityname3);
            this.weatherservice.getPostObserver4().subscribe((data) => {
                this.weatherdata3 = data[0];
            });
        }
        this.cityPanel = 0;
    }
};
Tab1Page.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ }),

/***/ "./src/app/weather.service.ts":
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let PostService = class PostService {
    constructor(http) {
        this.http = http;
        this.posts1 = [];
        this.posts2 = [];
        this.posts3 = [];
        this.posts4 = [];
        this.updatedPost1 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updatedPost2 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updatedPost3 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updatedPost4 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getReport1(cityname) {
        const link = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b41d6fd6bf6b93bac3fffbc3dd2768b`;
        this.http.get(link).subscribe((resData) => {
            this.posts1 = [];
            this.posts1 = [resData];
            this.updatedPost1.next([...this.posts1]);
        });
        setInterval(() => {
            this.http.get(link).subscribe((resData) => {
                this.posts1 = [];
                this.posts1 = [resData];
                this.updatedPost1.next([...this.posts1]);
            });
        }, 30000);
    }
    getReport2(cityname) {
        const link = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b41d6fd6bf6b93bac3fffbc3dd2768b`;
        this.http.get(link).subscribe((resData) => {
            this.posts2 = [];
            this.posts2 = [resData];
            this.updatedPost2.next([...this.posts2]);
        });
        setInterval(() => {
            const link = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b41d6fd6bf6b93bac3fffbc3dd2768b`;
            this.http.get(link).subscribe((resData) => {
                this.posts2 = [];
                this.posts2 = [resData];
                this.updatedPost2.next([...this.posts2]);
            });
        }, 30000);
    }
    getReport3(cityname) {
        const link = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b41d6fd6bf6b93bac3fffbc3dd2768b`;
        this.http.get(link).subscribe((resData) => {
            this.posts3 = [];
            this.posts3 = [resData];
            this.updatedPost3.next([...this.posts3]);
        });
        setInterval(() => {
            const link = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b41d6fd6bf6b93bac3fffbc3dd2768b`;
            this.http.get(link).subscribe((resData) => {
                this.posts3 = [];
                this.posts3 = [resData];
                this.updatedPost3.next([...this.posts3]);
            });
        }, 30000);
    }
    getReport4(cityname) {
        const link = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b41d6fd6bf6b93bac3fffbc3dd2768b`;
        this.http.get(link).subscribe((resData) => {
            this.posts4 = [];
            this.posts4 = [resData];
            this.updatedPost4.next([...this.posts4]);
        });
        setInterval(() => {
            const link = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9b41d6fd6bf6b93bac3fffbc3dd2768b`;
            this.http.get(link).subscribe((resData) => {
                this.posts4 = [];
                this.posts4 = [resData];
                this.updatedPost4.next([...this.posts4]);
            });
        }, 30000);
    }
    getPostObserver1() {
        return this.updatedPost1.asObservable();
    }
    getPostObserver2() {
        return this.updatedPost2.asObservable();
    }
    getPostObserver3() {
        return this.updatedPost3.asObservable();
    }
    getPostObserver4() {
        return this.updatedPost4.asObservable();
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PostService);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map