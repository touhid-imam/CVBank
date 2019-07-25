@extends('layouts.backend.master')

@section('title', 'Resume')


@push('css')

    <style>
        .checkbox {
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
                            <a href="{{ route('admin.resume.index') }}" class="btn btn-success btn-md"><span class="lnr lnr-arrow-left"></span>Back</a>
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
                <form method="POST" action="{{ route('admin.resume.store') }}">
                    @csrf
                    <div style="margin-bottom: 30px;" class="row">
                       <div class="col-md-4">
                            <div class="checkbox">
                                <input type="checkbox" name="education" id="education"> Education
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="checkbox">
                                <input type="checkbox" name="academic-professional" id="academic-professional"> Academic & Professional
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="checkbox">
                                <input type="checkbox" name="honors-awards" id="honors-awards"> Honours & Awards
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="title" placeholder="Title...">
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control" name="university-organization" placeholder="University or Awards Name...">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="location" placeholder="Location...">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="starting-date" placeholder="Started...">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="ending-date" placeholder="Ended...">
                    </div>
                    <div class="form-group">
                        <textarea name="description" id="" cols="30" rows="10" class="form-control" placeholder="Details"></textarea>
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