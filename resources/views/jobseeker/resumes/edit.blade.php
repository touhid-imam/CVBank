@extends('layouts.backend.master')

@section('title', 'Edit Resume')


@push('css')

    <style>
        .radio {
            position: relative;
            left: 26px;
        }
    </style>

@endpush

@section('content')

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <div class="panel panel-headline">
            <div class="row">
                <div class="col-md-6">
                    <div class="panel-body">
                        <h1>Update Resume</h1>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="panel-body">
                        <h1 style="text-align: right">
                            <a href="{{ route('jobseeker.resumes.index') }}" class="btn btn-success btn-md"><span class="lnr lnr-arrow-left"></span>Back</a>
                        </h1>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="panel-body">
                        <h5>EDUCATION | ACADEMIC AND PROFESSIONAL POSITIONS | HONORS AND AWARDS</h5>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="panel">
                <div class="panel-body">
                    <form method="POST" action="{{ route('jobseeker.resumes.update', $resume->id) }}">
                        @csrf
                        @method('PATCH')
                        <div style="margin-bottom: 30px;" class="row">
                           <div class="col-md-4">
                                <div class="radio">
                                    <input type="radio" name="option" id="education" value="1" {{ $resume->option == 1 ? 'checked' : '' }}> Education
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="radio">
                                    <input type="radio" name="option" id="academic-professional" value="2" {{ $resume->option == 2 ? 'checked' : '' }}> Academic & Professional
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="radio">
                                    <input type="radio" name="option" id="honors-awards" value="3" {{ $resume->option == 3 ? 'checked' : '' }}> Honours & Awards
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="title" placeholder="Title..." value="{{ $resume->title ? $resume->title : '' }}">
                        </div>

                        <div class="form-group">
                            <input type="text" class="form-control" name="university_org" placeholder="University or Awards Name..." value="{{ $resume->university_org ? $resume->university_org : '' }}">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="location" placeholder="Location..." value="{{ $resume->location ? $resume->location : '' }}">
                        </div>
                        <div class="form-group">
                            <input type="date" class="form-control" name="start" placeholder="Started..." value="{{ $resume->start ? $resume->start : '' }}">
                        </div>
                        <div class="form-group">
                            <input type="date" class="form-control" name="end" placeholder="Ended..." value="{{ $resume->end ? $resume->end : '' }}">
                        </div>
                        <div class="form-group">
                            <textarea name="desc" id="" cols="30" rows="10" class="form-control" placeholder="Details">{{ $resume->desc ? $resume->desc : '' }}</textarea>
                        </div>
                        <input type="submit" value="Update" class="btn btn-primary">
                    </form>
                </div>
            </div> <!-- panel -->
        </div> <!-- row -->
    </div>
    <div class="col-md-2"></div>
</div>

@stop

@push('js')



@endpush