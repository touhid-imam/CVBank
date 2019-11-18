<!doctype html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $user->name }} - {{ config('app.name') }}</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">

    <link href="https://fonts.googleapis.com/css?family=Oswald|Roboto&display=swap" rel="stylesheet">

    <style>
        body{
            margin: 0;
            padding:0;
        }
        h1, h2, h3, h4, h5, h6{
            font-family: 'Oswald', sans-serif;
        }
        h1.pop, h2.pop, h3.pop, h4.pop, h5.pop, h6.pop{
            font-family: 'Oswald', sans-serif;
            font-weight:bold;
        }

        h1{
            font-size: 42px;
            line-height: 1.5em;
        }
        h3{
            font-size: 28px;
            line-height:1.4em;
        }
        h4{

        }
        p{
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            line-height: 1.2em;
        }
        ul{
            margin: 0;
            padding: 0;
            list-style: none;
        }
        li{
            font-size: 18px;
            line-height: 1.1em;
        }
        a:hover{
            color: inherit;
        }
        .container {
            width: 1270px;
            margin: 0 auto;
        }

        .border-bottom-dashed{
            border-bottom: 2px dashed #2F79B9;
        }

        .info-wrapper ul li{
            font-family: 'Roboto', sans-serif;
            font-size: 26px;
            width: 100%;
            display: block;
            padding: 20px 0;
        }
        ul li span.heading{
            font-weight: bold;
            margin-right: 20px;
        }

        .skill-info ul li{
            display: inline-block;
            padding-right: 20px;
        }
        .skill-info ul li span{
            margin-right: 5px;
        }
        /* top section */


        .bg-primary {
            background: #2F79B9;
        }


        .box-gray{
            background: #dddddd;
        }
        .border{
            border: 2px solid #dddddd;
        }
        .color-white{
            color: #ffffff;
        }
        .section-heading{
            padding-top: 40px;
            padding-bottom:10px;
        }
        .heading-color{
            color: #2F79B9;
            margin: 0;
            padding: 0;
        }
        .p-0{
            padding: 0;
        }
        .pt-10{
            padding-top: 10px;
        }
        .pb-10{
            padding-bottom:10px;
        }
        .m-0{
            margin: 0;
        }

        div.page{
            page-break-after: always;
            page-break-inside: avoid;
        }
        /*.heading {*/
            /*min-width: 16%;*/
            /*display: inline-block;*/
        /*}*/
    </style>
</head>
<body>

<div class="page">
<section style="padding-bottom: 30px" class="header-area border-bottom-dashed">
    <div class="container">
        <div class="row">
            <div class="col-xs-4">
                <img class="img-rounded" src="{{ Storage::disk('public')->url('profile/front/' . $user->image) }}" alt="{{ $user->image }}" />
            </div>
            <div style="overflow: hidden" class="col-xs-6">
                <div style="text-align: justify;" class="top-content-wrapper">
                    <div class="main-title">
                        <h1 class="heading-color" style="text-transform: uppercase;">Touhid Imam</h1>
                        <h3 class="heading-color" style="text-transform: uppercase;">Web Apps Developer</h3>
                    </div>
                    <p style="padding: 5px 0">{{ $user->short_desc }}</p>
                    <ul>
                        <li><a href="#">touhid.watson@gmail.com</a></li>
                        <li><a href="#">01914006019</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="resumes-area">
    <div class="container">
        <div class="row">
            <div class="col-xs-8">
                <div class="section-heading">
                    <h1 class="heading-color" style="text-transform: uppercase;">Educational History</h1>
                </div>

                <div class="resumes-content">
                    @foreach($resumes as $resume)
                            <div style="display: inline-block;" class="single-education">
                            <h3 class="pop" style="text-transform: uppercase;"> {{ $resume->title }}</h3>
                            <h4 class="pop" style="margin-bottom: 10px;text-transform: uppercase;">{{ $resume->university_org }}  <span style="padding-left: 20px; color: #000000"> {{ date('Y', strtotime ($resume->start)) }} - {{ date('Y', strtotime ($resume->end)) }}</span></h4>
                            <p>{{ str_limit ($resume->desc, 200) }}</p>
                            </div>

                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>

