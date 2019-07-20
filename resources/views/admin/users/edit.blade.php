@extends('layouts.backend.master')

@section('title', 'Update User')

@push('css')



@endpush


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-headline">
                <div class="row">
                    <div class="col-md-6">
                        <div class="panel-body">
                            <h1>User Update</h1>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="panel-body">
                            <h1 style="text-align: right">
                                <a href="{{ route('admin.users.index') }}" class="btn btn-success btn-md"><span class="lnr lnr-arrow-left"></span>Back</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-9">
            <div class="panel panel-headline">
                <div class="panel-heading">
                    <h2 class="panel-title"></h2>
                </div>

                <div class="panel-body">
                    <form method="POST" action="{{ route('admin.users.update', $user->id) }}" enctype="multipart/form-data">
                        @method('PATCH')
                        @csrf
                        <div class="form-group">
                            <input type="text" name="name" class="form-control" placeholder="Name..." value="{{$user->name}}">
                        </div>
                        <div class="form-group">
                            <input type="text" name="username" class="form-control" placeholder="Username..." disabled>
                        </div>
                        <div class="form-group">
                            <select class="form-control" name="role_id" id="role_id">
                            @if(isset($users_role))
                                @foreach($users_role as $user_role)
                                    <option value="{{$user_role}}" {{ $user_role == $user->role_id ? 'selected' : ' ' }}>
                                        @if($user_role == 1)
                                            {{ 'Admin' }}
                                        @elseif($user_role == 2)
                                            {{ 'Hiring Manager' }}
                                        @else
                                            {{ 'Job Seeker' }}
                                        @endif</option>
                                @endforeach
                            @endif
                            </select>
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
                        <div class="form-group">
                            <input type="password" class="form-control" name="password" placeholder="New Password">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" name="password_confirmation" placeholder="Confirm Password">
                        </div>
                        <input type="submit" value="UPDATE" class="btn btn-primary">
                    </form>
                </div>
            </div>
        </div> {{-- col-md-8--}}

        <div class="col-md-3">
            <div style="padding: 15px;" class="panel panel-headline text-center">
                <h1 style="padding-bottom: 10px; font-weight: bold" class="panel-title">Profile Photo</h1>
                    @if(!($user->image == 'default.png'))
                        <img src="{{ asset ('public/storage/profile/' . $user->image) }}" alt="$user->image" class="img-responsive img-thumbnail">
                        @else
                        <img src="https://via.placeholder.com/150" alt="Placeholder" class="img-responsive img-thumbnail">
                    @endif
                </div>
            </div>
        </div>
    </div>
@stop

@push('js')


@endpush
