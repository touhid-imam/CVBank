<?php

namespace App\Http\Controllers\Admin;

use App\HobbyFacts;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class HobbyFactController extends Controller
{


    /**
     * Display a listing of the icons.
     *
     */

    public $icons = array('li_heart' => 'Heart', 'li_cloud' => 'Cloud', 'li_star' => 'Star', 'li_tv' => 'TV', 'li_sound' => 'Sound', 'li_video' => 'Video', 'li_trash' => 'Trash', 'li_user' => 'User', 'li_key' => 'Key', 'li_search' => 'Search', 'li_settings' => 'Setting', 'li_camera' => 'Camera', 'li_tag' => 'Tag', 'li_lock' => 'Lock', 'li_bulb' => 'Bulb', 'li_pen' => 'Pen', 'li_diamond' => 'Diamond', 'li_display' => 'Display', 'li_location' => 'Location', 'li_eye' => 'Eye', 'li_bubble' => 'Bubble', 'li_cup' => 'Cup', 'li_phone' => 'Phone', 'li_news' => 'News', 'li_mail' => 'Mail', 'li_like' => 'Like', 'li_photo' => 'Photo', 'li_music' => 'Music', 'li_study' => 'Study', 'li_lab' => 'Lab', 'li_food' => 'Food', 'li_fire' => 'Fire', 'li_world' => 'World');


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $hobbyFacts = HobbyFacts::latest()->get();

        return view('admin.hobby-fact.index', compact('hobbyFacts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $icon_options = $this->icons;
        return view('admin.hobby-fact.create', compact('icon_options'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(!(isset($request->hobby_status)) &&!(isset($request->fact_status))){
            $this->validate ($request, [
                'hobby_icon'    => 'required',
                'hobby_text'    => 'required',
                'fact_icon'     => 'required',
                'fact_heading'  => 'required',
                'fact_tagline'  => 'required'
            ]);
        } elseif(isset($request->hobby_status) && !(isset($request->fact_status))){
            $this->validate ($request, [
                'hobby_icon' => 'required',
                'hobby_text' => 'required'
            ]);
        } elseif(isset($request->fact_status) && !(isset($request->hobby_status))){
            $this->validate ($request, [
                'fact_icon'     => 'required',
                'fact_heading'  => 'required',
                'fact_tagline'  => 'required'
            ]);
        }

        $hobbyFact = new HobbyFacts();
        $hobbyFact->user_id = Auth::id();
        if(isset($request->hobby_status)){
            $hobbyFact->hobby_status = true;
            $hobbyFact->hobby_icon = $request->hobby_icon;
            $hobbyFact->hobby_icon = $request->hobby_icon;
            $hobbyFact->hobby_text = $request->hobby_text;
        } else{
            $hobbyFact->hobby_status = false;
        }
        if(isset($request->fact_status)){
            $hobbyFact->fact_status      = true;
            $hobbyFact->fact_icon       = $request->fact_icon;
            $hobbyFact->fact_heading    = $request->fact_heading;
            $hobbyFact->fact_tagline    = $request->fact_tagline;
        } else{
            $hobbyFact->fact_status      = false;
        }

        $hobbyFact->save ();

        Toastr::success('Fact and Hobby Successfully Created', 'Success');
        return redirect ()->route ('admin.hobbies-facts.index');

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
        //
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
        //
    }
}
