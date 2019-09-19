<?php

namespace App\Http\Controllers\Admin;

use App\UserMessage;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class MessagesController extends Controller
{
    public function index(){

        $messages = UserMessage::where('user_id', Auth::id())->latest()->paginate(30);

        return view('admin.message.index', compact('messages'));
    }


    public function show($id){

        $message = UserMessage::where('user_id', Auth::id())->findOrFail($id);
        if($message->status == 0){
            $message->status = 1;
            $message->save();
        }

        return view('admin.message.show', compact('message'));
    }

    public function destroy($id){

        $userMessage = UserMessage::findOrFail($id);
        $userMessage->delete();

        Toastr::success('Message Successfully Deleted!!', 'Success');

        return redirect ()->back();
    }


}
