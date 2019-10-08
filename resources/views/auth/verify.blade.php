@extends('layouts.app')

@section('content')
    <div class="auth-box ">
        <div class="left">
            <div class="content">
                <div class="header">
                    <div class="logo text-center"><img src="{{ asset ('public/backend/assets/img/logo-dark.png') }}" alt="Klorofil Logo"></div>
                    <p class="lead">Email Verification</p>
                </div>

                <div class="card">
                    <div class="card-header">{{ __('Verify Your Email Address') }}</div>

                    <div class="card-body">
                        @if (session('resent'))
                            <div class="alert alert-success" role="alert">
                                {{ __('A fresh verification link has been sent to your email address.') }}
                            </div>
                        @endif

                        {{ __('Before proceeding, please check your email for a verification link.') }}
                        {{ __('If you did not receive the email') }}, <a href="{{ route('verification.resend') }}">{{ __('click here to request another') }}</a>.
                    </div>
                </div>

            </div>
        </div>
        <div class="right">
            <div class="overlay"></div>
            <div class="content text">
                <h1 class="heading">Please Verify Your Email Address</h1>
                <p>You can't access your user panel before verify your email address</p>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>



@endsection
