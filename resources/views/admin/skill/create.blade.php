@extends('layouts.backend.master')

@section('title', 'Skill Create')

@push('css')
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/10.6.2/css/bootstrap-slider.min.css">

    <link rel="stylesheet" href="{{ asset ('public/backend/assets/vendor/bootstrap-select/css/bootstrap-select.min.css') }}">

    <style>
        .slider.slider-horizontal {
            width: 100%;
        }
    </style>

@endpush


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-headline">
                <div class="row">
                    <div class="col-md-6">
                        <div class="panel-body">
                            <h2>Create Skill</h2>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="panel-body">
                            <h1 style="text-align: right">
                                <a href="{{ route('admin.skill.index') }}" class="btn btn-success btn-md"><span class="lnr lnr-arrow-left"></span>Back</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="panel">
                <div class="panel-body">
                    <form method="POST" action="{{ route('admin.skill.store') }}">
                        @csrf
                        <h3 class="text-center">Category & Tag</h3>
                        <div style="margin-top: 20px" class="form-group">
                            <div class="form-line {{ $errors->has('$categories') ? 'focused error' : '' }}">
                                <label for="category">Category: </label>
                                <select name="category" id="category" data-live-search="true" class="selectpicker form-control show-tick">
                                    @if($categories)
                                        @foreach($categories as $category)
                                            <option value="{{ $category->id }}">{{ $category->name }}</option>
                                        @endforeach
                                    @endif
                                </select>
                                <p>Search with "skill" keywork</p>
                            </div>
                        </div>
                        <div style="margin-top: 20px" class="form-group">
                            <div class="form-line {{ $errors->has('$tags') ? 'focused error' : '' }}">
                                <label for="tags">Tag: </label>
                                <select name="tags[]" id="tags" data-live-search="true" class="selectpicker form-control show-tick" multiple>
                                    @if($tags)
                                        @foreach($tags as $tag)
                                            <option value="{{ $tag->id }}">{{ $tag->name }}</option>
                                        @endforeach
                                    @endif
                                </select>
                                <p>Search with "skill" keywork</p>
                            </div>
                        </div>
                </div>
            </div>
        </div> {{-- col-md-8--}}
        <div class="col-md-8">
            <div class="panel">
                <div class="panel-body">
                    <div class="form-group">
                        <label for="experience">Year of Experience: </label>
                        <select class="form-control" name="experience" id="experience">
                            <option value="1 Year">1 Year</option>
                            <option value="2 Years">2 Years</option>
                            <option value="3 Years">3 Years</option>
                            <option value="4 Years">4 Years</option>
                            <option value="More than 4 years">More than 4 years</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="skill-range">Skill Level:</label>
                        <input type="text" class="form-control" name="skill_level" id="skill-range" data-slider-id="skill-slider" ata-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="0">
                        <p>Example: 0-39 = Learning, 40-69 = Beginner, 70-79 = Intermediate, 80-100 = Expert</p>
                    </div>
                    <label for="short_decs">Short Description</label>
                    <textarea class="form-control" name="short_decs" id="short_decs" cols="30" rows="10" placeholder="Write an Short Desc."></textarea>
                    <p>Write Short Description within 30 Words</p>


                    <input type="submit" value="SUBMIT" class="btn btn-primary">
                </form>
                </div>
            </div>
        </div>
    </div>
@stop


@push('js')
    <script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/10.6.2/bootstrap-slider.min.js"></script>
    <script src="{{ asset ('public/backend/assets/vendor/bootstrap-select/js/bootstrap-select.min.js') }}"></script>

    <script>
        // Bootstrap Select
        $(function(){
            $('select.multiselect').selectpicker();

            // With JQuery
            $("#skill-range").slider();
        });

    </script>
@endpush