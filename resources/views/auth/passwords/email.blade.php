@extends('layouts.app')

@section('content')
<div class="auth-box lockscreen clearfix">
    <div class="content">
        <h1 class="sr-only">CVBank Application</h1>
        <div class="logo text-center"><img src="{{ asset ('public/backend/assets/img/logo-dark.png') }}" alt="Klorofil Logo"></div>
        <div class="user text-center">
            <img src="{{ asset ('public/backend/assets/img/user-medium.png') }}" class="img-circle" alt="Avatar">
            <h2 class="name">PLEASE ENTER YOUR EMAIL</h2>
        </div>



        <div class="card-body">
            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif

            <form method="POST" action="{{ route('password.email') }}">
                @csrf

                <div class="input-group">
                   <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" placeholder="Enter your Email ..." required>
                        @if ($errors->has('email'))
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                        @endif

                    <span class="input-group-btn">
                        <button type="submit" class="btn btn-primary">
                            <i class="fa fa-arrow-right"></i>
                        </button>
                    </span>

                </div>
            </form>
        </div>

    </div>
</div>

@endsection
