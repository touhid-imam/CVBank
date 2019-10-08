<?php

namespace App\Http\Controllers;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class SearchController extends Controller
{



    public function userSearch(Request $request){
        if($request->query){
            $query = $request->input ('query');
            $userProfiles = User::where('name', 'LIKE', "%".$query."%")->availability()->get();
        }

        return view('search', compact('userProfiles', 'query'));
    }


    public function liveSearch(Request $request){

        if($request->ajax ()){

            $output = '';
            $query = $request->get('query');

            if($query != ''){
                $results = User::where('name', 'like', '%'. $query . '%')->orWhere('username', 'like', '%'. $query . '%')->orWhere('email', 'like', '%'. $query . '%')->get();
                $total_item = $results->count();

                if($results){

                    foreach($results as $key => $result){

                        $output .=  '<div class="col-md-4">' .
                        '<div class="card mb-4 shadow-sm">' .
                            '<img src="'.  Storage::disk('public')->url('profile/front/' . $result->image)  .'" alt="">' .
                            '<div class="card-body">' .
                                '<h4>'. $result->name .'</h4>' .

                                '<p class="card-text">'. str_limit ($result->short_desc, 150) .'</p>' .
                                '<div class="d-flex justify-content-between align-items-center">'.
                                    '<div class="btn-group">' .
                                        '<a target="_blank" class="btn btn-sm btn-outline-secondary" href="'. route('profile', $result->username) .'">View</a>'

                                                                             . '</div>' .
                                    '<small class="text-muted">'. $result->updated_at->diffForHumans() .'</small>' .
                                '</div>
                            </div>
                        </div>
                    </div>' ;

                    }
                }

                $data = array(
                    'user_data'     => $output,
                    'total_data'    => $total_item
                );
                echo json_encode($data);
            }

        } else{
            echo json_encode(['no'=>'NOT FOUND....!!!']);
        }

    }

}
