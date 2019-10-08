<?php

namespace App\Http\Controllers\JobSeeker;

use App\HobbyFacts;
use App\Post;
use App\Resume;
use App\Skill;
use App\Team;
use App\Work;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{

    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }

    public function index(){
        $userPosts = Post::where('user_id', Auth::id())->get()->count();
        $userHobbyFact = HobbyFacts::where('user_id', Auth::id())->get()->count();
        $userResume = Resume::where('user_id', Auth::id())->get()->count();
        $userTeam = Team::where('user_id', Auth::id())->get()->count();
        $userWork = Work::where('user_id', Auth::id())->get()->count();
        $userSkill = Skill::where('user_id', Auth::id())->get()->count();


        return view('jobseeker.dashboard', compact('userPosts', 'userHobbyFact', 'userResume', 'userTeam', 'userWork', 'userSkill'));
    }
}
