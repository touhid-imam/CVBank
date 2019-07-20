<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HobbyFacts extends Model
{
    public function user(){
        return $this->belongsTo ('App/User');
    }
}
