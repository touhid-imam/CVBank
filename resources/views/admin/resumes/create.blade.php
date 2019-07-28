@extends('layouts.backend.master')

@section('title', 'Create Resume')


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
                        <h1>Add New Resume</h1>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="panel-body">
                        <h1 style="text-align: right">
                            <a href="{{ route('admin.resumes.index') }}" class="btn btn-success btn-md"><span class="lnr lnr-arrow-left"></span>Back</a>
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
        <div class="panel panel-headline">
            <div class="panel-body">
                <form method="POST" action="{{ route('admin.resumes.store') }}">
                    @csrf

                    <div style="margin-bottom: 30px;" class="row">
                       <div class="col-md-4">
                            <div class="radio">
                                <input type="radio" name="option" id="education" value="1"> Education
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="radio">
                                <input type="radio" name="option" id="academic-professional" value="2"> Academic & Professional
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="radio">
                                <input type="radio" name="option" id="honors-awards" value="3"> Honours & Awards
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="title" placeholder="Title...">
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control" name="university_org" placeholder="University or Awards Name...">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="location" placeholder="Location...">
                    </div>
                    <div class="form-group">
                        <input type="date" class="form-control" name="start" placeholder="Started...">
                    </div>
                    <div class="form-group">
                        <input type="date" class="form-control" name="end" placeholder="Ended...">
                    </div>
                    <div class="form-group">
                        <textarea name="desc" id="" cols="30" rows="10" class="form-control" placeholder="Details"></textarea>
                    </div>
                    <input type="submit" value="SUBMIT" class="btn btn-primary">
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-2"></div>
</div>

@stop

@push('js')



@endpush