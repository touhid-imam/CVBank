@extends('layouts.app')

@section('content')

<div class="auth-box ">
    <div class="left">
        <div class="content">
            <div class="header">
                <div class="logo text-center"><img src="{{ asset ('public/backend/assets/img/logo-dark.png') }}" alt="Klorofil Logo"></div>
                <p class="lead">Login to your account</p>
            </div>


            <form method="POST" action="{{ route('register') }}">
                @csrf

                <div class="form-group">
                    <label for="name" class="control-label sr-only">{{ __('NAME') }}</label>

                         <input id="signin-name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" placeholder="Name..." required autofocus>

                        @if ($errors->has('name'))
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                        @endif

                </div>
                <div class="form-group">
                    <label for="username" class="control-label sr-only">{{ __('USERNAME') }}</label>

                    <input id="signin-username" type="text" class="form-control{{ $errors->has('username') ? ' is-invalid' : '' }}" name="username" value="{{ old('username') }}" placeholder="Username..." required autofocus>

                    @if ($errors->has('username'))
                        <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('username') }}</strong>
                                    </span>
                    @endif

                </div>

                <div class="form-group">
                    <label for="email" class="control-label sr-only">{{ __('E-MAIL') }}</label>

                    <input id="signin-email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" placeholder="Email..." required>

                    @if ($errors->has('email'))
                        <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                    @endif
                </div>

                <div class="form-group">
                    <label for="role_id" class="control-label sr-only">{{ __('ROLES') }}</label>

                    <select class="form-control{{ $errors->has('role_id') ? ' is-invalid' : '' }}" name="role_id" id="role_id">
                        <option value="2">{{ "Hiring Manager" }}</option>
                        <option value="3">{{ "Job Seeker" }}</option>
                    </select>

                    @if ($errors->has('role_id'))
                        <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('role_id') }}</strong>
                                </span>
                    @endif
                </div>

                <div class="form-group">
                    <label for="job_role" class="control-label sr-only">{{ __('JOB TYPE') }}</label>

                    <select class="form-control{{ $errors->has('job_role') ? ' is-invalid' : '' }}" name="job_role" id="job_role">
                        <option value="1">{{ "Full Time" }}</option>
                        <option value="2">{{ "Part Time" }}</option>
                        <option value="3">{{ "Freelance" }}</option>
                        <option value="4">{{ "Internship" }}</option>
                        <option value="5">{{ "Temporary" }}</option>
                    </select>

                    @if ($errors->has('job_role'))
                        <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('job_role') }}</strong>
                                </span>
                    @endif
                </div>


                <div class="form-group">
                    <label for="password" class="control-label sr-only">{{ __('PASSWORD') }}</label>

                    <input id="signin-password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" placeholder="Password..." required>

                    @if ($errors->has('password'))
                        <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                    @endif

                </div>

                <div class="form-group">
                    <label for="password-confirm" class="control-label sr-only">{{ __('CONFIRM PASSWORD') }}</label>

                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" placeholder="Confirm Password..." required>
                </div>

                <button type="submit" class="btn btn-primary btn-lg btn-block"> {{ __('Register') }}</button>
            </form>


        </div>
    </div>
    <div class="right">
        <div class="overlay"></div>
        <div class="content text">
            <h1 class="heading">Register Job Seeker Account</h1>
            <p><h1 class="heading"></h1></p>
        </div>
    </div>
    <div class="clearfix"></div>
</div>

@endsection

@push('script')
    <script>
        $(document).ready(function(){
           var userRole = $('#role_id'),
               jobRole  = $('#job_role');
            jobRole.hide();

            userRole.on('change', function(){
                if(userRole.val() == 2){
                    jobRole.hide();
                } else{
                    jobRole.show();
                }
            });

        });
    </script>
@endpush
