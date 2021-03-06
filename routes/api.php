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

Route::any('{model}/{action}', function($model,$action){
    $controller = '\App\Http\Controllers\\' . ucfirst($model) . 'sController';
    // dd($action, $controller, $model);
    return (new $controller($model))->$action();
});

Route::post('/register','Auth\RegisterController@register');
Route::post('/login', 'Auth\LoginController@login');
Route::post('/logout', 'Auth\LoginController@logout');
Route::post('/refresh', 'Auth\LoginController@refresh');

Route::post('/userProfileUpdate', 'ProfileController@update')->middleware('auth:api');
Route::post('/userPasswordUpdate', 'PasswordController@update')->middleware('auth:api');
