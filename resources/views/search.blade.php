@extends('layouts.frontend.master')

@section('title', 'Search')

@push('css')

    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

@endpush

@section('search-area')

    <section class="jumbotron text-center">
        <div class="container">
            @if($query)
            <h1 class="jumbotron-heading">{{ $userProfiles->count() }} RESULTS FOR {{ strtoupper ($query) }}</h1>
                @else
                <h1 class="jumbotron-heading">SEARCH EMPLOYER</h1>
            @endif
            <form action="{{ route('userSearch') }}" method="GET" class="search-home">
                <div class="form-group">
                    <input type="text" class="form-control" name="query" placeholder="Please Enter Employer Name..." value="{{ $query ? $query : '' }}">
                    <input type="submit" value="Search Employer" class="btn btn-secondary my-2">
                </div>
            </form>


        </div>
    </section>

@stop


@section('main-content')

    <div class="album py-5 bg-light">
        <div class="container">

            <div class="row">
                @if($userProfiles)
                    @foreach($userProfiles as $userProfile)
                        <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src="{{ $userProfile->image != 'default.png' ? Storage::disk('public')->url('profile/front/' . $userProfile->image) : 'https://via.placeholder.com/350x225' }}" alt="{{ $userProfile->image }}">
                        <div class="card-body">
                            <h4>{{ $userProfile->name }}</h4>

                            <p class="card-text">{{ str_limit ($userProfile->short_desc, 150) }}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a target="_blank" class="btn btn-sm btn-outline-secondary" href="{{ route ('profile', $userProfile->username) }}">View</a>
                                    @if(Auth::user())
                                    @if(Auth::user()->role_id == 1)

                                    <a href="{{ route('admin.dashboard') }}" class="btn btn-sm btn-outline-secondary">Edit</a>
                                        @elseif(Auth::user()->role_id  == 3)
                                        <a href="{{ route('jobseeker.dashboard') }}" class="btn btn-sm btn-outline-secondary">Edit</a>
                                        @else
                                        <a target="_blank" class="btn btn-sm btn-outline-secondary" href="{{ route ('profile', $userProfile->username) }}">View</a>
                                    @endif
                                        @endif
                                </div>
                                <small class="text-muted">{{ $userProfile->updated_at->diffForHumans() }}</small>
                            </div>
                        </div>
                    </div>
                </div>
                    @endforeach
                @endif
            </div>
        </div>
    </div>
@stop


@push('js')


@endpush