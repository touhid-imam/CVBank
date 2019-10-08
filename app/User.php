<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'slug', 'username', 'role_id', 'email', 'education', 'location', 'phone', 'availability', 'short_desc', 'image', 'password', 'created_at', 'updated_at',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function role()
    {
        return $this->belongsTo ('App\Role');
    }

    public function hobby_facts(){
        return $this->hasMany ('App\HobbyFacts');
    }

    public function resumes(){
        return $this->hasMany ('App\Resume');
    }

    public function teams(){
        return $this->hasMany ('App\Team');
    }

    public function posts(){
        return $this->hasMany ('App\Post');
    }

    public function works(){
        return $this->hasMany('App\Work');
    }

    public function skills(){
        return $this->hasMany ('App\Skill');
    }

    public function message()
    {
        return $this->hasMany ('App\UserMessage');
    }

    public function personal(){
        return $this->hasMany ('App\Personal');
    }


    // Local Scope

    public function scopeAvailability($query){
        return $query->where('availability', 1);
    }


}
