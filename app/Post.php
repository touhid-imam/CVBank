<?php

namespace App;


use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

    protected $fillable = [
        'user_id' ,'title', 'slug', 'image', 'decs', 'status', 'is_approved'
    ];


    use Sluggable;

    public function sluggable()
    {
        return [
            'slug' => [
                'source'    => 'title'
            ]
        ];
    }


    public function user()
    {
        return $this->belongsTo ('App\User');
    }

    public function categories()
    {
        return $this->belongsToMany ('App\Category')->withTimestamps ();
    }

    public function tags()
    {
        return $this->belongsToMany ('App\Tag')->withTimestamps ();
    }

}
