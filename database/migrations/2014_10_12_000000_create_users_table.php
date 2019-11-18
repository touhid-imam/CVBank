<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer ('role_id')->nullable();
            $table->integer('job_role')->deafult(1);
            $table->string('name');
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->string('education')->nullable ();
            $table->string('location')->nullable ();
            $table->string('phone')->nullable ();
            $table->string ('video')->nullable();
            $table->boolean('availability')->default (false);
            $table->boolean('status')->default (false);
            $table->mediumText('short_desc')->nullable ();
            $table->string('image')->default('default.png');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
