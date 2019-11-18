@extends('layouts.backend.master')

@section('title', 'Job Update')


@push('css')

    <link rel="stylesheet" href="{{ asset ('public/backend/assets/vendor/bootstrap-select/css/bootstrap-select.min.css') }}">

@endpush


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-heading">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h2>Post a Job</h2>
                        </div>
                        <div class="col-md-6">
                            <h1 style="text-align: right">
                                <a href="{{ route('admin.jobs.index') }}" class="btn btn-success btn-md"><span class="lnr lnr-arrow-left"></span>Back</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <form method="POST" action="{{ route ('admin.jobs.update', $jobPost->id) }}" enctype="multipart/form-data">
        <div class="col-md-9">
            @csrf
            @method('patch')
            <div class="panel">
                <div class="panel-body">
                    <div class="form-group">
                        <label for="title">Job Title</label>
                        <input type="text" name="title" class="form-control" value="{{ $jobPost->title }}">
                    </div>
                    <div class="form-group">
                        <label for="job_type">Job Type</label>
                        <select name="job_type" id="job_type" class="form-control">
                            @foreach($job_types as $key => $job_type)
                                <option value="{{ $job_type->id }}" {{ $job_type->id == $jobPost->id ? 'selected' : '' }}>{{ $job_type->name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="company">Company Name</label>
                        <input type="text" name="company" class="form-control" value="{{ $jobPost->company }}">
                    </div>
                    <div class="form-group">
                        <label for="location">Location</label>
                        <input type="text" name="location" class="form-control" value="{{ $jobPost->location }}">
                    </div>
                    <div class="form-group">
                        <label for="desc">Job Description</label>
                        <textarea class="form-control" name="desc" id="desc" cols="30" rows="10">{{ $jobPost->desc }}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="image">Featured Image:</label>
                        <input type="file" name="image" id="image">
                    </div>
                    <p class="text-danger">N.B: Image size should be 1500x1054</p>
                    <div class="form-group">
                        <label for="status" class="checkbox-inline">
                            <input type="checkbox" name="status" id="status" {{ $jobPost->status == true ? 'checked' : '' }}> Publish
                        </label>
                    </div>
                    <input type="submit" value="Update" class="btn btn-primary">
                </div>
            </div>
        </div>

        <div class="col-md-3">
            <div class="panel">
                <div class="panel-body">
                    <h3>Select Category</h3>
                    <select class="selectpicker form-control show-tick" name="category" id="category" data-live-search="true">
                        @if($categories)
                            @foreach($categories as $category)
                                <option value="{{ $category->id }}"
                                @foreach($jobPost->categories as $jobCategory)
                                    {{ $jobCategory->id == $category->id ? 'selected' : '' }}
                                        @endforeach
                                >{{ $category->name }}</option>
                            @endforeach
                        @endif
                    </select>
                </div>
            </div>

            <div class="panel">
                <div class="panel-body">
                    <h3>Featured Image</h3>
                    <img class="img-responsive img-thumbnail" src="{{ Storage::disk('public')->url('jobs/' . $jobPost->image) }}" alt="{{ $jobPost->image }}">
                </div>
            </div>
        </div>
    </form>
    </div> <!-- row -->



@endsection


@push('js')
    <script src="{{ asset ('public/backend/assets/vendor/bootstrap-select/js/bootstrap-select.min.js') }}"></script>
@endpush