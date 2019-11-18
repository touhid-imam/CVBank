<?php

namespace App\Http\Controllers;

use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavouriteController extends Controller
{


    public function add(Request $request)
    {
        if($request->ajax()){

            $user = Auth::user();
            $isFavourite = $user->favourite_job_posts()->where('job_post_id', $request->post)->count();
            if($isFavourite == 0){
                $user->favourite_job_posts()->attach($request->post);

                return response ()->json (['class' => 1]);
            } else{
                $user->favourite_job_posts()->detach($request->post);

                return response ()->json (['class' => 0]);
            }

        }

    }
}
