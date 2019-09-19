<?php

namespace App\Http\Controllers\Admin;

use App\UserMessage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SettingsController extends Controller
{


    public function emailStatus(){

        $userMessages = UserMessage::latest()->get();

        return view('layouts.backend.partials.topbar', compact ('userMessages'));
    }




}
