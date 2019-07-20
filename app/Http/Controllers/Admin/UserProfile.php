<?php

namespace App\Http\Controllers\Admin;

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

        return view('admin.profile.user', compact('user'));
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


}
