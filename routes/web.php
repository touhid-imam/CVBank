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
    return view('welcome');
});

Auth::routes();

Route::group(['as' => 'admin.', 'prefix' => 'admin', 'namespace' => 'Admin', 'middleware' => ['auth', 'admin']], function(){

    route::get('dashboard', 'DashboardController@index')->name('dashboard');
    route::resource('users', 'UsersController');
    route::get('profile', 'UserProfile@index')->name('profile');
    route::patch('profile-update', 'UserProfile@profileUpdate')->name('profile.update');
    route::patch('password-update', 'UserProfile@passwordUpdate')->name('password-update');


});


Route::group(['as' => 'manager.', 'prefix' => 'manager', 'namespace' => 'Manager', 'middleware' => ['auth', 'manager']], function(){


    route::get('dashboard', 'DashboardController@index')->name('dashboard');


});

Route::group(['as' => 'jobseeker.', 'prefix' => 'jobseeker', 'namespace' => 'JobSeeker', 'middleware' => ['auth', 'jobseeker']], function(){


    route::get('dashboard', 'DashboardController@index')->name('dashboard');


});


Route::get('/front', function () {
    return view('front.index');
});


Route::get('/home', 'HomeController@index')->name('home');
