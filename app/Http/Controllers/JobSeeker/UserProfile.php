<?php

namespace App\Http\Controllers\JobSeeker;

use App\Personal;
use App\User;
use Brian2694\Toastr\Facades\Toastr;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class UserProfile extends Controller
{


    public function index(){

        $currentUser = Auth::user()->id;
        $user = User::findOrFail($currentUser);
        $awards = $user->resumes()->where('option', 3)->count();
        $personal = Personal::where('user_id', $currentUser)->firstOrFail();


        return view('jobseeker.profile.user', compact('user','awards', 'personal'));
    }


    public function profileUpdate(Request $request){
        $this->validate ($request, [
            'name'          => 'required',
            'email'         => 'required',
            'education'     => 'required',
            'location'      => 'required',
            'phone'         => 'required',
            'availability'  => 'required',
            'short_desc'    => 'required',
        ]);

        $image = $request->file('image');
        $slug  = str_slug($request->name);

        $user = User::findOrFail(Auth::id());


        if(isset($image)){
            // make unique name for image
            $currentDate    = Carbon::now()->toDateString();
            $imageName      = $slug . '-' . $currentDate . '-' . uniqid () . '.' . $image->getClientOriginalExtension ();


            // homepage users image


            if(!Storage::disk('public')->exists('profile/front')){

                Storage::disk('public')->makeDirectory ('profile/front');

            }

            // Delete old user image

            if(Storage::disk('public')->exists ('profile/front/'. $user->image)){
                Storage::disk('public')->delete('profile/front/'. $user->image);
            }

            // resize image for home block and upload

            $front = Image::make($image)->resize(348, 280)->save();
            Storage::disk('public')->put('profile/front/'.$imageName,$front);


            // Dashboard Profile Image

            if(!Storage::disk('public')->exists ('profile')){
                Storage::disk('public')->makeDirectory ('profile');
            }

            // Delete existing Image
            if(Storage::disk('public')->exists ('profile/'.$user->image)){

                Storage::disk('public')->delete ('profile/'.$user->image);

            }

            $profileImage = Image::make($image)->resize(90, 90)->save();
            Storage::disk('public')->put('profile/'.$imageName, $profileImage);


        } else{
            $imageName = $user->image;
        }


        $user->name         = $request->name;
        $user->email        = $request->email;
        $user->education    = $request->education;
        $user->location     = $request->location;
        $user->phone        = $request->phone;
        $user->video        = $request->video;
        $user->availability = $request->availability;
        $user->short_desc   = $request->short_desc;
        $user->image        = $imageName;
        $user->save();

        Toastr::success('Your Profile Successfully Updated', 'Success');

        return redirect ()->back();
    }


    public function passwordUpdate(Request $request){

        $this->validate ($request, [
            'old_password'      => 'required',
            'password'          => 'required|confirmed'
        ]);

        $hashedPassword = Auth::user()->password;

        if(Hash::check($request->old_password, $hashedPassword)){

            if(!Hash::check ($request->password, $hashedPassword)){
                $user = User::findOrFail(Auth::id());
                $user->password = Hash::make($request->password);
                $user->save();


                Toastr::success('Password Successfully Updated!!', 'Success');
                Auth::logout();
                return redirect ()->back ();
            } else{

                Toastr::error('Old Password and New Password can not be same!!', 'Error');
                return redirect ()->back();
            }

        } else{
            Toastr::error('Current Password not matched', 'Error');
            return redirect ()->back();
        }

    }

    public function personalUpdate(Request $request)
    {
        $this->validate ($request, [
            'father_name' => 'required',
            'mother_name' => 'required',
            'date_of_birth' => 'required',
            'nationality' => 'required',
            'merital_status' => 'required',
            'sex' => 'required',
            'language' => 'required',
            'phone_num' => 'required',
            'email' => 'required',
            'present_address' => 'required',
            'permanent_address' => 'required',
        ]);


        $personal = Personal::findOrFail($request->id);
        $personal->father_name          = $request->father_name;
        $personal->mother_name          = $request->mother_name;
        $personal->date_of_birth        = $request->date_of_birth;
        $personal->nationality          = $request->nationality;
        $personal->merital_status       = $request->merital_status;
        $personal->sex                  = $request->sex;
        $personal->language             = $request->language;
        $personal->phone_num            = $request->phone_num;
        $personal->email                = $request->email;
        $personal->present_address      = $request->present_address;
        $personal->permanent_address    = $request->permanent_address;
        $personal->save();

        Toastr::success('Your Personal information Updated', 'Success');

        return redirect ()->back();

    }





}
