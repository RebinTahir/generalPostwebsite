<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Link;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        // need to be empty
        Link::create([
            "fblink" => "no link",
            "instalink" => "no link",
            "snaplink" => "no link",
            "tubelink" => "no link",
            "user_id" => "1"
        ]);
    }
}
