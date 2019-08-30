<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Work;
use Brian2694\Toastr\Facades\Toastr;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class WorkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $works = Work::latest()->get();
        return view('admin.work.index', compact ('works'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::latest()->get();

        return view('admin.work.create', compact('categories'));
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
            'title'         => 'required',
            'category'    => 'required',
            'desc'          => 'required',
            'image'         => 'required'
        ]);

        $image = $request->file('image');
        $slug  = str_slug($request->title);

        if (isset($image)) {
            // make unique image
            $currentDate = Carbon::now ()->toDateString ();
            $imageName = $slug . '-' . $currentDate . '-' . uniqid () . '.'.$image->getClientOriginalExtension ();

            if (!Storage::disk ('public')->exists ('work')) {
                Storage::disk ('public')->makeDirectory ('work');
            }

            $workImage = Image::make ($image)->resize (560, 420)->save();
            Storage::disk ('public')->put ('work/' .$imageName, $workImage);

        } else {

            $imageName = 'default.png';

        }

        $work = new Work();
        $work->user_id = Auth::id ();
        $work->title = $request->title;
        $work->slug = $slug;
        $work->image = $imageName;
        $work->desc = $request->desc;
        if (isset($request->status)) {
            $work->status = true;
        } else {
            $work->status = false;
        }
        $work->save ();

        $work->categories ()->attach ($request->category);


        Toastr::success('Work Successfully Saved!!', 'Success');
        return redirect ()->route('admin.work.index');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Work  $work
     * @return \Illuminate\Http\Response
     */
    public function show(Work $work)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Work  $work
     * @return \Illuminate\Http\Response
     */
    public function edit(Work $work)
    {
        $categories = Category::latest()->get();

        return view('admin.work.edit', compact ('work', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Work  $work
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Work $work)
    {
        $this->validate ($request, [
            'title'         => 'required',
            'category'    => 'required',
            'desc'          => 'required'
        ]);

        $image = $request->file('image');
        $slug  = str_slug($request->title);

        if (isset($image)) {
            // make unique image
            $currentDate = Carbon::now ()->toDateString ();
            $imageName = $slug . '-' . $currentDate . '-' . uniqid () . '.'.$image->getClientOriginalExtension ();

            if (!Storage::disk ('public')->exists ('work')) {
                Storage::disk ('public')->makeDirectory ('work');
            }

            if (Storage::disk('public')->exists ('work/' . $work->image))
            {
                Storage::disk ('public')->delete ('work/' . $work->image);
            }

            $workImage = Image::make ($image)->resize (560, 420)->save();
            Storage::disk ('public')->put ('work/' .$imageName, $workImage);

        } else {

            $imageName = $work->image;

        }

        $work->user_id = Auth::id ();
        $work->title = $request->title;
        $work->slug = $slug;
        $work->image = $imageName;
        $work->desc = $request->desc;
        if (isset($request->status)) {
            $work->status = true;
        } else {
            $work->status = false;
        }
        $work->save ();

        $work->categories ()->sync ($request->category);


        Toastr::success('Work Successfully Updated!!', 'Update');
        return redirect ()->route('admin.work.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Work  $work
     * @return \Illuminate\Http\Response
     */
    public function destroy(Work $work)
    {
        if (Storage::disk('public')->exists ('work/' . $work->image))
        {
            Storage::disk ('public')->delete ('work/' . $work->image);
        }

        $work->categories ()->detach();

        $work->delete();

        Toastr::success('Work Successfully Deleted!!', 'Deleted');

        return redirect ()->back();
    }
}
