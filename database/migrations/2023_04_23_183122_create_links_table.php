<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // this link has only one column which is for live links
        Schema::create('links', function (Blueprint $table) {
            $table->id();
            $table->string("fblink");
            $table->string("instalink");
            $table->string("snaplink");
            $table->string("tubelink");
            $table->unsignedBigInteger("user_id")->reference("id")->on("users")->onDelete("cascade")->onUpdate("cascade");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('links');
    }
};
