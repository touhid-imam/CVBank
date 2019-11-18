<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class JobType extends Model
{

    public function users(){
        return $this->hasMany ('App\User','job_role', 'id');
    }

    public function jobPosts(){
        return $this->hasMany ('App\JobPost','type', 'id');
    }
}
