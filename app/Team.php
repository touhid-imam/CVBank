<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = ['user_id','name', 'position', 'desc', 'facebook', 'linkedin', 'stackoverflow', 'dribble', 'github', 'image'];

    public function user(){
        return $this->belongsTo ('App\User');
    }
}
