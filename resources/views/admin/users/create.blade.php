@extends('layouts.backend.master')

@section('title', 'Create User')

@push('css')



@endpush


@section('content')
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <div class="panel panel-headline">
                <div class="row">
                    <div class="col-md-6">
                        <div class="panel-body">
                            <h1>User Create</h1>
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
            <div class="panel panel-headline">
                <div class="panel-heading">
                    <h2 class="panel-title"></h2>
                </div>

                <div class="panel-body">
                    <form method="POST" action="{{ route('admin.users.store') }}" enctype="multipart/form-data">
                         @csrf
                        <div class="form-group">
                            <input type="text" name="name" class="form-control" placeholder="Name...">
                        </div>
                        <div class="form-group">
                            <input type="text" name="username" class="form-control" placeholder="Username...">
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon">User Role:</span>
                                <select class="form-control" name="role_id" id="role_id">
                                @if($users_role)
                                    @foreach($users_role as $user_role)
                                        <option value="{{$user_role}}">
                                            @if($user_role == 1)
                                                {{ 'Admin' }}
                                            @elseif($user_role == 2)
                                                {{ 'Hiring Manager' }}
                                            @else
                                                {{ 'Job Seeker' }}
                                            @endif
                                        </option>
                                    @endforeach
                                @endif;
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input type="text" name="education" class="form-control" placeholder="Education...">
                        </div>
                        <div class="form-group">
                            <input type="text" name="location" class="form-control" placeholder="Location...">
                        </div>
                        <div class="form-group">
                            <input type="tel" name="phone" class="form-control" placeholder="Phone Number...">
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon">Available For Work:</span>
                                <select class="form-control" name="availability" id="availability">
                                    <option value="1">Available</option>
                                    <option value="0">Not Available</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" name="short_desc" id="" cols="30" rows="10" placeholder="Write an Short Desc."></textarea>
                        </div>
                        <div class="form-group">
                            <input type="file" name="image">
                        </div>

                        <div class="form-group">
                            <input type="password" class="form-control" name="password" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" name="password_confirmation" placeholder="Confirm Password">
                        </div>
                        <input type="submit" value="SUBMIT" class="btn btn-primary">
                    </form>
                </div>
            </div>
        </div> {{-- col-md-8--}}
        <div class="col-md-2"></div>
    </div>
@stop

@push('js')


@endpush
