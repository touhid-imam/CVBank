<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class UserMessage extends Model
{

    public function user()
    {
        return $this->belongsTo ('App\User');
    }


    public static function updateData($id, $data){

        DB::table('user_messages')->where('id', $id)->update($data);

    }
}
