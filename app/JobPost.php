<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class JobPost extends Model
{
    protected $fillable = [
        'type', 'title', 'slug', 'company', 'location', 'desc', 'image', 'status', 'is_approved'
    ];

    use Sluggable;

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function user(){
        return $this->belongsTo ('App\User');
    }

    public function job_type()
    {
        return $this->belongsTo ('App\JobType', 'type', 'id');
    }

    public function categories()
    {
        return $this->belongsToMany ('App\Category', 'category_jobpost', 'jobpost_id', 'category_id')->withTimestamps ();
    }

    public function favourite_to_users(){
        return $this->belongsToMany ('App\User', 'jobpost_user', 'job_post_id', 'user_id')->withTimestamps ();
    }


    // Local Scope

    public function scopeStatus($query){
        return $query->where('status', 1);
    }

    public function scopeIsApproved($approved){
        return $approved->where('is_approved', 1);
    }

}
