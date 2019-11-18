<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    public function posts()
    {
        return $this->belongsToMany ('App\Post')->withTimestamps ();
    }

    public function works()
    {
        return $this->belongsToMany ('App\Work')->withTimestamps ();
    }

    public function skills()
    {
        return $this->belongsToMany ('App\Skill')->withTimestamps ();
    }

    public function jobPosts(){
        return $this->belongsToMany ('App\JobPost', 'category_jobpost', 'category_id', 'jobpost_id')->withTimestamps ();
    }
}
