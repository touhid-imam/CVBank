<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'CVBank') }}</title>


    <!-- VENDOR CSS -->
    <link rel="stylesheet" href="{{ asset('public/backend/assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('public/backend/assets/vendor/font-awesome/css/font-awesome.min.css') }}">
    <link rel="stylesheet" href="{{ asset('public/backend/assets/vendor/linearicons/style.css') }}">
    <!-- MAIN CSS -->
    <link rel="stylesheet" href="{{ asset('public/backend/assets/css/main.css') }}">

    <!-- GOOGLE FONTS -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">
    <!-- ICONS -->
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('public/backend/assets/img/apple-icon.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('public/backend/assets/img/favicon.png') }}">

    <style>
        .radio-btn {
            width: 50%;
            text-align: left;
            position: relative;
            bottom: 7px;
        }
        .radio-btn #user-role {
            display: inline-block;
            width: auto;
            position: relative;
            top: 14px;
            left: 6px;
        }
    </style>

</head>
<body>
<div id="wrapper">
    <div class="vertical-align-wrap">
        <div class="vertical-align-middle">
            @yield('content')
        </div>
    </div>
</div>
</body>
</html>
