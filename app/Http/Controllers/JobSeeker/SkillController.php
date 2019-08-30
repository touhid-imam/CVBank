<?php

namespace App\Http\Controllers\JobSeeker;

use App\Category;
use App\Skill;
use App\Tag;
use App\work;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $skills = Auth::user()->skills()->latest()->get();
        return view('jobseeker.skill.index', compact('skills'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::latest()->get();
        $tags       = Tag::latest()->get();
        return view('jobseeker.skill.create', compact ('categories', 'tags'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate ($request, [
            'experience'        => 'required',
            'skill_level'      => 'required',
            'short_decs'        => 'required',
            'category'        => 'required',
            'tags'              => 'required',

        ]);

        $skill = $request->skill_level;
        if($skill >= 40 && $skill <= 69){
            $skill_level = "Beginner";
        } elseif($skill >= 70 && $skill <= 79){
            $skill_level = "Intermediate";
        } elseif($skill >= 80 && $skill <= 100){
            $skill_level = "Expert";
        } else{
            $skill_level = "Learning";
        }

        $skill = new Skill();
        $skill->user_id     = Auth::id();
        $skill->skill_level = $skill_level;
        $skill->skill_percent = $request->skill_level;
        $skill->experience = $request->experience;
        $skill->short_decs = $request->short_decs;
        $skill->save();

        $skill->categories ()->attach($request->category);
        $skill->tags ()->attach($request->tags);

        Toastr::success('Skill Successfully Saved!!', 'Success');
        return redirect ()->route('jobseeker.skill.index');

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function edit(skill $skill)
    {
        if($skill->user->id !== Auth::id()){
            Toastr::error('You are not authorised to access this Item!!', 'Error');

            return redirect()->back ();
        }

        $categories = Category::latest()->get();
        $tags       = Tag::latest()->get();
        return view('jobseeker.skill.edit', compact ('skill','categories', 'tags'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, skill $skill)
    {
        if($skill->user->id !== Auth::id()){
            Toastr::error('You are not authorised to access this Item!!', 'Error');

            return redirect()->back ();
        }

        $this->validate ($request, [
            'experience'        => 'required',
            'skill_level'      => 'required',
            'short_decs'        => 'required',
            'category'        => 'required',
            'tags'              => 'required',

        ]);

        $skill_percent = $request->skill_level;
        if($skill_percent >= 40 && $skill_percent <= 69){
            $skill_level = "Beginner";
        } elseif($skill_percent >= 70 && $skill_percent <= 79){
            $skill_level = "Intermediate";
        } elseif($skill_percent >= 80 && $skill_percent <= 100){
            $skill_level = "Expert";
        } else{
            $skill_level = "Learning";
        }

        $skill->user_id     = Auth::id();
        $skill->skill_level = $skill_level;
        $skill->skill_percent = $request->skill_level;
        $skill->experience = $request->experience;
        $skill->short_decs = $request->short_decs;
        $skill->save();

        $skill->categories ()->sync($request->category);
        $skill->tags ()->sync($request->tags);

        Toastr::success('Skill Successfully Updated!!', 'Success');
        return redirect ()->route('jobseeker.skill.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\skill  $skill
     * @return \Illuminate\Http\Response
     */
    public function destroy(skill $skill)
    {
        if($skill->user->id !== Auth::id()){
            Toastr::error('You are not authorised to access this Item!!', 'Error');

            return redirect()->back ();
        }
        $skill->categories ()->detach();
        $skill->tags ()->detach();

        $skill->delete();
        Toastr::success('Skill Successfully Deleted!!', 'Success');
        return redirect ()->back();

    }
}
