<?php

namespace App\Http\Controllers\Admin;

use App\Role;
use App\User;

use Brian2694\Toastr\Facades\Toastr;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class UsersController extends Controller
{

    public function index(){

        $users = User::latest()->get();
        return view('admin.users.index', compact('users'));
    }

    public function create(){
        $users_role = Role::pluck('id', 'name');

        return view('admin.users.create', compact('users_role'));
    }

    public function store(Request $request){
        $this->validate ($request, [
            'name'          => 'required',
            'username'      => 'required',
            'role_id'       => 'required',
            'email'         => 'required',
            'location'      => 'required',
            'phone'         => 'required',
            'image'         => 'required',
            'password'      => ['required', 'string', 'min:8', 'confirmed']
        ]);

        $image  = $request->file('image');
        $slug   = str_slug($request->name);

        if(isset($image)){
            // make unique name for image
            $currentDate    = Carbon::now()->toDateString();
            $imageName      = $slug . '-' . $currentDate . '-' . uniqid () .'.'.$image->getClientOriginalExtension();

        if(!Storage::disk('public')->exists ('profile')){
                Storage::disk ('public')->makeDirectory ('profile');
            }

            $profileImage = Image::make($image)->resize(150, 150)->save();
            Storage::disk('public')->put('profile/'. $imageName, $profileImage);
        } else{
            $imageName = 'default.png';
        }


        $user = new User();
        $user->name         = $request->name;
        $user->username     = $request->username;
        $user->role_id      = $request->role_id;
        $user->email        = $request->email;
        $user->education    = $request->education;
        $user->location     = $request->location;
        $user->phone        = $request->phone;
        $user->availability = $request->availability;
        $user->short_desc   = $request->short_desc;
        $user->image        = $imageName;
        $user->password     = Hash::make($request->password);
        $user->save ();

        Toastr::success('User Successfully Created', 'Success');
        return redirect ()->route ('admin.users.index');
    }


    public function edit(User $user){

        $users_role = Role::pluck('id', 'name');

        return view('admin.users.edit', compact('user', 'users_role'));
    }


    public function update(Request $request, User $user){
        $this->validate ($request, [
            'name'          => 'required',
            'role_id'       => 'required',
            'education'     => 'required',
            'email'         => 'required',
            'location'      => 'required',
            'availability'  => 'required',
            'phone'         => 'required',
        ]);

        $image  = $request->file('image');
        $slug   = str_slug($request->name);

        $hashedPassword = Auth::user()->password;

        if(isset($image)){
            // make unique name for image
            $currentDate    = Carbon::now()->toDateString();
            $imageName      = $slug . '-' . $currentDate . '-' . uniqid () .'.'.$image->getClientOriginalExtension();

            if(!Storage::disk('public')->exists ('profile')){
                Storage::disk ('public')->makeDirectory ('profile');
            }

            // Delete old post image

            if(Storage::disk('public')->exists ('profile/'. $user->image)){
                Storage::disk('public')->delete('profile/'. $user->image);
            }


            $profileImage = Image::make($image)->resize(150, 150)->save();
            Storage::disk('public')->put('profile/'. $imageName, $profileImage);
        } else{
            $imageName = $user->image;
        }

        $user->name         = $request->name;
        $user->role_id      = $request->role_id;
        $user->email        = $request->email;
        $user->education    = $request->education;
        $user->location     = $request->location;
        $user->phone        = $request->phone;
        $user->availability = $request->availability;
        $user->short_desc   = $request->short_desc;
        $user->image        = $imageName;
        $user->password     = $request->password ? Hash::make($request->password) : $hashedPassword;
        $user->save();
        Toastr::success('User info. Successfully Updated', 'Success');
        return redirect ()->route ('admin.users.index');


    }


    public function show(User $user){

        return view('admin.users.show', compact ('user'));
    }


    public function destroy($id){

        $user = User::findOrFail($id);
        if(Storage::disk ('public')->exists ('profile/' . $user->image))
        {
            Storage::disk('public')->delete('profile/'. $user->image);
        }

        $user->delete();
        Toastr::success('User Successfully Deleted!', 'Success');

        return redirect ()->back ();
    }





}
