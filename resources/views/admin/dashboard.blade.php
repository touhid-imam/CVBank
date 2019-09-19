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

            <div class="panel panel-headline">
                <div class="panel-body">
                    <h1>Admin Dashboard</h1>
                </div>
                <div class="panel-heading">
                    <h2 class="panel-title">System Information</h2>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="metric">
                                <span class="icon"><i class="fa fa-users"></i></span>
                                <p>
                                    <span class="number">{{ $users->count() }}</span>
                                    <span class="title">Active User</span>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="metric">
                                <span class="icon"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                                <span class="sr-only">Loading...</span></span>
                                <p>
                                    <span class="number">{{ $posts->count() }}</span>
                                    <span class="title">All Publication</span>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="metric">
                                <span class="icon"><i class="fa fa-pie-chart"></i></span>
                                <p>
                                    <span class="number">{{ $categories->count() }}</span>
                                    <span class="title">All Category</span>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="metric">
                                <span class="icon"><i class="fa fa-bar-chart"></i></span>
                                <p>
                                    <span class="number">{{ $tags->count() }}</span>
                                    <span class="title">All Tags</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div id="headline-chart" class="ct-chart"></div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- END OVERVIEW -->

    <!-- END MAIN CONTENT -->

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
            height: 400,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
                showGrid: true
            },
            lineSmooth: false,
        };

        new Chartist.Line('#headline-chart', data, options);


    });
</script>

@endpush