@extends('layouts.backend.master')


@section('title', 'Full Message')


@push('css')



@endpush


@section('content')

    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="panel panel-heading-">
                    <div class="panel-body">
                        <div class="col-md-6">
                            <h1>Full Message</h1>
                        </div>
                    </div>
                </div>

                <div class="panel">
                    <div class="panel-body">
                        <div class="jumbotron">
                            <h1 class="display-4">{{ $message->name }}</h1>
                            <p class="lead">From: <a href="mailto:{{ $message->email }}">{{ $message->email }}</a></p>
                            <hr class="my-4">
                            <p>{{ $message->message }}</p>
                            <a style="margin-top: 20px;" class="btn btn-info btn-lg" href="mailto:{{ $message->email }}" role="button">Reply Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop



@push('js')


@endpush