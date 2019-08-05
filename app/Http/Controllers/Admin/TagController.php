<?php

namespace App\Http\Controllers\Admin;

use App\Tag;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tags = Tag::latest()->get();

        return view('admin.tag.index', compact('tags'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name'      => 'required',
        ]);

        $tag = new Tag();
        $tag->name  = $request->name;
        $tag->slug  = str_slug ($request->name);
        $tag->save();

        Toastr::success('Tag Successfully Saved', 'Success');
        return redirect ()->back ();
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
        $this->validate($request, [
            'name'      => 'required',
        ]);

        $tag        = Tag::findOrFail($id);
        $tag->name  = $request->name;
        $tag->slug  = str_slug ($request->name);
        $tag->save();

        Toastr::success('Tag Successfully Updated', 'Success');
        return redirect ()->back ();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tag = Tag::findOrFail($id);
        $tag->delete();

        Toastr::success('Tag Successfully Deleted', 'Success');
        return redirect ()->back ();
    }
}
