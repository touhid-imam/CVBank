@extends('layouts.backend.master')

@section('title', 'Create Team')

@push('css')



@endpush


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-headline">
                <div class="row">
                    <div class="col-md-6">
                        <div class="panel-body">
                            <h2>Create Team Member</h2>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="panel-body">
                            <h1 style="text-align: right">
                                <a href="{{ route('jobseeker.team.index') }}" class="btn btn-success btn-md"><span class="lnr lnr-arrow-left"></span>Back</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="panel panel-headline">
                <div class="panel-heading">
                    <h2 class="panel-title"></h2>
                </div>

                <div class="panel-body">
                    <form method="POST" action="{{ route('jobseeker.team.update', $team->id) }}" enctype="multipart/form-data">
                        @csrf
                        @method('PATCH')
                        <div class="form-group">
                            <input type="text" name="name" class="form-control" placeholder="Member Name..." value="{{ $team->name }}">
                        </div>
                        <div class="form-group">
                            <input type="text" name="position" class="form-control" placeholder="Member Position..." value="{{ $team->position }}">
                        </div>
                        <div class="input-group form-group">
                            <span class="input-group-addon" id="facebook-url">URL</span>
                            <input type="url" name="facebook" class="form-control" placeholder="Facebook" aria-describedby="facebook-url" value="{{ $team->facebook }}">
                        </div>

                        <div class="input-group form-group">
                            <span class="input-group-addon" id="linkedin-url">URL</span>
                            <input type="url" name="linkedin" class="form-control" placeholder="Linkedin" aria-describedby="linkedin-url" value="{{ $team->linkedin }}">
                        </div>

                        <div class="input-group form-group">
                            <span class="input-group-addon" id="stactoverflow-url">URL</span>
                            <input type="url" name="stactoverflow" class="form-control" placeholder="StackOverFlow" aria-describedby="stactoverflow-url" value="{{ $team->stackoverflow }}">
                        </div>

                        <div class="input-group form-group">
                            <span class="input-group-addon" id="dribble-url">URL</span>
                            <input type="url" name="dribble" class="form-control" placeholder="Dribble" aria-describedby="dribble-url" value="{{ $team->dribble }}">
                        </div>

                        <div class="input-group form-group">
                            <span class="input-group-addon" id="github-url">URL</span>
                            <input type="url" name="github" class="form-control" placeholder="Github" aria-describedby="github-url" value="{{ $team->github }}">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="desc" id="" cols="30" rows="10" placeholder="Write an Short Desc.">{{ $team->desc }}</textarea>
                            <p>Write Short Description within 30 Words</p>
                        </div>
                        <div class="form-group">
                            <input type="file" name="image">
                        </div>

                        <input type="submit" value="SUBMIT" class="btn btn-primary">
                    </form>
                </div>
            </div>
        </div> {{-- col-md-8--}}
        <div class="col-md-4">
            <div class="panel">
                <div class="panel-body text-center">
                    <h3>Team Member Photo</h3>
                    <img class="img-thumbnail" src="{{ Storage::disk('public')->url('team/' . $team->image) }}" alt="{{ $team->image }}">
                </div>
            </div>
        </div>
    </div>
@stop

@push('js')


@endpush
