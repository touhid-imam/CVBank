<?php

namespace App\Http\Controllers\Admin;

use App\Team;
use Brian2694\Toastr\Facades\Toastr;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $teams = Team::latest()->get();
        return view('admin.team.index', compact ('teams'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return view('admin.team.create');
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
            'name'          => 'required',
            'position'      => 'required',
            'desc'          => 'required',
            'image'         => 'required'
        ]);

        $image = $request->file('image');
        $slug = str_slug ($request->name);

        if(isset($image)){
            // make unique name for image
            $currentDate = Carbon::now ()->toDateString ();
            $imageName   = $slug . '-' . $currentDate . '-' . uniqid () . '.' . $image->getClientOriginalExtension ();

            if(!Storage::disk ('public')->exists ('team')){
                Storage::disk('public')->makeDirectory ('team');
            }

            $teamImage = Image::make($image)->resize (220, 300)->save();
            Storage::disk('public')->put ('team/'. $imageName, $teamImage);
        } else{
            $imageName = "https://via.placeholder.com/220x300";
        }

        $team = new Team();
        $team->user_id          = Auth::id ();
        $team->name             = $request->name;
        $team->position         = $request->position;
        $team->facebook         = $request->facebook;
        $team->linkedin         = $request->linkedin;
        $team->stackoverflow    = $request->stactoverflow;
        $team->dribble          = $request->dribble;
        $team->github           = $request->github;
        $team->desc             = $request->desc;
        $team->image            = $imageName;
        $team->save();


        Toastr::success('User Successfully Created', 'Success');
        return redirect()->route('admin.team.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $team = Team::findOrFail($id);
        return view('admin.team.edit', compact ('team'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $team = Team::findOrFail($id);
        if(Storage::disk ('public')->exists ('team/' . $team->image))
        {
            Storage::disk('public')->delete('team/'. $team->image);
        }

        $team->delete();
        Toastr::success('Team Member Successfully Deleted!', 'Success');

        return redirect ()->back ();
    }
}
