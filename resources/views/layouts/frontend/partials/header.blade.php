
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <title>@yield('title') | {{ config('app.name', 'Laravel') }}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900" rel="stylesheet">

    <link rel="stylesheet" href="{{asset ('public/front/assets/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset ('public/front/assets/css/open-iconic-bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset ('public/front/assets/css/animate.css')}}">

    <link rel="stylesheet" href="{{asset ('public/front/assets/css/owl.carousel.min.css')}}">
    <link rel="stylesheet" href="{{asset ('public/front/assets/css/owl.theme.default.min.css')}}">
    <link rel="stylesheet" href="{{asset ('public/front/assets/css/magnific-popup.css')}}">

    <link rel="stylesheet" href="{{asset ('public/front/assets/css/aos.css')}}">

    <link rel="stylesheet" href="{{asset ('public/front/assets/css/ionicons.min.css')}}">

    <link rel="stylesheet" href="{{asset ('public/front/assets/css/bootstrap-datepicker.css')}}">
    <link rel="stylesheet" href="{{asset ('public/front/assets/css/jquery.timepicker.css')}}">


    <link rel="stylesheet" href="{{asset ('public/front/assets/css/flaticon.css')}}">
    <link rel="stylesheet" href="{{asset ('public/front/assets/css/icomoon.css')}}">
    <link rel="stylesheet" href="{{asset ('public/front/assets/css/style.css')}}">
    @stack('css')
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container">
        <a class="navbar-brand" href="{{ route ('home') }}">JobPortal</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
                <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
                <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                <li class="nav-item cta mr-md-2"><a href="new-post.html" class="nav-link">Post a Job</a></li>
                <li class="nav-item cta cta-colored"><a href="job-post.html" class="nav-link">Want a Job</a></li>

            </ul>
        </div>
    </div>
</nav>
<!-- END nav -->