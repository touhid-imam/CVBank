<?php

namespace App\Http\Controllers;

use App\JobPost;
use App\JobType;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class SearchController extends Controller
{



    public function userSearch(Request $request){

        if($request->query || $request->job_role || $request->job_location){
            $query          = $request->input ('query');
            $job_role       = $request->input ('job_role');
            $job_location    = $request->input ('job_location');


            $userProfiles = User::where('name', 'LIKE', "%".$query."%")->where('job_role', $job_role)->where('location', 'LIKE', "%". $job_location."%")->availability()->get();
        }

        $job_types = JobType::all();
        return view('candidate-search', compact('userProfiles', 'query', 'job_types', 'job_role', 'job_location'));

    }


    public function jobSearch(Request $request){

        if($request->job_name || $request->job_role || $request->job_location){
            $jobName          = $request->input ('job_name');
            $job_role       = $request->input ('job_role');
            $job_location    = $request->input ('job_location');


            $jobList = JobPost::where("title", "LIKE", "%" . $jobName . "%")->where('type', $job_role)->where("location", "LIKE", "%" . $job_location . "%")->status()->isApproved()->get();

        }

        $job_types = JobType::all();
        return view('job-search', compact('jobList','jobName', 'job_types', 'job_role', 'job_location'));

    }



}
