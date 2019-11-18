@extends('layouts.frontend.master')

@section('title', 'Home')

@push('css')
    <link rel="stylesheet" href="http://cdn.bootcss.com/toastr.js/latest/css/toastr.min.css">
    <style>
        .pagination {
            text-align: center;
            display: inline-block;
        }
        .block-27 ul.pagination li {
            display: inline-block;
            margin-bottom: 4px;
            font-weight: 400;

        }

        .block-27 ul.pagination li a, .block-27 ul.pagination li span {
            color: #5dd28e;
            text-align: center;
            display: inline-block;
            width: 40px;
            height: 40px;
            line-height: 40px;
            border-radius: 50%;
            border: 1px solid #cccccc;
        }
        .block-27 ul.pagination li.active a, .block-27 ul.pagination li.active span {
            background: #5dd28e;
            color: #fff;
            border: 1px solid transparent;
            margin: 0;
            padding: 0;
        }
        .block-27 ul.pagination li a, .page-item.disabled .page-link{
            margin: 0;
            padding: 0;
        }
        .page-item:first-child .page-link, .page-item:last-child .page-link {
            margin-left: 0;
            border-radius: 50%;
        }
    </style>

@endpush

@section('hero-area')

    <div class="hero-wrap js-fullheight" style="background-image: url('{{asset ('public/front/assets/images/bg_2.jpg')}}');" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
                <div class="col-xl-10 ftco-animate mb-5 pb-5" data-scrollax=" properties: { translateY: '70%' }">
                    <p class="mb-4 mt-5 pt-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">We have <span class="number" data-number="850000">0</span> great job offers you deserve!</p>
                    <h1 class="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Your Dream <br><span>Job is Waiting</span></h1>

                    <div class="ftco-search">
                        <div class="row">
                            <div class="col-md-12 nav-link-wrap">
                                <div class="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a class="nav-link active mr-md-1" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Find a Job</a>

                                    <a class="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Find a Candidate</a>

                                </div>
                            </div>
                            <div class="col-md-12 tab-wrap">

                                <div class="tab-content p-4" id="v-pills-tabContent">

                                    <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                                        <form action="{{ route ('jobs.search') }}" method="GET" class="search-job">
                                            <div class="row">
                                                <div class="col-md">
                                                    <div class="form-group">
                                                        <div class="form-field">
                                                            <div class="icon"><span class="icon-briefcase"></span></div>
                                                            <input type="text" name="job_name" class="form-control" placeholder="eg. Garphic. Web Developer">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md">
                                                    <div class="form-group">
                                                        <div class="form-field">
                                                            <div class="select-wrap">
                                                                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                                <select name="job_role" id="job_role" class="form-control">
                                                                    @foreach($job_roles as $key=>$job_role)
                                                                        <option value="{{ $job_role->id }}">{{ $job_role->name }}</option>

                                                                    @endforeach
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md">
                                                    <div class="form-group">
                                                        <div class="form-field">
                                                            <div class="icon"><span class="icon-map-marker"></span></div>
                                                            <input type="text" name="job_location" class="form-control" placeholder="Location">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md">
                                                    <div class="form-group">
                                                        <div class="form-field">
                                                            <input type="submit" value="Search" class="form-control btn btn-primary">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                                        <form action="{{ route('userSearch') }}" method="GET" class="search-job">
                                            <div class="row">
                                                <div class="col-md">
                                                    <div class="form-group">
                                                        <div class="form-field">
                                                            <div class="icon"><span class="icon-user"></span></div>
                                                            <input type="text" name="query" class="form-control" placeholder="eg. Adam Scott">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md">
                                                    <div class="form-group">
                                                        <div class="form-field">
                                                            <div class="select-wrap">
                                                                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                                <select name="job_role" id="job_role" class="form-control">
                                                                    @foreach($job_roles as $key=>$job_role)
                                                                    <option value="{{ $job_role->id }}">{{ $job_role->name }}</option>

                                                                    @endforeach
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md">
                                                    <div class="form-group">
                                                        <div class="form-field">
                                                            <div class="icon"><span class="icon-map-marker"></span></div>
                                                            <input type="text" name="job_location" class="form-control" placeholder="Location">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md">
                                                    <div class="form-group">
                                                        <div class="form-field">
                                                            <input type="submit" value="Search" class="form-control btn btn-primary">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop



