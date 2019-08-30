<?php


use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert ([
            'role_id'      => 1,
            'name'      => 'Mr. Admin',
            'slug'          => 'mr-admin',
            'username'      => 'admin',
            'email'      => 'admin@mail.com',
            'password'      => bcrypt('password')
        ]);
        DB::table('users')->insert ([
            'role_id'      => 2,
            'name'      => 'Hiring Manager',
            'slug'          => 'hiring-manager',
            'username'      => 'hiring-manager',
            'email'      => 'manager@mail.com',
            'password'      => bcrypt('password')
        ]);
        DB::table('users')->insert ([
            'role_id'      => 3,
            'name'      => 'Job Seeker',
            'slug'          => 'job-seeker',
            'username'      => 'Job Seeker',
            'email'      => 'jobseeker@mail.com',
            'password'      => bcrypt('password')
        ]);

    }
}
