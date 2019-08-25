<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'role_id', 'email', 'education', 'location', 'phone', 'availability', 'short_desc', 'image'
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

}
