<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Personal extends Model
{
    protected $fillable = [ 'user_id', 'father_name', 'mother_name', 'date_of_birth', 'nationality', 'merital_status', 'sex', 'language', 'phone_num', 'email', 'present_address', 'permanent_address', ];

    public function user(){
        return $this->belongsTo ('App\User');
    }
}
