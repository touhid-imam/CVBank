@extends('layouts.backend.master')

@section('title', 'User Information')

@push('css')

    <link rel="stylesheet" href="//cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/sweetalert2@8.13.6/dist/sweetalert2.min.css">

    <style>
        .profile-header .online-status.status-unavailable::before{
            background-color: darkred;
        }
    </style>

@endpush


@section('content')

    <div class="panel panel-profile">
        <div class="clearfix">
            <!-- LEFT COLUMN -->
            <div class="profile-left">
                <!-- PROFILE HEADER -->
                <div class="profile-header">
                    <div class="overlay"></div>
                    <div class="profile-main">
                        <img src="{{ $user->image != 'default.png' ? Storage::disk('public')->url('profile/'.$user->image) : 'https://via.placeholder.com/120' }}" class="img-circle" alt="{{ $user->image }}">
                        <h3 class="name">{{ $user->name }}</h3>
                        <span class='online-status {{ $user->availability == 1 ? "status-available" : "status-unavailable" }}'>{{ $user->availability == 1 ? "Available" : "Unavailable" }}</span>
                    </div>
                    <div class="profile-stat">
                        <div class="row">
                            <div class="col-md-4 stat-item">
                                45 <span>Projects</span>
                            </div>
                            <div class="col-md-4 stat-item">
                                15 <span>Awards</span>
                            </div>
                            <div class="col-md-4 stat-item">
                                2174 <span>Points</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END PROFILE HEADER -->
                <!-- PROFILE DETAIL -->
                <div class="profile-detail">
                    <div class="profile-info">
                        <h4 class="heading">Basic Info</h4>
                        <ul class="list-unstyled list-justify">
                            <li>Username <span>{{ $user->username }}</span></li>
                            <li>Mobile <span>{{ $user->phone ? $user->phone : 'No Mobile Number' }}</span></li>
                            <li>Email <span>{{ $user->email }}</span></li>
                            <li>Location <span>{{ $user->location ? $user->location : 'Location Not Updated' }}</li>
                        </ul>
                    </div>
                    {{--<div class="profile-info">--}}
                    {{--<h4 class="heading">Social</h4>--}}
                    {{--<ul class="list-inline social-icons">--}}
                    {{--<li><a href="#" class="facebook-bg"><i class="fa fa-facebook"></i></a></li>--}}
                    {{--<li><a href="#" class="twitter-bg"><i class="fa fa-twitter"></i></a></li>--}}
                    {{--<li><a href="#" class="google-plus-bg"><i class="fa fa-google-plus"></i></a></li>--}}
                    {{--<li><a href="#" class="github-bg"><i class="fa fa-github"></i></a></li>--}}
                    {{--</ul>--}}
                    {{--</div>--}}
                    <div class="profile-info">
                        <h4 class="heading">About</h4>
                        <p>{{ $user->short_desc ? $user->short_desc : 'Not Updated' }}</p>
                    </div>
                    <div class="text-center"><a href="#" target="_blank" class="btn btn-primary">Preview Profile</a></div>
                </div>
                <!-- END PROFILE DETAIL -->
            </div>
            <!-- END LEFT COLUMN -->
            <!-- RIGHT COLUMN -->
            <div class="profile-right">
                <h4 class="heading">Samuel's Awards</h4>
                <!-- AWARDS -->
                <div class="awards">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="award-item">
                                <div class="hexagon">
                                    <span class="lnr lnr-sun award-icon"></span>
                                </div>
                                <span>Most Bright Idea</span>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="award-item">
                                <div class="hexagon">
                                    <span class="lnr lnr-clock award-icon"></span>
                                </div>
                                <span>Most On-Time</span>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="award-item">
                                <div class="hexagon">
                                    <span class="lnr lnr-magic-wand award-icon"></span>
                                </div>
                                <span>Problem Solver</span>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="award-item">
                                <div class="hexagon">
                                    <span class="lnr lnr-heart award-icon"></span>
                                </div>
                                <span>Most Loved</span>
                            </div>
                        </div>
                    </div>
                    <div class="text-center"><a href="#" class="btn btn-default">See all awards</a></div>
                </div>
                <!-- END AWARDS -->
                <!-- TABBED CONTENT -->
                <div class="custom-tabs-line tabs-line-bottom left-aligned">
                    <ul class="nav" role="tablist">
                        <li class="active"><a href="#tab-bottom-left1" role="tab" data-toggle="tab">Update Profile Info.</a></li>
                        <li><a href="#tab-bottom-left2" role="tab" data-toggle="tab">Update Password</a></li>
                    </ul>
                </div>
                <div class="tab-content">
                    <div style="height: 100%" class="tab-pane fade in active" id="tab-bottom-left1">



                    </div>
                    <div style="height: 100%" class="tab-pane fade" id="tab-bottom-left2">



                    </div>
                </div>
                <!-- END TABBED CONTENT -->
            </div>
            <!-- END RIGHT COLUMN -->
        </div>
    </div>

@stop

@push('js')


@endpush