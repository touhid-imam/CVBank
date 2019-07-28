<!doctype html>
<html lang="en">

<head>
    <title>@yield('title') | {{ config('app.name', 'Laravel') }}</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <!-- VENDOR CSS -->
    <link rel="stylesheet" href="{{asset ('public/backend/assets/vendor/bootstrap/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset ('public/backend/assets/vendor/font-awesome/css/font-awesome.min.css')}}">

    <link rel="stylesheet" href="{{asset ('public/backend/assets/vendor/linearicons/style.css')}}">
    <link rel="stylesheet" href="{{asset ('public/backend/assets/vendor/chartist/css/chartist-custom.css')}}">
    <!-- MAIN CSS -->
    <link rel="stylesheet" href="{{asset ('public/backend/assets/css/main.css')}}">

    <!-- FOR DEMO PURPOSES ONLY. You should remove this in your project -->
    <link rel="stylesheet" href="{{asset ('public/backend/assets/css/demo.css')}}">
    <!-- Laravel Toastr Package CSS -->
    <link rel="stylesheet" href="http://cdn.bootcss.com/toastr.js/latest/css/toastr.min.css">
    <!-- CUSTOM PAGE CSS -->
    @stack('css')
    <style>
        .btn .lnr {
            position: relative;
            top: 1px;
        }
        .btn .lnr{
            right: 6px;
        }
        .btn-lnr-left .left{
            left: 6px;
        }
        
        .tbl-action-btn {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .tbl-action-btn li{
            display: inline-block;
        }
        .tb-btn{
            left:0;
            right: 0;
        }
    </style>


    <!-- FOR DEMO PURPOSES ONLY. You should remove this in your project -->
    {{--<link rel="stylesheet" href="assets/css/demo.css">--}}
    <!-- GOOGLE FONTS -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">
    <!-- ICONS -->
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('public/backend/assets/img/apple-icon.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('public/backend/assets/img/favicon.png') }}">

</head>

<body>
<!-- WRAPPER -->
<div id="wrapper">


    <!-- NAVBAR -->
    @include('layouts.backend.partials.topbar')
    <!-- END NAVBAR -->
    <!-- LEFT SIDEBAR -->
    @include('layouts.backend.partials.sidebar')
    <!-- END LEFT SIDEBAR -->

    <div class="main"> <!-- MAIN -->
        <div class="main-content"> <!-- MAIN CONTENT -->
            <div class="container-fluid">
                @yield('content')
            </div>
        </div> <!-- END MAIN CONTENT -->
    </div> <!-- END MAIN -->
    <div class="clearfix"></div>
    <footer>
        <div class="container-fluid">
            <p class="copyright">&copy; 2017 <a href="https://www.themeineed.com" target="_blank">Theme I Need</a>. All Rights Reserved.</p>
        </div>
    </footer>
</div>
<!-- END WRAPPER -->
<!-- Javascript -->
<script src="{{ asset('public/backend/assets/vendor/jquery/jquery.min.js') }}"></script>

<script src="{{ asset('public/backend/assets/vendor/bootstrap/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('public/backend/assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js') }}"></script>

<script src="{{ asset('public/backend/assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js') }}"></script>
<script src="{{ asset('public/backend/assets/vendor/chartist/js/chartist.min.js') }}"></script>
<script src="{{ asset('public/backend/assets/scripts/klorofil-common.js') }}"></script>
<!-- Laravel Toastr JS -->
<script src="http://cdn.bootcss.com/toastr.js/latest/js/toastr.min.js"></script>
{!! Toastr::message() !!}

<script>
    @if($errors->any())
        @foreach($errors->all() as $error)
        toastr.error('{{ $error }}', 'Error', {
            "closeButton": true,
            "progressBar": true
        });
        @endforeach
    @endif
</script>

@stack('js')

</body>

</html>