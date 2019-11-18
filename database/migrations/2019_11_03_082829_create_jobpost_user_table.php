<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobpostUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobpost_user', function (Blueprint $table) {
            $table->increments('id');
            $table->integer ('job_post_id')->unsigned ();
            $table->integer ('user_id');
            $table->foreign ('job_post_id')
                    ->references('id')->on('job_posts')
                    ->onDelete('cascade');
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
        Schema::dropIfExists('jobpost_user');
    }
}
