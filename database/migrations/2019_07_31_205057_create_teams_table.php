<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teams', function (Blueprint $table) {
            $table->increments('id');
            $table->integer ('user_id')->unsigned ();
            $table->string ('name');
            $table->string ('position');
            $table->text ('desc');
            $table->string ('facebook')->nullable ();
            $table->string ('linkedin')->nullable ();
            $table->string ('stackoverflow')->nullable ();
            $table->string ('dribble')->nullable ();
            $table->string ('github')->nullable ();
            $table->string ('image');
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
        Schema::dropIfExists('teams');
    }
}
