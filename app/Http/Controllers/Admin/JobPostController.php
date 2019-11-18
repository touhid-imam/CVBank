<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\JobPost;
use App\JobType;
use Brian2694\Toastr\Facades\Toastr;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class JobPostController extends Controller
{

    public function index()
    {
        $adminJobs = JobPost::where('user_id', Auth::id())->latest()->get();
        $jobs = JobPost::where('user_id', '!=', Auth::id())->latest()->get();

        return view('admin.jobs.index', compact('adminJobs', 'jobs'));
    }


    public function create()
    {
        $job_types = JobType::latest()->get();
        $categories = Category::latest()->get();

        return view('admin.jobs.create', compact ('job_types', 'categories'));
    }


    public function store(Request $request)
    {
        $this->validate($request, [
            'title'         => 'required',
            'job_type'      => 'required',
            'category'      => 'required',
            'company'       => 'required',
            'location'      => 'required',
            'desc'          => 'required',
            'image'         => 'required'
        ]);

        $image = $request->file ('image');
        $slug = str_slug ($request->title);

        if (isset($image)) {
            // make unique image
            $currentDate = Carbon::now ()->toDateString ();
            $imageName = $slug . '-' . $currentDate . '-' . uniqid () . '.'.$image->getClientOriginalExtension ();

            if (!Storage::disk ('public')->exists ('jobs')) {
                Storage::disk ('public')->makeDirectory ('jobs');
            }

            $jobsImage = Image::make ($image)->resize (1500, 1024)->save();
            Storage::disk ('public')->put ('jobs/' .$imageName, $jobsImage);

        } else {

            $imageName = 'https://via.placeholder.com/1500/1024';

        }

        $jobPost = new JobPost();
        $jobPost->user_id = Auth::id();
        $jobPost->type   = $request->job_type;
        $jobPost->title = $request->title;
        $jobPost->company = $request->company;
        $jobPost->location = $request->location;
        $jobPost->desc = $request->desc;
        $jobPost->image = $imageName;
        if (isset($request->status)) {
            $jobPost->status = true;
        } else {
            $jobPost->status = false;
        }
        $jobPost->is_approved = true;

        $jobPost->save();
        $jobPost->categories ()->attach ($request->category);


        Toastr::success('Job Successfully Created!!', 'Success');
        return redirect ()->route('admin.jobs.index');
    }



    public function show($id)
    {
        $jobPost = JobPost::findOrFail($id);

        return view('admin.jobs.show', compact ('jobPost'));
    }



    public function edit($id)
    {
        $jobPost = JobPost::findOrFail($id);
        $job_types = JobType::latest()->get();
        $categories = Category::latest()->get();
        return view('admin.jobs.edit', compact ('jobPost', 'job_types', 'categories'));
    }



    public function update(Request $request, $id)
    {

        $this->validate($request, [
            'title'         => 'required',
            'job_type'      => 'required',
            'category'      => 'required',
            'company'       => 'required',
            'location'      => 'required',
            'desc'          => 'required',
        ]);

        $jobPost = JobPost::findOrFail($id);
        $image = $request->file ('image');
        $slug = str_slug ($request->title);

        if (isset($image)) {
            // make unique image
            $currentDate = Carbon::now ()->toDateString ();
            $imageName = $slug . '-' . $currentDate . '-' . uniqid () . '.'.$image->getClientOriginalExtension ();

            if (!Storage::disk ('public')->exists ('jobs')) {
                Storage::disk ('public')->makeDirectory ('jobs');
            }

            $jobsImage = Image::make ($image)->resize (1500, 1024)->save();
            Storage::disk ('public')->put ('jobs/' .$imageName, $jobsImage);

        } else {

            $imageName = $jobPost->image;

        }


        $jobPost->user_id = Auth::id();
        $jobPost->type   = $request->job_type;
        $jobPost->title = $request->title;
        $jobPost->company = $request->company;
        $jobPost->location = $request->location;
        $jobPost->desc = $request->desc;
        $jobPost->image = $imageName;
        if (isset($request->status)) {
            $jobPost->status = true;
        } else {
            $jobPost->status = false;
        }
        $jobPost->is_approved = true;

        $jobPost->save();
        $jobPost->categories ()->sync ($request->category);

        Toastr::success('Job Successfully Updated!!', 'Success');
        return redirect ()->route('admin.jobs.index');
    }



    public function destroy($id)
    {
        $jobPost = JobPost::findOrFail($id);

        if (Storage::disk('public')->exists ('jobs/' . $jobPost->image))
        {
            Storage::disk ('public')->delete ('jobs/' . $jobPost->image);
        }

        $jobPost->categories ()->detach();
        $jobPost->delete();

        Toastr::success('Job Successfully Deleted!!', 'Success');

        return redirect ()->back();
    }


    public function jobApproval($id){
        $jobPost = JobPost::findOrFail($id);

        if($jobPost->is_approved == false){

            $jobPost->is_approved = true;
            $jobPost->save();

            Toastr::success('Job Successfully Approved!!', 'Success');
        } else{
            Toastr::info('This Job is already Approve!!', 'info');
        }

        return redirect ()->back();
    }

    public function jobReject($id){
        $jobPost = JobPost::findOrFail($id);

        if($jobPost->is_approved == true){

            $jobPost->is_approved = false;
            $jobPost->save();

            Toastr::success('Job Successfully Rejected!!', 'Success');
        } else{
            Toastr::info('This Job is already Rejected!!', 'info');
        }

        return redirect ()->back();
    }

}
