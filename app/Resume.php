<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    protected $fillable = ['user_id','option', 'title', 'university_org', 'location', 'start', 'end', 'desc'];


    public function user(){
        return $this->belongsTo ('App\User');
    }

}
