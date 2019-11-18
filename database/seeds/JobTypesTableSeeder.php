<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('job_types')->insert ([
            'name'              => 'Full Time',
            'slug'              => 'full-time',
            'created_at'        => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at'        => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('job_types')->insert ([
            'name'              => 'Part Time',
            'slug'              => 'part-time',
            'created_at'        => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at'        => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('job_types')->insert ([
            'name'              => 'Freelance',
            'slug'              => 'freelance',
            'created_at'        => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at'        => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('job_types')->insert ([
            'name'              => 'Internship',
            'slug'              => 'internship',
            'created_at'        => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at'        => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('job_types')->insert ([
            'name'              => 'Temporary',
            'slug'              => 'temporary',
            'created_at'        => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at'        => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
