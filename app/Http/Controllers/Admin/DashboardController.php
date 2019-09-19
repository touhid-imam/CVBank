<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\HobbyFacts;
use App\Post;
use App\Resume;
use App\Skill;
use App\Tag;
use App\Team;
use App\User;
use App\UserMessage;
use App\Work;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index(){

        $users = User::where('availability', 1)->get();
        $posts = Post::all();
        $categories = Category::all();
        $tags       = Tag::all();

        $userPosts = Post::where('user_id', Auth::id())->get()->count();
        $userHobbyFact = HobbyFacts::where('user_id', Auth::id())->get()->count();
        $userResume = Resume::where('user_id', Auth::id())->get()->count();
        $userTeam = Team::where('user_id', Auth::id())->get()->count();
        $userWork = Work::where('user_id', Auth::id())->get()->count();
        $userSkill = Skill::where('user_id', Auth::id())->get()->count();
        return view('admin.dashboard', compact('users', 'posts', 'categories', 'tags', 'userPosts', 'userHobbyFact', 'userResume', 'userTeam', 'userWork', 'userSkill'));
    }

}
