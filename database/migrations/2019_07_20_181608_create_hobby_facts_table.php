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
            $table->string('hobby_icon')->default('li_pen');
            $table->string ('hobby_text');
            $table->boolean('hobby_status')->default(false);
            $table->string ('fact_icon')->default ('li_like');
            $table->string ('fact_heading');
            $table->string('fact_tagline');
            $table->boolean ('fact-status')->default (false);
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
