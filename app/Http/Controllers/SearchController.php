<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class SearchController extends Controller
{



    public function userSearch(Request $request){
        if($request->query){
            $query = $request->input ('query');
            $userProfiles = User::where('name', 'LIKE', "%$query%")->availability()->get();
        }

        return view('search', compact('userProfiles', 'query'));
    }

}
