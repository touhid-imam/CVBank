@extends('layouts.frontend.master')

@section('title', 'Job Search')

@push('css')

    <style>
        #search-view {
            width: 100%;
            display: inline-flex;
        }
        .extra-space{
            padding:250px 0;
        }

        .search-job {
            background: #ffffff;
            padding: 20px;
        }
    </style>

@endpush

@section('hero-area')


    <div class="hero-wrap" style="background-image: url('{{asset ('public/front/assets/images/bg_2.jpg')}}');" data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
                <div class="col-xl-12 ftco-animate mb-5 pb-5 extra-space" data-scrollax=" properties: { translateY: '70%' }">
                    @if($jobName)
                        <h1 class="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span id="total_num">{{ $jobList->count() }}</span> RESULTS FOR <span id="keyword">@if($jobName)
                                    {{ strtoupper ($jobName) }}
                                @else($job_role)
                                    {{ strtoupper ($job_role) }}
                                @endif
                            </span></h1>
                    @else
                        <h1>SEARCH EMPLOYER</h1>
                    @endif

                    <form action="{{ route('jobs.search') }}" method="GET" class="search-job">
                        <div class="row">
                            <div class="col-md">
                                <div class="form-group">
                                    <div class="form-field">
                                        <div class="icon"><span class="icon-user"></span></div>
                                        <input type="text" name="job_name" id="job_name" class="form-control" placeholder="Job Name" value="{{ $jobName }}">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="form-group">
                                    <div class="form-field">
                                        <div class="select-wrap">
                                            <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                            <select name="job_role" id="job_role" class="form-control dynamic">
                                                @foreach($job_types as $key=>$job_type)
                                                    <option value="{{ $job_type->id }}" {{ $job_role ==  $job_type->id ? 'selected' : '' }}>{{ $job_type->name }}</option>

                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="form-group">
                                    <div class="form-field">
                                        <div class="icon"><span class="icon-map-marker"></span></div>
                                        <input type="text" name="job_location" class="form-control dynamic" placeholder="Location" value="{{ $job_location }}">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="form-group">
                                    <div class="form-field">
                                        <input type="submit" value="Search" class="form-control btn btn-primary">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>



                </div>
            </div>
        </div>
    </div>

@stop


@section('main-content')

    <div class="album py-5 bg-light">
        <div class="container">

            <div class="row">
                <span id="search-view">
                    @if($jobList->count() > 0 )
                        @foreach($jobList as $job)
                            <div class="col-md-4">
                        <div class="card mb-4 shadow-sm normal-data">
                            <img src="{{ $job->image != 'default.png' ? Storage::disk('public')->url('jobs/' . $job->image) : 'https://via.placeholder.com/350x225' }}" height="280" alt="{{ $job->image }}">
                            <div class="card-body">
                                <h4>{{ $job->title }}</h4>
                                <h6 style="color: #000000">{{ $job->company }}</h6>
                                <p class="card-text">{{ str_limit ($job->desc, 150) }}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <a target="_blank" class="btn btn-sm btn-outline-secondary" href="#">Details</a>
                                    </div>
                                    <small class="text-muted">{{ $job->updated_at ? $job->updated_at->diffForHumans() : '' }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                        @endforeach
                    @else
                        <h1 class="text-center bg-red">There is no job with this query...</h1>
                    @endif
                </span>
            </div>
        </div>
    </div>
@stop


@push('js')




@endpush