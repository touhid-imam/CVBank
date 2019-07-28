<?php

namespace App\Http\Controllers\Admin;

use App\Resume;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ResumesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $resumes = Resume::latest()->get();
        return view('admin.resumes.index', compact('resumes'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.resumes.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        $this->validate ($request, [
//            'option'                    => 'required',
//            'title'                     => 'required',
//            'university_organization'   => 'required',
//            'location'                  => 'required',
//            'starting'             => 'required',
//            'ending'               => 'required',
//            'description'               => 'required',
//        ]);

        $starting_date  = date('Y-m-d', strtotime ($request->starting));
        $ending_date    = date('Y-m-d', strtotime ($request->ending));

        $resume                    = new Resume();
        $resume->user_id           = Auth::id();
        $resume->option            = $request->option;
        $resume->title             = $request->title;
        $resume->university_org    = $request->university_org;
        $resume->location          = $request->location;
        $resume->start             = $starting_date;
        $resume->end               = $ending_date;
        $resume->desc              = $request->desc;
        $resume->save();

        Toastr::success('Resume Successfully Created', 'Success');
        return redirect ()->route ('admin.resumes.index');
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