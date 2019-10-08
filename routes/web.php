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



use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;



//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/', 'HomeController@index')->name('home');

Route::get('/user/{slug}', 'ProfileController@userProfile')->name('profile');
Route::get('/user/{slug}/profile-pdf', 'ProfileController@pdfView');
//Route::get('/user/{slug}/pdf', 'ProfileController@download');

Route::post('/sendmail/send', 'ProfileController@send')->name('sendEmail');
Route::get('/search', 'SearchController@userSearch')->name('userSearch');
Route::get('/search/live', 'SearchController@liveSearch')->name('live.search');

Route::get('/user/{username}/pdf', 'ProfileController@pdfMaker')->name('pdfDownload');

Auth::routes(['verify' => true]);

//Route::get('/home', 'HomeController@index')->name('home');

Route::group(['as' => 'admin.', 'prefix' => 'admin', 'namespace' => 'Admin', 'middleware' => ['auth', 'admin']], function(){

    route::get('dashboard', 'DashboardController@index')->name('dashboard');
    route::resource('users', 'UsersController');
    route::get('profile', 'UserProfile@index')->name('profile');
    route::patch('profile-update', 'UserProfile@profileUpdate')->name('profile.update');
    route::patch('password-update', 'UserProfile@passwordUpdate')->name('password-update');
    route::resource('hobbies-facts', 'HobbyFactController');
    route::resource('resumes', 'ResumesController');
    route::resource ('team', 'TeamController');
    route::resource('tag', 'TagController');
    route::resource('category', 'CategoryController');
    route::resource('post', 'PostController');
    route::resource('work', 'WorkController');
    route::resource('skill', 'SkillController');
    route::get('messages', 'MessagesController@index')->name('messages');
    route::get('message/{id}', 'MessagesController@show')->name('messageShow');
    route::delete('messages/{message}', 'MessagesController@destroy')->name('messageDelete');

    Route::get('/laravel-filemanager', '\UniSharp\LaravelFilemanager\Controllers\LfmController@show');
    Route::post('/laravel-filemanager/upload', '\UniSharp\LaravelFilemanager\Controllers\UploadController@upload');

});


Route::group(['as' => 'manager.', 'prefix' => 'manager', 'namespace' => 'Manager', 'middleware' => ['auth', 'manager']], function(){


    route::get('dashboard', 'DashboardController@index')->name('dashboard');


});

Route::group(['as' => 'jobseeker.', 'prefix' => 'jobseeker', 'namespace' => 'JobSeeker', 'middleware' => ['auth', 'jobseeker']], function(){


    route::get('dashboard', 'DashboardController@index')->name('dashboard');
    route::get('profile', 'UserProfile@index')->name('profile');
    route::patch('profile-update', 'UserProfile@profileUpdate')->name('profile.update');
    route::patch('password-update', 'UserProfile@passwordUpdate')->name('password-update');
    route::patch('personal-update', 'UserProfile@personalUpdate')->name('personal.update');
    route::resource('hobbies-facts', 'HobbyFactController');
    route::resource('resumes', 'ResumesController');
    route::resource ('team', 'TeamController');
    route::resource('post', 'PostController');
    route::resource('work', 'WorkController');
    route::resource('skill', 'SkillController');
    route::get('messages', 'MessagesController@index')->name('messages');
    route::get('messages/{message}', 'MessagesController@show')->name('messageShow');
    route::delete('messages/{message}', 'MessagesController@destroy')->name('messageDelete');


});




