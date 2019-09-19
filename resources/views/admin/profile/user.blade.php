@extends('layouts.backend.master')

@section('title', 'User Profile')

@push('css')

    <link rel="stylesheet" href="//cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/sweetalert2@8.13.6/dist/sweetalert2.min.css">

    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/venobox/1.8.6/venobox.min.css" type="text/css" media="screen" />

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
                                {{ count($user->posts) }} <span>Blog</span>
                            </div>
                            <div class="col-md-4 stat-item">
                                {{ $awards }} <span>Awards</span>
                            </div>
                            <div class="col-md-4 stat-item">
                                {{ count($user->works) }} <span>Projects</span>
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
                    <div class="text-center"><a href="{{ route('profile', $user->username) }}" target="_blank" class="btn btn-primary">Preview Profile</a></div>
                </div>
                <!-- END PROFILE DETAIL -->
            </div>
            <!-- END LEFT COLUMN -->
            <!-- RIGHT COLUMN -->
            <div class="profile-right">
                @if($awards)
                    <h4 class="heading">{{ $user->name }}'s Awards</h4>
                @endif
                <!-- AWARDS -->
                <div class="awards">
                    <div class="row">
                        @foreach($user->resumes as $award)
                            @if($award->option == 3)
                                <div class="col-md-3 col-sm-6">
                                    <div class="award-item">
                                        <div class="hexagon">
                                            <span class="lnr lnr-sun award-icon"></span>
                                        </div>
                                        <span>{{ $award->title }}</span>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                    </div>
                    @if($user->video)
                    <div class="text-center"><a class="venobox btn btn-default" data-vbtype="video" href="https://www.youtube.com/watch?v={{ $user->video }}">Profile Video</a></div>
                    @endif
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
                    <div class="tab-pane fade in active" id="tab-bottom-left1">


                        <form method="POST" action="{{ route('admin.profile.update', $user->id) }}" enctype="multipart/form-data">
                            @method('PATCH')
                            @csrf
                            <div class="form-group">
                                <input type="text" name="name" class="form-control" placeholder="Name..." value="{{$user->name}}">
                            </div>
                            <div class="form-group">
                                <input type="text" id="username" name="username" class="form-control" placeholder="Username..." value="{{ $user->username }}" disabled>
                            </div>

                            <div class="form-group">
                                <input type="email" name="email" class="form-control" placeholder="Email" value="{{ $user->email }}">
                            </div>
                            <div class="form-group">
                                <input type="text" name="education" class="form-control" placeholder="Education..." value="{{ $user->education }}">
                            </div>
                            <div class="form-group">
                                <input type="text" name="location" class="form-control" placeholder="Location..." value="{{ $user->location }}">
                            </div>
                            <div class="form-group">
                                <input type="tel" name="phone" class="form-control" placeholder="Phone Number..." value="{{ $user->phone }}">
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="lnr lnr-film-play"></i>
                                </span>
                                    <input type="text" name="video" class="form-control" placeholder="Please Enter Youtube Video ID...">
                                </div>
                                <p>How to get video id? <a target="_blank" href="https://gist.github.com/jakebellacera/d81bbf12b99448188f183141e6696817">check here...</a></p>
                            </div>
                            <div class="form-group">
                                <select class="form-control" name="availability" id="availability">
                                    <option {{ $user->availability == 1 ? 'selected' : ''  }} value="1">Available</option>
                                    <option {{ $user->availability == 0 ? 'selected' : ''  }} value="0">Not Available</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" name="short_desc" id="" cols="30" rows="10" placeholder="Write an Short Desc.">{{ $user->short_desc }}</textarea>
                            </div>
                            <div class="form-group">
                                <input type="file" name="image">
                            </div>

                            <input type="submit" value="UPDATE" class="btn btn-primary">
                        </form>


                    </div>
                    <div class="tab-pane fade" id="tab-bottom-left2">

                        <form method="POST" action="{{ route('admin.password-update', $user->id) }}" enctype="multipart/form-data">
                            @method('PATCH')
                            @csrf
                            <div class="form-group">
                                <input type="password" name="old_password" class="form-control" placeholder="Prev. Password...">
                            </div>
                            <div class="form-group">
                                <input type="password" name="password" class="form-control" placeholder="New Password...">
                            </div>

                            <div class="form-group">
                                <input type="password" name="password_confirmation" class="form-control" placeholder="Confirm Password...">
                            </div>

                            <input type="submit" value="Update Password" class="btn btn-primary">
                        </form>

                    </div>
                </div>
                <!-- END TABBED CONTENT -->
            </div>
            <!-- END RIGHT COLUMN -->
        </div>
    </div>

@stop

@push('js')


    <script src="//cdnjs.cloudflare.com/ajax/libs/venobox/1.8.6/venobox.min.js"></script>

    <script>
        $("#username").tooltip({ 'trigger' : 'hover', 'title' : 'You can\'t change username'  });

        $(document).ready(function(){
            $('.venobox').venobox({
                spinner: 'cube-grid'
            });
        });

    </script>

@endpush