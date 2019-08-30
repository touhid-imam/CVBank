@extends('layouts.backend.master')

@section('title', 'Create Post')

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
                            <h2>Create Post</h2>
                        </div>
                        <div class="col-md-6">
                            <h1 style="text-align: right">
                                <a href="{{ route('admin.post.index') }}" class="btn btn-success btn-md"><span class="lnr lnr-arrow-left"></span>Back</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <form method="POST" action="{{ route('admin.post.store') }}" enctype="multipart/form-data">
            @csrf
            <div class="col-md-8">
                <div class="panel">
                    <div class="panel-body">
                        <div class="form-group">
                            <label for="title">Title:</label>
                            <input type="text" name="title" id="title" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="image">Featured Image:</label>
                            <input type="file" name="image" id="image">
                        </div>
                        <div class="form-group">
                            <label for="status" class="checkbox-inline">
                                <input type="checkbox" name="status" id="status"> Publish
                            </label>
                        </div>
                    </div>
                </div>
            </div> {{-- col-md-8--}}
            <div class="col-md-4">
                <div class="panel">
                    <div class="panel-body">
                        <h3>Tags & Categories</h3>
                        <div class="form-group">
                            <div class="form-line {{ $errors->has('$tags') ? 'focused error' : '' }}">
                                <label for="tags">Tags:</label>
                                <select class="selectpicker form-control show-tick" name="tags[]" id="tags" data-live-search="true" multiple>
                                    @if($tags)
                                        @foreach($tags as $tag)
                                            <option value="{{ $tag->id }}">{{ $tag->name }}</option>
                                        @endforeach
                                    @endif
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="form-line {{ $errors->has('$categories') ? 'focused error' : '' }}">
                                <label for="categories">Categories:</label>
                                <select class="selectpicker form-control show-tick" name="category" id="category" data-live-search="true">
                                    @if($categories)
                                        @foreach($categories as $category)
                                            <option value="{{ $category->id }}">{{ $category->name }}</option>
                                        @endforeach
                                    @endif
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {{-- col-md-4--}}

            <div class="col-md-12">
                <div class="panel">
                    <div class="panel-body">
                        <div class="form-group">
                            <textarea name="decs" class="form-control" id="myEditor"></textarea>
                        </div>
                        <input type="submit" value="SUBMIT" class="btn btn-primary">
                    </div>
                </div>
            </div>
        </form>
    </div>
@stop

@push('js')
    <script src="//cdn.ckeditor.com/4.6.2/standard/ckeditor.js"></script>
    <script src="{{ asset ('public/backend/assets/vendor/bootstrap-select/js/bootstrap-select.min.js') }}"></script>
    <script>

        // bootstrap select

        $(function(){
            $('select.multiselect').selectpicker();
        });

        // CKEditor
        var options = {
            filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
            filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=',
            filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
            filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token='
        };

        CKEDITOR.replace('myEditor', options);

    </script>

@endpush
