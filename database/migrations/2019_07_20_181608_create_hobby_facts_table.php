<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHobbyFactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hobby_facts', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->boolean('hobby_status')->default(false);
            $table->string('hobby_icon')->nullable ();
            $table->string ('hobby_text')->nullable ();
            $table->boolean ('fact_status')->default (false);
            $table->string ('fact_icon')->nullable ();
            $table->string ('fact_heading')->nullable ();
            $table->string('fact_tagline')->nullable ();
            $table->foreign('user_id')
                    ->references('id')->on('users')
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
        Schema::dropIfExists('hobby_facts');
    }
}
