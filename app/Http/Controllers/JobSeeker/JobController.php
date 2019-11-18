<?php

namespace App\Http\Controllers\JobSeeker;



use App\Http\Controllers\Controller;

use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class JobController extends Controller
{


    public function index(){

        $fav_posts = Auth::user()->favourite_job_posts;

        return view('jobseeker.jobs.index', compact ('fav_posts'));
    }



    public function update(Request $request){
        $user = Auth::user();
        $isFavourite = $user->favourite_job_posts()->where('job_post_id', $request->fav_update)->count();

        if($isFavourite == 1){
            $user->favourite_job_posts()->detach($request->fav_update);

            Toastr::success('Favourite Job Removed!!', 'Success');
            return redirect ()->back();
        }

        return redirect ()->back();

    }



}
