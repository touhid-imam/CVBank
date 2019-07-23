<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HobbyFacts extends Model
{
    protected $fillable = [
        'user_id', 'hobby_icon', 'hobby_text', 'hobby_status', 'fact_icon', 'fact_heading', 'fact_tagline', 'fact-status'
    ];

    public function user(){
        return $this->belongsTo ('App\User');
    }
}
