<?php

namespace App\Http\Controllers;


use App\Category;
use App\HobbyFacts;
use App\Mail\SendMail;
use App\Post;
use App\Resume;
use App\Skill;
use App\Tag;
use App\Team;
use App\User;
use App\UserMessage;
use App\Work;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;



class ProfileController extends Controller
{

    public function userProfile($username){

        $user = User::where('username', $username)->first();
        $hobbyFacts = HobbyFacts::where('user_id', $user->id)->get();
        $resumes = Resume::where('user_id', $user->id)->get();
        $categories = Category::latest()->get();
        $posts  = Post::where('user_id', $user->id)->paginate(5);
        $teamMembers = Team::where('user_id', $user->id)->get();
        $skills = Skill::where('user_id', $user->id)->get();
        $works = Work::where('user_id', $user->id)->get();

        if($user->availability == 0){
            return redirect ()->back();
        }

        return view('user.index', compact('user', 'hobbyFacts', 'resumes', 'categories', 'posts', 'teamMembers', 'skills', 'works'));
    }

    public function pdfView($username){
            $user = User::where('username', $username)->first();

            return view('pdf', compact ('user'));
    }

    public function download($username){
        $user = User::where('username', $username)->first();

        return view('pdf', compact ('user'));
    }



    public function pdfMaker($username){
        $user = User::where('username', $username)->first();
        $resumes = Resume::where('user_id',$user->id)->where('option', 1)->paginate(3);
        $skills = Skill::where('user_id', $user->id)->latest()->paginate(3);
        $pdf = \PDF::loadView('profilepdf', ['user' => $user, 'resumes' => $resumes, 'skills' => $skills])->setPaper('a4')->setOrientation('portrait');
        $pdf->setOption('enable-javascript', true);
        $pdf->setOption('javascript-delay', 5000);
        $pdf->setOption('enable-smart-shrinking', true);
        $pdf->setOption('no-stop-slow-scripts', true);
        $fileName = $user->name;
        return $pdf->stream($fileName . '.pdf');

//        $pdfMake = PDF::loadView('profilepdf', ['user' => $user])->setPaper ('a4', 'portrait');
//        $fileName = $user->name;
//        return $pdfMake->stream($fileName . '.pdf');
    }



    public function send(Request $request){
        $this->validate ($request, [
            'name'          => 'required',
            'email'         => 'required',
            'message'       => 'required',
            'userId'        => 'required'
        ]);

        $user = User::where('id', $request->userId)->first();
        $data = array(
            'name'      => $request->name,
            'email'     => $request->email,
            'message'   => $request->message
        );

        Mail::to($user->email)->send(new SendMail($data));

        $usermsg = new UserMessage();
        $usermsg->user_id   = $request->userId;
        $usermsg->name      = $request->name;
        $usermsg->email      = $request->email;
        $usermsg->message      = $request->message;
        $usermsg->save();

        return redirect ()->back ()->with('emailSend', 'Thanks for your message!!');

    }


}