@section('main-content')
    <section class="ftco-section services-section bg-light">
        <div class="container">
            <div class="row d-flex">
                <div class="col-md-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services d-block">
                        <div class="icon"><span class="flaticon-resume"></span></div>
                        <div class="media-body">
                            <h3 class="heading mb-3">Search Millions of Jobs</h3>
                            <p>A small river named Duden flows by their place and supplies.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services d-block">
                        <div class="icon"><span class="flaticon-collaboration"></span></div>
                        <div class="media-body">
                            <h3 class="heading mb-3">Easy To Manage Jobs</h3>
                            <p>A small river named Duden flows by their place and supplies.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services d-block">
                        <div class="icon"><span class="flaticon-promotions"></span></div>
                        <div class="media-body">
                            <h3 class="heading mb-3">Top Careers</h3>
                            <p>A small river named Duden flows by their place and supplies.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services d-block">
                        <div class="icon"><span class="flaticon-employee"></span></div>
                        <div class="media-body">
                            <h3 class="heading mb-3">Search Expert Candidates</h3>
                            <p>A small river named Duden flows by their place and supplies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section ftco-counter">
        <div class="container">
            <div class="row justify-content-center mb-5 pb-3">
                <div class="col-md-7 heading-section text-center ftco-animate">
                    <span class="subheading">Categories work wating for you</span>
                    <h2 class="mb-4"><span>Current</span> Job Posts</h2>
                </div>
            </div>
            <div class="row">
                @foreach($categories as $jobCategory)

                        @if($jobCategory->jobPosts->count() != 0)
                        <div style="margin: 0 15px;" class="col-md-3 ftco-animate category">
                            <li><a href="#">{{ $jobCategory->name }} <span class="number" data-number="{{ $jobCategory->jobPosts->count() }}">{{ $jobCategory->jobPosts->count() }}</span></a></li>
                        </div>
                        @endif

                @endforeach
            </div>

            </div>
    </section>

    <section class="ftco-section bg-light">
        <div class="container">
            <div class="row justify-content-center mb-5 pb-3">
                <div class="col-md-7 heading-section text-center ftco-animate">
                    <span class="subheading">Recently Added Jobs</span>
                    <h2 class="mb-4"><span>Recent</span> Jobs</h2>
                </div>
            </div>
            <div class="row">
                @foreach($jobPosts as $jobPost)
                <div class="col-md-12 ftco-animate">

                    <div class="job-post-item bg-white p-4 d-block d-md-flex align-items-center">

                        <div class="mb-4 mb-md-0 mr-5">
                            <div class="job-post-item-header d-flex align-items-center">
                                <h2 class="mr-3 text-black h3">{{ $jobPost->title }}</h2>
                                <div class="badge-wrap">
                                    <span class="bg-primary text-white badge py-2 px-3">{{ $jobPost->job_type->name }}</span>
                                </div>
                            </div>
                            <div class="job-post-item-body d-block d-md-flex">
                                <div class="mr-3"><span class="icon-layers"></span> <a href="#">{{ $jobPost->company }}</a></div>
                                <div><span class="icon-my_location"></span> <span>{{ $jobPost->location }}</span></div>
                            </div>
                        </div>

                        <div class="ml-auto d-flex">
                            @if(Auth::guest())
                            <a href="javascript:void(0)" onclick="toastr.info('You need to login first for applying on this job', 'info', {
                                closeButton: true,
                                progressBar: true
                            })" class="btn btn-primary py-2 mr-1">Apply Job</a>
                            <a href="javascript:void(0)" onclick="toastr.info('You need to login first for adding favourite list.', 'info', {
                                closeButton: true,
                                progressBar: true
                            })" class="btn btn-secondary rounded-circle btn-favorite d-flex align-items-center icon">
                                <span class="icon-heart"></span>
                            </a>
                            @else

                                    <a href="javascript:void(0)" onclick="" class="btn btn-primary py-2 mr-1">Apply Job</a>
                                    {{--<a href="javascript:void(0)" onclick="document.getElementById('favourite-form-{{ $jobPost->id }}').submit()" class="btn {{ $jobPost->favourite_to_users->count() == 1 ? "btn-danger" : 'btn-secondary icon' }} rounded-circle btn-favorite d-flex align-items-center">--}}
                                        {{--<span class="icon-heart"></span>--}}
                                    {{--</a>--}}

                                    <a href="javascript:void(0)" onclick="favourite({{ $jobPost->id }})" id="favourite_job" class="btn {{ $jobPost->favourite_to_users->count() == 1 ? 'btn-danger'  : "btn-secondary icon" }} rounded-circle btn-favorite d-flex align-items-center">
                                    <span class="icon-heart"></span>
                                    </a>

                            @endif                        </div>
                    </div>
                </div><!-- end -->
                @endforeach
            </div>
            <div class="row mt-5">
                <div class="col text-center">
                    <div class="block-27">
                        {{ $jobPosts->links() }}
                        {{--<ul>--}}
                            {{--<li><a href="#">&lt;</a></li>--}}
                            {{--<li class="active"><span>1</span></li>--}}
                            {{--<li><a href="#">2</a></li>--}}
                            {{--<li><a href="#">3</a></li>--}}
                            {{--<li><a href="#">4</a></li>--}}
                            {{--<li><a href="#">5</a></li>--}}
                            {{--<li><a href="#">&gt;</a></li>--}}
                        {{--</ul>--}}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section ftco-counter img" id="section-counter" style="background-image: url(images/bg_1.jpg);" data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 text-center">
                                <div class="text">
                                    <strong class="number" data-number="{{ $jobPosts->count() }}">0</strong>
                                    <span>Jobs</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 text-center">
                                <div class="text">
                                    <strong class="number" data-number="{{ $users->count() }}">0</strong>
                                    <span>Members</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 text-center">
                                <div class="text">
                                    <strong class="number" data-number="30000">0</strong>
                                    <span>Resume</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                            <div class="block-18 text-center">
                                <div class="text">
                                    <strong class="number" data-number="10500">0</strong>
                                    <span>Company</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="ftco-section testimony-section">
        <div class="container">
            <div class="row justify-content-center mb-5 pb-3">
                <div class="col-md-7 text-center heading-section ftco-animate">
                    <span class="subheading">Testimonial</span>
                    <h2 class="mb-4"><span>Happy</span> Clients</h2>
                </div>
            </div>
            <div class="row ftco-animate">
                <div class="col-md-12">
                    <div class="carousel-testimony owl-carousel ftco-owl">
                        <div class="item">
                            <div class="testimony-wrap py-4 pb-5">
                                <div class="user-img mb-4" style="background-image: url({{asset ('public/front/assets/images/person_1.jpg')}})">
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                                </div>
                                <div class="text">
                                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <p class="name">Roger Scott</p>
                                    <span class="position">Marketing Manager</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="testimony-wrap py-4 pb-5">
                                <div class="user-img mb-4" style="background-image: url({{asset ('public/front/assets/images/person_2.jpg')}})">
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                                </div>
                                <div class="text">
                                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <p class="name">Roger Scott</p>
                                    <span class="position">Interface Designer</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="testimony-wrap py-4 pb-5">
                                <div class="user-img mb-4" style="background-image: url({{asset ('public/front/assets/images/person_3.jpg')}})">
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                                </div>
                                <div class="text">
                                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <p class="name">Roger Scott</p>
                                    <span class="position">UI Designer</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="testimony-wrap py-4 pb-5">
                                <div class="user-img mb-4" style="background-image: url({{asset ('public/front/assets/images/person_1.jpg')}})">
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                                </div>
                                <div class="text">
                                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <p class="name">Roger Scott</p>
                                    <span class="position">Web Developer</span>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="testimony-wrap py-4 pb-5">
                                <div class="user-img mb-4" style="background-image: url({{asset ('public/front/assets/images/person_1.jpg')}})">
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                                </div>
                                <div class="text">
                                    <p class="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <p class="name">Roger Scott</p>
                                    <span class="position">System Analyst</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section bg-light">
        <div class="container">
            <div class="row justify-content-center mb-5 pb-3">
                <div class="col-md-7 heading-section text-center ftco-animate">
                    <span class="subheading">Our Blog</span>
                    <h2><span>Recent</span> Blog</h2>
                </div>
            </div>
            <div class="row d-flex">
                <div class="col-md-3 d-flex ftco-animate">
                    <div class="blog-entry align-self-stretch">
                        <a href="blog-single.html" class="block-20" style="background-image: url({{asset ('public/front/assets/images/image_1.jpg')}});">
                        </a>
                        <div class="text mt-3">
                            <div class="meta mb-2">
                                <div><a href="#">December 2, 2018</a></div>
                                <div><a href="#">Admin</a></div>
                                <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                            </div>
                            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto enim non iste maxime optio, ut com</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-flex ftco-animate">
                    <div class="blog-entry align-self-stretch">
                        <a href="blog-single.html" class="block-20" style="background-image: url({{asset ('public/front/assets/images/image_2.jpg')}});">
                        </a>
                        <div class="text mt-3">
                            <div class="meta mb-2">
                                <div><a href="#">December 2, 2018</a></div>
                                <div><a href="#">Admin</a></div>
                                <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                            </div>
                            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nobis natus incidunt officia assumenda.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-flex ftco-animate">
                    <div class="blog-entry align-self-stretch">
                        <a href="blog-single.html" class="block-20" style="background-image: url({{asset ('public/front/assets/images/image_3.jpg')}});">
                        </a>
                        <div class="text mt-3">
                            <div class="meta mb-2">
                                <div><a href="#">December 2, 2018</a></div>
                                <div><a href="#">Admin</a></div>
                                <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                            </div>
                            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi obcaecati praesentium,</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-flex ftco-animate">
                    <div class="blog-entry align-self-stretch">
                        <a href="blog-single.html" class="block-20" style="background-image: url({{asset ('public/front/assets/images/image_4.jpg')}});">
                        </a>
                        <div class="text mt-3">
                            <div class="meta mb-2">
                                <div><a href="#">December 2, 2018</a></div>
                                <div><a href="#">Admin</a></div>
                                <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                            </div>
                            <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minima, dolores quis, dolorum accusamu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section-parallax">
        <div class="parallax-img d-flex align-items-center">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-7 text-center heading-section heading-section-white ftco-animate">
                        <h2>Subcribe to our Newsletter</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                        <div class="row d-flex justify-content-center mt-4 mb-4">
                            <div class="col-md-8">
                                <form action="#" class="subscribe-form">
                                    <div class="form-group d-flex">
                                        <input type="text" class="form-control" placeholder="Enter email address">
                                        <input type="submit" value="Subscribe" class="submit px-3">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop


@push('js')
    <script src="//cdn.bootcss.com/toastr.js/latest/js/toastr.min.js"></script>
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

        $.ajaxSetup({

            headers: {

                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

            }

        });

        function favourite($job_id){

            var post = $job_id;

            $.ajax({
                type:'POST',
                url: '{{ route("jobpost.favourite") }}',
                data:{post : post},
                success:function(data){
                    if(data.class === 1){
                        $('#favourite_job').removeClass('btn-secondary icon');
                        $('#favourite_job').addClass('btn-danger').css('color', '#ffffff');
                    } else{
                        $('#favourite_job').removeClass('btn-danger');
                        $('#favourite_job').addClass('btn-secondary icon').css('color', '#D9D9D9');
                    }
                }
            });

        }
    </script>
@endpush