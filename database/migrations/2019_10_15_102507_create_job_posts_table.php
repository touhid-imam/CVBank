<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_posts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned ();
            $table->integer ('type');
            $table->string ('title');
            $table->string ('slug');
            $table->string ('company');
            $table->string ('location');
            $table->text ('desc');
            $table->string ('image');
            $table->boolean('status')->default (false);
            $table->boolean('is_approved')->default (false);
            $table->timestamps();
            $table->foreign ('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_posts');
    }
}
