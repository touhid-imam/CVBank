@extends('layouts.app')

@section('content')
    <!-- WRAPPER -->

    <div class="auth-box ">
        <div class="left">
            <div class="content">
                <div class="header">
                    <div class="logo text-center"><img src="{{ asset ('public/backend/assets/img/logo-dark.png') }}" alt="Klorofil Logo"></div>
                    <p class="lead">Login to your account</p>
                </div>

                <form class="form-auth-small" method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                    @csrf
                    <div class="form-group">
                        <label for="email" class="control-label sr-only">{{ __('Email') }}</label>
                        <input type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" id="signin-email" placeholder="Email" name="email" value="{{ old('email') }}" required autofocus>
                        @if ($errors->has('email'))
                            <span class="invalid-feedback" role="alert">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                        @endif
                    </div>

                    <div class="form-group">
                        <label for="password" class="control-label sr-only">{{ __('Password') }}</label>
                        <input type="password" name="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" id="signin-password" placeholder="Password" required>
                        @if ($errors->has('password'))
                            <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                        @endif
                    </div>

                    <div class="form-group clearfix">
                        <label class="fancy-checkbox element-left">
                            <input type="checkbox" class="form-check-input" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                            <span>{{ __('Remember Me') }}</span>
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary btn-lg btn-block">{{ __('LOGIN') }}</button>
                    <div class="bottom">
                        <span class="helper-text"><i class="fa fa-lock"></i> <a href="{{ route('password.request') }}"> {{ __('Forgot password?') }}</a></span>

                    </div>
                </form>

            </div>
        </div>
        <div class="right">
            <div class="overlay"></div>
            <div class="content text">
                <h1 class="heading">CVbank Application</h1>
                <p>by CodersGang Inc.</p>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>

    <!-- END WRAPPER -->
@endsection
