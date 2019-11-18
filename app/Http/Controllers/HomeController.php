<?php

namespace App\Http\Controllers;

use App\Category;
use App\JobPost;
use App\JobType;
use App\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
//    public function __construct()
//    {
//        $this->middleware(['auth','verified']);
//    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function index()
    {
        $users = User::latest()->paginate(9);
        $job_roles = JobType::latest()->get();
        $jobPosts = JobPost::latest()->status()->isApproved()->paginate(8);
        $categories = Category::latest()->get();

        return view('welcome', compact ('users', 'job_roles', 'jobPosts', 'categories'));
    }
}
