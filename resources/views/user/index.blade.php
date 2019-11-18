@extends('layouts.profile.master')

@section('user-profile')

    <!-- Show label background randomly -->

    @php
        $randomLabel = array("success", "primary","info", "default", "warning", "danger")
    @endphp

    <!-- About section -->
    <article class="hs-content about-section" id="section1">
        <span class="sec-icon fa fa-home"></span>
        <div class="hs-inner">
            {{--<span class="before-title">1</span>--}}
            <h2>ABOUT</h2>
            <span class="content-title">PERSONAL DETAILS</span>
            <div class="aboutInfo-contanier">
                <div class="about-card">
                    <div class="face2 card-face">
                        <div id="cd-google-map">
                            <div class="video-wrapper">
                                <iframe width="445" height="225" src="https://www.youtube.com/embed/{{ $user->video }}" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <address>{{ $user->name }} - {{ $user->location }}</address>
                            <div class="back-cover" data-card-back="data-card-back"><i class="fa fa-long-arrow-left"></i>
                            </div>
                        </div>
                    </div>
                    <div class="face1 card-face">
                        <div class="about-cover card-face">
                            <a class="map-location" data-card-front="cd-google-map"><img src="{{ asset('public/front') }}/icons/icon-play.png" alt="">
                            </a>
                            <div class="about-details">
                                <div><span class="fa fa-inbox"></span><span class="detail">{{ $user->email }}</span>
                                </div>
                                <div><span class="fa fa-phone"></span><span class="detail">{{ $user->phone }}</span>
                                </div>
                            </div>

                            <div class="cover-content-wrapper">
                                            <span class="about-description">Hello. I am
                                                <span class="rw-word">                          <span><strong>{{ $user->name }}</strong></span>
                                            </span>
                                            <br>{{ str_limit($user->short_desc, '100') }}</span>
                                <span class="status">
                                            <span style="{{ $user->availability == 1 ? "color: #63a924" : "color: red" }}" class="fa fa-circle"></span>
                                            <span class="text">{{ $user->availability == 1 ? "Available" : "unavailable" }} as <strong>freelance</strong></span>
                                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="more-details">
                    <div class="tabbable tabs-vertical tabs-left">
                        <ul id="myTab" class="nav nav-tabs">
                            <li class="active">
                                <a href="#bio" data-toggle="tab">Bio</a>
                            </li>
                            <li>
                                <a href="#hobbies" data-toggle="tab">Hobbies</a>
                            </li>
                            <li>
                                <a href="#facts" data-toggle="tab">Facts</a>
                            </li>
                        </ul>
                        <div id="myTabContent" class="tab-content">

                            <div class="tab-pane fade in active" id="bio">
                                <h3>BIO</h3>
                                <h4>ABOUT ME</h4>
                                <p>{{ $user->short_desc }}</p>
                            </div>
                            @if($hobbyFacts)
                            <div class="tab-pane fade" id="hobbies">
                                <h3>HOBBIES</h3>
                                <h4>INTERESTS</h4>
                                @foreach($hobbyFacts as $hobbyFact)
                                    @if($hobbyFact->hobby_status == 1)
                                    <div class="hobbie-wrapper row">
                                    <div class="hobbie-icon col-md-3"><i class="{{ $hobbyFact->hobby_icon }}"></i>
                                    </div>
                                    <div class="hobbie-description col-md-9">

                                        <p>{{ $hobbyFact->hobby_text }}</p>
                                    </div>
                                    <div style="clear:both;"></div>

                                    </div>
                                    @endif
                                @endforeach
                                <div style="clear:both;"></div>
                            </div>

                            <div class="tab-pane fade" id="facts">
                                <h3>FACTS</h3>
                                <h4>NUMBERS ABOUT ME</h4>

                                @foreach($hobbyFacts as $hobbyFact)
                                    @if($hobbyFact->fact_status == 1)
                                    <div class="facts-wrapper col-md-6">
                                        <div class="facts-icon"><i class=" {{ $hobbyFact->fact_icon }}"></i>
                                        </div>
                                        <div class="facts-number">{{ $hobbyFact->fact_heading }}</div>
                                        <div class="facts-description">{{ $hobbyFact->fact_tagline }}</div>
                                    </div>
                                    @endif
                                @endforeach

                                <div style="clear:both;"></div>
                            </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
    </article>
    <!-- End About Section -->



    <!-- Resume Section -->
    <article class="hs-content resume-section" id="section2">
        <span class="sec-icon fa fa-newspaper-o"></span>
        <div class="hs-inner">
            {{--<span class="before-title">.02</span>--}}
            <h2>RESUME</h2>
            @if($resumes)
                @foreach($resumes as $resumeHeading)
                    @php
                        if($resumeHeading->option == 1){
                            $educationHeading = true;
                        }
                        if($resumeHeading->option == 2){
                            $academicHeading = true;
                        }
                        if($resumeHeading->option == 3){
                            $awardHeading = true;
                        }

                    @endphp

                @endforeach
                    {{--$educationHeading = $resumeHeading->option == 1 ? false : true;--}}
                    {{--$academicHeading = $resumeHeading->option == 2 ? true : false;--}}
                    {{--$awardHeading = $resumeHeading->option == 3 ? true : false;--}}
            <!-- Resume Wrapper -->
            <div class="resume-wrapper">
                <ul class="resume">
                    <!-- Resume timeline -->
                    @if(!empty($educationHeading))
                        <li class="time-label">
                            <span class="content-title">EDUCATION</span>
                        </li>
                    @endif
                    @foreach($resumes as $education)
                        @if($education->option == 1)
                        <li>
                            <div class="resume-tag">
                                <span class="fa fa-graduation-cap"></span>
                                <div class="resume-date">
                                    <span>{{ date('Y', strtotime($education->start)) }}</span>
                                    <div class="separator"></div>
                                    <span>{{ date('Y', strtotime($education->end)) }}</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-location"><i class="fa fa-map-marker"></i>{{ $education->location }}</span>
                                <h3 class="timeline-header">{{ $education->title }}</h3>
                                <div class="timeline-body">
                                    <h4>{{ $education->university_org }}</h4>
                                    <span>{{ str_limit($education->desc, 120) }}</span>
                                </div>
                            </div>
                        </li>
                        @endif
                    @endforeach


                    @if(!empty($academicHeading))
                        <li class="time-label">
                            <span class="content-title">ACADEMIC AND PROFESSIONAL POSITIONS</span>
                        </li>
                    @endif

                    @foreach($resumes as $academic)
                        @if($academic->option == 2)
                            <li>
                                <div class="resume-tag">
                                    <span class="fa fa-university"></span>
                                    <div class="resume-date">
                                        <span>{{ date('Y', strtotime ($academic->start)) }}</span>
                                        <div class="separator"></div>
                                        <span>{{ date('Y', strtotime ($academic->end)) }}</span>
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <span class="timeline-location"><i class="fa fa-map-marker"></i>{{ $academic->location }}</span>
                                    <h3 class="timeline-header">{{ $academic->title }}</h3>
                                    <div class="timeline-body">
                                        <h4>{{ $academic->university_org }}</h4>
                                        <span>{{ str_limit($academic->desc, 120)}}</span>
                                    </div>
                                </div>
                            </li>
                        @endif
                    @endforeach
                    @if(!empty($awardHeading))
                        <li style="" class="time-label">
                            <span class="content-title">HONORS AND AWARDS</span>
                        </li>
                    @endif
                    @foreach($resumes as $award)
                        @if($award->option == 3)

                        <li>
                            <div class="resume-tag">
                                <span class="fa fa-star-o"></span>
                                <div class="resume-date">
                                    <span>{{ date('Y', strtotime($award->start)) }}</span>
                                    <div class="separator"></div>
                                    <span>{{ date('Y', strtotime($award->end)) }}</span>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <span class="timeline-location"><i class="fa fa-map-marker"></i>{{ $award->location }}</span>
                                <h3 class="timeline-header">{{ $award->title }}</h3>
                                <div class="timeline-body">
                                    <h4>{{ $award->university_org }}</h4>
                                    <span>{{ str_limit($award->desc, 120)}}</span>
                                </div>
                            </div>
                        </li>
                         @endif

                    @endforeach

                    <!-- End Resume timeline -->
                </ul>
            </div>
            <!-- End Resume Wrapper -->
            @endif
        </div>
    </article>
    <!-- End Resume Section-->


    <!-- Publication Section -->
    <article class="hs-content publication-section" id="section3">
        <span class="sec-icon fa fa-pencil"></span>
        <div class="hs-inner">
            {{--<span class="before-title">.03</span>--}}
            <h2>PUBLICATIONS</h2>
            <!-- Filter/Sort Menu -->
            <span class="content-title">PUBLICATIONS LIST</span>
            <div class="row publication-form">
                <div class="col-md-6 publication-filter">
                    <div class="card-drop">
                        <a class='toggle'>
                            <i class='icon-suitcase'></i>
                            <span class='label-active'>ALL</span>
                        </a>
                        <ul id="filter">
                            <li class='active'><a data-label="ALL" data-group="all">ALL</a>
                            </li>
                            @if($categories)
                                @foreach($categories as $category)
                                    <li><a data-label="{{ $category->slug }}" data-group="{{ $category->slug }}">{{ strtoupper($category->name) }}</a>
                                    </li>
                                @endforeach
                            @endif
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 publication-sort">
                    <div class="sorting-button">
                        <span>SORTING BY DATE</span>
                        <button class="desc"><i class="fa fa-sort-numeric-desc"></i>
                        </button>
                        <button class="asc"><i class="fa fa-sort-numeric-asc"></i>
                        </button>
                    </div>


                </div>
            </div>
            <!-- End Filter/Sort Menu -->

            <!-- publication wrapper -->
            <div id="mygrid">
                @if($posts)
                <!-- publication item -->
                @foreach($posts as $post)
                <div class="publication_item" data-groups='["all", @foreach($post->categories as $category) "{{ $category->slug }}" @endforeach ]' data-date-publication="{{ date("Y-m-d", strtotime($post->created_at)) }}">
                    <div class="media">
                        <a href=".{{ $post->slug }}" class="ex-link open_popup" data-effect="mfp-zoom-out"><i class="fa fa-plus-square-o"></i></a>
                        <div class="date pull-left">
                            <span class="day">{{ date("j", strtotime($post->created_at)) }}</span>
                            <span class="month">{{ strtoupper(date("M", strtotime($post->created_at))) }}</span>
                            <span class="year">{{ date("Y", strtotime($post->created_at)) }}</span>
                        </div>
                        <div class="media-body">
                            <h3>{{ $post->title }}</h3>
                            <h4>{{ $post->user->location }}</h4>
                            <span class="publication_description">{{ str_limit(str_replace('&nbsp;', ' ', strip_tags($post->decs)), 150) }}</span> </div>
                        <hr style="margin:8px auto">

                        @foreach($post->tags as $tag)
                        <span class="label label-{{ $randomLabel[array_rand($randomLabel)]}}">{{ $tag->name }}</span>
                        @endforeach
                        <span class="publication_authors"><strong>{{ $post->user->name }}</strong>, {{ $post->user->location }}</span>
                    </div>
                    <div class="mfp-hide mfp-with-anim {{ $post->slug }} publication-detail">
                        <div class="image_work">
                            <img class="img-responsive" src="{{ Storage::disk('public')->url('post/' . $post->image) }}" alt="{{ $post->image }}" width="480" height="200">
                        </div>
                        <div class="project_content">
                            <h3 class="publication_title">{{ $post->title }}</h3>
                            <span class="publication_authors"><strong>{{ $post->user->name }}</strong> {{ $post->user->location }}</span>
                            @foreach($post->tags as $tag)
                                <span class="label label-{{ $randomLabel[array_rand($randomLabel)]}}">{{ $tag->name }}</span>
                            @endforeach

                            {!! $post->decs !!}
                        </div>
                        <a class="ext_link" href="#"><i class="fa fa-external-link"></i></a>
                        <div style="clear:both"></div>
                    </div>
                </div>
                @endforeach
                <!-- End publication item -->
                @endif

            </div>
            <!-- End Publication Wrapper -->
        </div>
        <div class="clear"></div>
    </article>
    <!-- End Publication Section -->


    <!-- Research Section -->
    <article class="hs-content research-section" id="section4">
        <span class="sec-icon fa fa-flask"></span>
        <div class="hs-inner">
            {{--<span class="before-title">.04</span>--}}
            <h2>RESEARCH</h2>
            <span class="content-title">YOUR TEAM</span>
            <div class="team_wrapper">
                @if($teamMembers)
                    @foreach($teamMembers as $teamMember)
                    <div class="team-card-container">
                    <div class="card">
                        <div style="background: linear-gradient(rgba(43, 48, 59, 0.8), rgba(43, 48, 59, 0.8)), url({{ Storage::disk('public')->url("team/" . $teamMember->image) }}); background: -webkit-linear-gradient(rgba(43, 48, 59, 0.8), rgba(43, 48, 59, 0.8)), url({{ Storage::disk('public')->url("team/" . $teamMember->image) }})" class="front team1">
                            <div class="front-detail">
                                <h4>{{ $teamMember->name }}</h4>
                                <h3>{{ $teamMember->position }}</h3>
                            </div>
                        </div>
                        <div class="back">
                            <p>{{ str_limit($teamMember->desc, 210) }}</p>
                            <div class="social-icons">
                                @if($teamMember->facebook)

                                    <a href="{{ $teamMember->facebook }}"><i class="fa fa-facebook"></i></a>
                                @endif

                                @if($teamMember->stackoverflow)
                                    <a href="{{ $teamMember->stackoverflow }}"><i class="fa fa-stack-overflow"></i></a>
                                @endif
                                @if($teamMember->linkedin)
                                    <a href="{{ $teamMember->linkedin }}"><i class="fa fa-linkedin"></i></a>
                                @endif
                                @if($teamMember->dribbble)
                                    <a href="{{ $teamMember->dribbble }}"><i class="fa fa fa-dribbble"></i></a>
                                @endif
                                @if($teamMember->github)
                                    <a href="{{ $teamMember->github }}"><i class="fa fa fa-github"></i></a>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
                    @endforeach
                @endif
            </div>
        </div>
    </article>
    <!-- End Research Section -->



    <!-- Skills Section -->
    <article class="hs-content skills-section" id="section6">
        <span class="sec-icon fa fa-diamond"></span>
        <div class="hs-inner">
            {{--<span class="before-title">.06</span>--}}
            <h2>SKILLS</h2>
            @if($skills)
                @foreach($skills as $skill)
                    <span class="content-title">@foreach($skill->categories as $skCategory)
                            {{ strtoupper($skCategory->name) }}
                    @endforeach</span>
                    <div class="skolls">
                        <span class="skill-description">{{ str_limit($skill->short_decs, 210) }}</span>
                        <div class="bar-main-container">
                            <div class="wrap">

                                <div class="bar-percentage" data-percentage="{{ $skill->skill_percent }}"></div>
                                <span class="skill-detail"><i class="fa fa-bar-chart"></i>LEVEL : {{ $skill->skill_level }}</span><span class="skill-detail"><i class="fa fa-binoculars"></i>EXPERIENCE : {{ $skill->experience }}</span>
                                <div class="bar-container">
                                    <div class="bar"></div>
                                </div>
                                @foreach($skill->tags as $tag)
                                    <span class="label label-{{ $randomLabel[array_rand($randomLabel)]}}">{{ $tag->name }}</span>
                                @endforeach
                                <div style="clear:both;"></div>
                            </div>
                        </div>
                    </div>
                @endforeach
            @endif
        </div>
    </article>
    <!-- End Skills Section -->


    <!-- Works Section -->
    <article class="hs-content works-section" id="section7">
        <span class="sec-icon fa fa-archive"></span>
        <div class="hs-inner">
            {{--<span class="before-title">.07</span>--}}
            <h2>WORKS</h2>
            <div class="portfolio">
                @if($works)
                <!-- Portfolio Item -->
                @foreach($works as $work)
                <figure class="effect-milo">
                    <img src="{{ Storage::disk('public')->url('work/' . $work->image) }}" alt="{{ $work->image }}" width="282" height="222" />
                    <figcaption>
                        @foreach($work->categories as $category)
                            <span class="label">{{ $category->name }}</span>
                        @endforeach
                        <div class="portfolio_button">
                            <h3>{{ $work->title }}</h3>
                            <a href=".work-{{ $work->id }}" class="open_popup" data-effect="mfp-zoom-out">
                                <i class="hovicon effect-9 sub-b"><i class="fa fa-search"></i></i>
                            </a>
                        </div>
                        <div class="mfp-hide mfp-with-anim work_desc work-{{ $work->id }}">
                            <div class="col-md-6">
                                <div class="image_work">
                                    <img src="{{ Storage::disk('public')->url('work/' . $work->image) }}" alt="{{ $work->image }}" width="560" height="420">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="project_content">
                                    <h2 class="project_title">{{ $work->title }}</h2>
                                    <p class="project_desc">{{ $work->desc }}</p>
                                </div>
                            </div>
                            <a class="ext_link" href="#"><i class="fa fa-external-link"></i></a>
                            <div style="clear:both"></div>
                        </div>
                    </figcaption>
                </figure>
                @endforeach
                <!-- End Portfolio Item -->
                @endif
            </div>
            <!-- End Portfolio Wrapper -->
        </div>
    </article>
    <!-- End Works Section -->


    <!-- Contact Section -->
    <article class="hs-content contact-section" id="section8">
        <span class="sec-icon fa fa-paper-plane"></span>
        <div class="hs-inner">
            {{--<span class="before-title">.08</span>--}}
            <h2>CONTACT</h2>
            <div class="contact_info">
                <h3>Get in touch</h3>
                <hr>
                <h5>We are waiting to assist you</h5>
                <h6>Simply use the form below to get in touch</h6>

                <hr>
            </div>
            <!-- Contact Form -->
            <fieldset id="contact_form">
                @if(count($errors) > 0)
                    <div class="alert alert-danger alert-dismissible text-left">
                        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <ul>
                            @foreach($errors->all() as $error)
                            <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif


                <div class="alert alert-success alert-dismissible text-left">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong></strong>
                </div>

                <form method="POST" action="{{ route('sendEmail') }}">
                    @csrf
                    <input type="text" name="name" id="name" placeholder="NAME" required />
                    <input type="email" name="email" id="email" placeholder="EMAIL" required/>
                    <textarea name="message" id="message" placeholder="MESSAGE"></textarea>
                    <input type="hidden" name="userId" value="{{ $user->id }}">

                    <input type="submit" value="SEND MESSAGE" class="submit_btn" id="submit_btn">
                </form>
            </fieldset>
            <!-- End Contact Form -->
        </div>
    </article>
    <!-- End Contact Section -->

@stop

@push('script')

    <script>
        $.ajaxSetup({

            headers: {

                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

            }

        });

        $('.alert.alert-success').hide();

        $(".submit_btn").click(function(e){

            e.preventDefault();

            var name = $("input[name=name]").val();

            var email = $("input[name=email]").val();

            var message = $("textarea[name=message]").val();

            var userId = $("input[name=userId]").val();



            $.ajax({
                type:'POST',
                url: '{{ route("sendEmail") }}',
                data:{name:name, email:email, message:message, userId: userId},
                success:function(data){
                    if(data.success){
                        $('.alert.alert-success').show();
                        $('.alert.alert-success strong').html(data.success);
                    }

                }
            });



        });
    </script>

@endpush