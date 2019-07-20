<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HobbyFactController extends Controller
{


    /**
     * Display a listing of the icons.
     *
     */

    public $icons = array('' => 'Choose Icon','li_heart' => 'Heart', 'li_cloud' => 'Cloud', 'li_star' => 'Star', 'li_tv' => 'TV', 'li_sound' => 'Sound', 'li_video' => 'Video', 'li_trash' => 'Trash', 'li_user' => 'User', 'li_key' => 'Key', 'li_search' => 'Search', 'li_settings' => 'Setting', 'li_camera' => 'Camera', 'li_tag' => 'Tag', 'li_lock' => 'Lock', 'li_bulb' => 'Bulb', 'li_pen' => 'Pen', 'li_diamond' => 'Diamond', 'li_display' => 'Display', 'li_location' => 'Location', 'li_eye' => 'Eye', 'li_bubble' => 'Bubble', 'li_cup' => 'Cup', 'li_phone' => 'Phone', 'li_news' => 'News', 'li_mail' => 'Mail', 'li_like' => 'Like', 'li_photo' => 'Photo', 'li_music' => 'Music', 'li_study' => 'Study', 'li_lab' => 'Lab', 'li_food' => 'Food', 'li_fire' => 'Fire', 'li_world' => 'World');


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {


        return view('admin.hobby-fact.index');
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
        //
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
