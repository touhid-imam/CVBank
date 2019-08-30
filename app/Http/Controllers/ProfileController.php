<?php

namespace App\Http\Controllers;

use App\Category;
use App\HobbyFacts;
use App\Post;
use App\Resume;
use App\Skill;
use App\Tag;
use App\Team;
use App\User;
use App\Work;
use Illuminate\Http\Request;

class ProfileController extends Controller
{

    public function userProfile($slug){

        $user = User::where('slug', $slug)->first();
        $hobbyFacts = HobbyFacts::where('user_id', $user->id)->get();
        $resumes = Resume::where('user_id', $user->id)->get();
        $categories = Category::latest()->get();
        $posts  = Post::where('user_id', $user->id)->paginate(5);
        $teamMembers = Team::where('user_id', $user->id)->get();
        $skills = Skill::where('user_id', $user->id)->get();
        $works = Work::where('user_id', $user->id)->get();

        if($user->availability == 0){
            return redirect ()->back();
        }

        return view('user.index', compact('user', 'hobbyFacts', 'resumes', 'categories', 'posts', 'teamMembers', 'skills', 'works'));
    }
}
