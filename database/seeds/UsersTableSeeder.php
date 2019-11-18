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
            'job_role'     => 1,
            'name'      => 'Mr. Admin',
            'username'      => 'admin',
            'email'      => 'admin@mail.com',
            'password'      => bcrypt('password')
        ]);
        DB::table('users')->insert ([
            'role_id'      => 2,
            'job_role'     => 1,
            'name'      => 'Hiring Manager',
            'username'      => 'hiring-manager',
            'email'      => 'manager@mail.com',
            'password'      => bcrypt('password')
        ]);
        DB::table('users')->insert ([
            'role_id'      => 3,
            'job_role'     => 1,
            'name'      => 'Job Seeker',
            'username'      => 'Job Seeker',
            'email'      => 'jobseeker@mail.com',
            'password'      => bcrypt('password')
        ]);

    }
}
