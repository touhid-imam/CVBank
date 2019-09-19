<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title') | {{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <!-- Styles -->
    <style>
        /* Template default style */
        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }


        .search-home {
            width: 60%;
            margin: 0 auto;
            padding-top: 60px;
        }

        .jumbotron{
            margin-bottom: 0!important;
        }
        .text-muted {
            padding: 3rem 0;
        }
    </style>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body data-gr-c-s-loaded="true">
<header>
    <div class="bg-dark collapse" id="navbarHeader" style="">
        <div class="container">
            <div class="row pt-4">
                <div class="col-sm-6">
                    <h4 class="text-white">About</h4>
                    <p class="text-muted">CVBank is an open source software where from you can create an online CV and can download as PDF, you can use that CV anywhere.</p>
                </div>
                <div class="col-sm-3">
                    <h4 class="text-white">Login / Register</h4>
                    @if (Route::has('login'))
                        <div class="top-right links">
                            <ul class="list-unstyled">
                                <li><a class="text-white" href="#">Search Jobs</a>
                                </li>
                                <li><a class="text-white" href="{{ url('/') }}">Search Employer</a>
                                </li>

                                @auth
                                    @if(Auth::user()->role_id == 1)
                                        <li><a class="text-white" href="{{ route('admin.dashboard') }}">Admin Dashboard</a></li>
                                    @elseif(Auth::user()->role_id == 1)
                                        <li><a class="text-white" href="{{ route('admin.manager') }}">Hireing Manager Dashboard</a></li>
                                    @else
                                        <li><a class="text-white" href="{{ route('jobseeker.dashboard') }}">Employer Dashboard</a></li>
                                    @endif
                                    <li><a class="text-white" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Log Out</a></li>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                    @else
                                        <li>
                                            <a class="text-white" href="{{ route('login') }}">Login</a>
                                        </li>
                                        @if (Route::has('register'))
                                            <li>
                                                <a class="text-white" href="{{ route('register') }}">Register</a>
                                            </li>
                                        @endif

                            </ul>
                            @endauth
                        </div>
                    @endif
                </div>
                <div class="col-sm-3">
                    <h4 class="text-white">Contact</h4>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-white">Follow on Twitter</a></li>
                        <li><a href="#" class="text-white">Like on Facebook</a></li>
                        <li><a href="mailto:touhid.imam1337@gmail.com" class="text-white">Email me</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container d-flex justify-content-between">
            <a href="#" class="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                <strong>CVBank</strong>
            </a>
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </div>
</header>