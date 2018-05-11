<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

//Route for vouchers
Route::get('/voucher', function() {
    return view('voucher');
});

Route::get('/test', function() {
    $title = setting('site.title');
    var_dump($title);
    return  $title;
});