<section style="padding-top: 40px;" class="skills-area">
    <div class="container">
        <div class="row">
            <div class="col-xs-10">
                <h1 class="heading-color" style="text-transform: uppercase;margin: 0; padding: 0">Skills</h1>

                @foreach($skills as $skill)
                    <div style="padding-top: 30px" class="single-skill">
                        <div class="row">
                            <div class="col-sm-2">
                                <h3 class="m-0 pop">
                                    @foreach($skill->categories as $category)
                                        {{ $category->name }}
                                    @endforeach
                                </h3>
                                <p style="margin: 10px 0">{{ str_limit ($skill->short_decs, 240) }}</p>
                            </div>
                            <div class="col-sm-10">
                                <div style="margin-bottom: 0" class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: {{ $skill->skill_percent }}%;">
                                        <span class="sr-only">60% Complete</span>
                                        <span>{{ $skill->skill_percent }}%</span>
                                    </div>
                                </div>
                                <div style="margin: 10px" class="skill-info">
                                    <ul>
                                        <li><span class="heading">Skill Level: </span> {{ $skill->skill_level }}</li>
                                        <li><span class="heading">Experience: </span> {{ $skill->experience }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</section>
</div>

<div class="page">
<section style="padding: 40px 0;" class="personal-info">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1 class="heading-color" style="text-transform: uppercase">Personal Information</h1>

                <div style="padding-top: 25px" class="info-wrapper">
                    <ul>
                        <li>
                            <div style="width: 17%; float: left;" class="heading">
                                <span class="heading">Father's Name:</span>
                            </div>
                            <div style="width: 83%;float: left;" class="personal-content">
                                {{ $user->personal->father_name }}
                            </div>
                         </li>
                        <li>
                            <div style="width: 17%; float: left;" class="heading">
                                <span class="heading">Mother's Name:</span>
                            </div>
                            <div style="width: 83%;float: left;" class="personal-content">
                                {{ $user->personal->mother_name }}
                            </div>
                        </li>
                        <li>
                            <div style="width: 17%; float: left;" class="heading">
                                <span class="heading">Birthday:</span>
                            </div>
                            <div style="width: 83%;float: left;" class="personal-content">
                                {{ date('d M Y', strtotime ($user->personal->date_of_birth)) }}
                            </div>
                        </li>
                        <li>
                            <div style="width: 17%; float: left;" class="heading">
                                <span class="heading">Nationality:</span>
                            </div>
                            <div style="width: 83%;float: left;" class="personal-content">
                                {{ $user->personal->nationality }}
                            </div>
                        </li>
                        <li>
                            <div style="width: 17%; float: left;" class="heading">
                                <span class="heading">Marital Status:</span>
                            </div>
                            <div style="width: 83%;float: left;" class="personal-content">
                                {{ $user->personal->merital_status }}
                            </div>
                        </li>
                        <li>
                            <div style="width: 17%; float: left;" class="heading">
                                <span class="heading">Sex:</span>
                            </div>
                            <div style="width: 83%;float: left;" class="personal-content">
                                {{ $user->personal->sex }}
                            </div>
                        </li>
                        <li>
                            <div style="width: 17%; float: left;" class="heading">
                                <span class="heading">Language:</span>
                            </div>
                            <div style="width: 83%;float: left;" class="personal-content">
                                {{ $user->personal->language }}
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    </div>
</section>

<section style="padding: 40px 0;" class="contact-info">
    <div class="container">
        <div class="row">
            <div class="col-sm-8">
                <h1 class="heading-color" style="text-transform: uppercase">Address and Contact Information</h1>

                <div style="padding-top: 25px" class="info-wrapper">
                    <ul>
                        <li>
                            <div style="width: 32%; float: left;" class="heading">
                                <span class="heading">Phone: </span>
                            </div>
                            <div style="width: 68%;float: left;" class="personal-content">
                                {{ $user->personal->phone_num }}
                            </div>
                        </li>
                        <li>
                            <div style="width: 32%; float: left;" class="heading">
                                <span class="heading">Present Address:</span>
                            </div>
                            <div style="width: 68%;float: left;padding-bottom: 25px" class="personal-content">
                                {!! $user->personal->present_address !!}
                            </div>
                        </li>
                        <li >
                            <div style="width: 32%; float: left;" class="heading">
                                <span class="heading">Permanent Address:</span>
                            </div>
                            <div style="width: 68%;float: left;" class="personal-content">
                                {!! $user->personal->permanent_address !!}
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    </div>
</section>


<section style="margin-top: 150px" class="promise-area">
    <div class="container">
        <div class="row">
            <div class="col-xs-10">
                <div style="border-top: 2px dashed #dddddd; border-bottom: 2px dashed #dddddd" class="promise-wrapper">
                    <h2 style="font-weight: normal;padding: 20px 0;" class="pop">
                        I declare and ensure that all information stated in this resume is true. This is also to authorize the organization to verify the information provide here.
                    </h2>
                </div>
            </div>
        </div>
    </div>
</section>
</div>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>