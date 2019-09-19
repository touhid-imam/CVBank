<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $user->name }} - {{ config('app.name') }}</title>

    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Poppins&display=swap" rel="stylesheet">


    <style>
        body{
            font-family: 'Poppins', sans-serif;
        }
        h1, h2, h3, h4, h5{
            font-family: 'Kaushan Script', cursive;

        }
        h1.pop, h2.pop, h3.pop, h4.pop, h5.pop, h6.pop{
            font-family: 'Poppins', sans-serif;
            font-weight:bold;
        }
        p{
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
        .box-gray{
            background: #dddddd;
        }
        .border{
            border: 2px solid #dddddd;
        }
        .color-white{
            color: #ffffff;
        }
        .heading-color{
            color: #2F79B9;
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
    </style>
</head>
<body>
    <section style="padding: 40px 0;" class="header-area bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <div class="profile-photo">
                        <img style="width: 100%" class="thumbnail" src="{{ Storage::disk('public')->url('profile/front/' . $user->image) }}" alt="{{ $user->image }}" />
                    </div>
                </div>
                <div class="col-sm-9">
                    <div class="main-title">
                        <h1 style="padding-top: 10px;text-transform: uppercase;" class="m-0">Touhid Imam</h1>
                        <h4 style="padding: 5px; padding-bottom: 10px;text-transform: uppercase;" class="m-0">Web Apps Developer</h4>
                    </div>
                    <p>{{ $user->short_desc }}</p>
                    <ul>
                        <li><a class="color-white" href="#">touhid.watson@gmail.com</a></li>
                        <li><a class="color-white" href="#">01914006019</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section style="padding: 40px 0;" class="education-area">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="heading-color" style="text-transform: uppercase">Educational History</h1>

                    <div style="padding-top: 20px " class="education-wrapper">
                        <div style="display: inline-block; padding: 20px" class="single-education">

                            <h3 class="pop" style="text-transform: uppercase;">Bachelor of Computer Science</h3>
                            <h4 class="pop" style="text-transform: uppercase;">Eastern University  <span style="padding-left: 20px; color: #000000"> 2008 - 2010</span></h4>
                            <p>lorem ipsum doler sit amet, lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum, lorem ipsum doler sit amet, lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum, lorem ipsum doler sit amet, lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum</p>
                        </div>
                    </div>
                    <div class="border"></div>
                    <div style="display: inline-block; padding: 20px" class="single-education">

                        <h3 class="pop" style="text-transform: uppercase;">Bachelor of Computer Science</h3>
                        <h4 class="pop" style="text-transform: uppercase;">Eastern University  <span style="padding-left: 20px; color: #000000"> 2008 - 2010</span></h4>
                        <p>lorem ipsum doler sit amet, lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum, lorem ipsum doler sit amet, lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum, lorem ipsum doler sit amet, lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum doler sit amet lorem ipsum</p>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </section>


    <section style="padding-bottom: 40px;" class="skills-area">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="heading-color" style="text-transform: uppercase">Skills</h1>

                    <div style="padding-top: 30px" class="single-skill">
                        <div class="row">
                            <div class="col-sm-2">
                                <h3 class="m-0 pop">Laravel</h3>
                            </div>
                            <div class="col-sm-10">
                                <div style="margin-bottom: 0" class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                                        <span class="sr-only">60% Complete</span>
                                        <span>60%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="padding-top: 30px" class="single-skill">
                        <div class="row">
                            <div class="col-sm-2">
                                <h3 class="m-0 pop">React JS</h3>
                            </div>
                            <div class="col-sm-10">
                                <div style="margin-bottom: 0" class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                                        <span class="sr-only">60% Complete</span>
                                        <span>60%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section style="padding: 40px 0;" class="personal-info">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="heading-color" style="text-transform: uppercase">Personal Information</h1>

                    <div style="padding-top: 25px" class="info-wrapper">
                        <ul>
                            <li>Name: Touhid Imam</li>
                            <li>Name: Zakia Sultana</li>
                            <li>Birthday: 15 Jan 1993</li>
                            <li>Nationality: Bangladeshi</li>
                            <li>Marital Status: Single</li>
                            <li>Sex: Male</li>
                            <li>Language: Bangla, English</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <section style="padding: 40px 0;" class="contact-info">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="heading-color" style="text-transform: uppercase">Personal Information</h1>

                    <div style="padding-top: 25px" class="info-wrapper">
                        <ul>
                            <li>Phone: 01914006019</li>
                            <li>Email: touhid.watson@gmail.com</li>
                            <li>Present Address: Bosila Dhaka</li>
                            <li>Permanent Address: Rajbari Sadar, Rajbari</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </section>


    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>
</html>