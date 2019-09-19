@extends('layouts.backend.master')

@section('title', 'Dashboard')


@push('css')
     <style>
        .ct-label.ct-horizontal.ct-end {
            position: relative;
            right: 12px;
        }
    </style>
@endpush



@section('content')


    <!-- OVERVIEW -->
    <div class="panel panel-headline">
        <div class="panel-body">
            <h1>Job Seeker Dashboard</h1>
        </div>
        <div class="panel-heading">
            <h2 class="panel-title">Users Information Chart</h2>
        </div>
        <div class="panel-body">

            <div class="row">
                <div class="col-md-12">
                    <div id="headline-chart" class="ct-chart"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- END OVERVIEW -->




@stop


@push('js')

    <script>
        $(function() {
            var data, options;

            // headline charts
            data = {
                labels: ['Posts', 'Hobby & Fact', 'Resume', 'Team', 'Work', 'Skill'],
                series: [
                    [{{ $userPosts }}, {{ $userHobbyFact }}, {{ $userResume }}, {{ $userTeam }}, {{ $userWork }}, {{ $userSkill }}],
                ]
            };

            options = {
                height: 500,
                showArea: true,
                showLine: false,
                showPoint: true,
                fullWidth: true,
                axisX: {
                    showGrid: true
                },
                lineSmooth: true,
            };

            new Chartist.Line('#headline-chart', data, options);


        });
    </script>

@endpush