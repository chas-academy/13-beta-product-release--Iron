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

Route::get('/products/{id}', 'ProductController@show');
Route::get('/products', 'ProductController@getAll');
Route::get('/reseller', 'ResellerController@getAll');
Route::get('/resellercity', 'ResellerCityController@getAll');
Route::get('/event', 'EventController@getAll');
Route::get('/header', 'HeaderController@getAll');
Route::get('/vision', 'VisionController@getAll');
Route::get('/banner', 'VisionController@getBanner');
Route::get('/voucher', 'VoucherController@getAll');
