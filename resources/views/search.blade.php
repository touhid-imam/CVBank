@extends('layouts.frontend.master')

@section('title', 'Search')

@push('css')

    <style>
        #search-view {
            width: 100%;
            display: inline-flex;
        }
        .extra-space{
            padding:250px 0;
        }
        .search-job .form-group .form-control {
            padding-left: 30px;
            display: block;
            width: 100%;
            font-size: 14px;
            border: 1px solid #ffffff;
            color: #000000 !important;
            font-weight: bold;
            background: transparent !important;
        }
        .search-job .form-group .form-control::placeholder{
            color: #000000 !important;
            font-weight: bold;
        }
    </style>

@endpush

@section('hero-area')


    <div class="hero-wrap" style="background-image: url('{{asset ('public/front/assets/images/bg_2.jpg')}}');" data-stellar-background-ratio="0.5">
        <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
                <div class="col-xl-10 ftco-animate mb-5 pb-5 extra-space" data-scrollax=" properties: { translateY: '70%' }">
                    @if($query)
                        <h1 class="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><span id="total_num">{{ $userProfiles->count() }}</span> RESULTS FOR <span id="keyword">{{ strtoupper ($query) }}</span></h1>
                    @else
                        <h1>SEARCH EMPLOYER</h1>
                    @endif

                        <form action="{{ route('userSearch') }}" method="GET" class="search-job">
                            <div class="row">
                                <div class="col-md">
                                    <div class="form-group">
                                        <div class="form-field">
                                            <div class="icon"><span class="icon-user"></span></div>
                                            <input type="text" onkeyup="search()" name="query" id="query" class="form-control" placeholder="eg. Adam Scott">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md">
                                    <div class="form-group">
                                        <div class="form-field">
                                            <div class="select-wrap">
                                                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" class="form-control">
                                                    <option value="">Category</option>
                                                    <option value="">Full Time</option>
                                                    <option value="">Part Time</option>
                                                    <option value="">Freelance</option>
                                                    <option value="">Internship</option>
                                                    <option value="">Temporary</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md">
                                    <div class="form-group">
                                        <div class="form-field">
                                            <div class="icon"><span class="icon-map-marker"></span></div>
                                            <input type="text" class="form-control" placeholder="Location">
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

@stop


@section('main-content')

    <div class="album py-5 bg-light">
        <div class="container">

            <div class="row">
                <span id="search-view">
                    @if($userProfiles)
                        @foreach($userProfiles as $userProfile)
                            <div class="col-md-4">
                        <div class="card mb-4 shadow-sm normal-data">
                            <img src="{{ $userProfile->image != 'default.png' ? Storage::disk('public')->url('profile/front/' . $userProfile->image) : 'https://via.placeholder.com/350x225' }}" alt="{{ $userProfile->image }}">
                            <div class="card-body">
                                <h4>{{ $userProfile->name }}</h4>

                                <p class="card-text">{{ str_limit ($userProfile->short_desc, 150) }}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <a target="_blank" class="btn btn-sm btn-outline-secondary" href="{{ route ('profile', $userProfile->username) }}">View</a>
                                    </div>
                                    <small class="text-muted">{{ $userProfile->updated_at ? $userProfile->updated_at->diffForHumans() : '' }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                        @endforeach
                    @endif
                </span>
            </div>
        </div>
    </div>
@stop


@push('js')

    <script>
        function search(){
            var search = $('#query').val();
            $('#keyword').text(search);
            $.ajax({
                type: 'get',
                url: '{{ route("live.search") }}',
                data: {'query' : search},
                dataType: 'json',
                success: function(data){
                    $('#total_num').html(data.total_data);
                    $('#search-view').html(data.user_data);
                }
            });
        }
    </script>


@endpush