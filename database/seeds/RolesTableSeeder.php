<?php

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert ([
            'name'      => 'Admin',
            'slug'      => 'admin'
        ]);
        
        DB::table('roles')->insert ([
            'name'      => 'Hiring Manager',
            'slug'      => 'hiring-manager'
        ]);

        DB::table('roles')->insert ([
            'name'      => 'Job Seeker',
            'slug'      => 'job-seeker'
        ]);
    }
}
