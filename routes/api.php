<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/test', function() {
//     return setting('site.title');
// });
// Route::middleware('auth:api')->get('/test2', function (Request $request) {
//     return setting('site.title');
// });
Route::get('/products/{id}', 'ProductController@show');
Route::get('/products', 'ProductController@getAll');
Route::get('/resellercity', 'ResellerCityController@getAll');
Route::get('/event', 'EventController@getAll');
Route::get('/header', 'HeaderController@getAll');