@extends('layouts.backend.master')

@section('title', 'Dashboard')


@push('css')


@endpush



@section('content')

            <div class="panel panel-headline">
                <div class="panel-body">
                    <h1>Admin Dashboard</h1>
                </div>
                <div class="panel-heading">
                    <h2 class="panel-title">Weekly Overview</h2>
                    <p class="panel-subtitle">Period: Oct 14, 2016 - Oct 21, 2016</p>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="metric">
                                <span class="icon"><i class="fa fa-download"></i></span>
                                <p>
                                    <span class="number">1,252</span>
                                    <span class="title">Downloads</span>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="metric">
                                <span class="icon"><i class="fa fa-shopping-bag"></i></span>
                                <p>
                                    <span class="number">203</span>
                                    <span class="title">Sales</span>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="metric">
                                <span class="icon"><i class="fa fa-eye"></i></span>
                                <p>
                                    <span class="number">274,678</span>
                                    <span class="title">Visits</span>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="metric">
                                <span class="icon"><i class="fa fa-bar-chart"></i></span>
                                <p>
                                    <span class="number">35%</span>
                                    <span class="title">Conversions</span>
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

            <div class="row">
                <div class="col-md-6">
                    <!-- TASKS -->
                    <div class="panel">
                        <div class="panel-heading">
                            <h3 class="panel-title">My Tasks</h3>
                            <div class="right">
                                <button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
                                <button type="button" class="btn-remove"><i class="lnr lnr-cross"></i></button>
                            </div>
                        </div>
                        <div class="panel-body">
                            <ul class="list-unstyled task-list">
                                <li>
                                    <p>Updating Users Settings <span class="label-percent">23%</span></p>
                                    <div class="progress progress-xs">
                                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100" style="width:23%">
                                            <span class="sr-only">23% Complete</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p>Load &amp; Stress Test <span class="label-percent">80%</span></p>
                                    <div class="progress progress-xs">
                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                                            <span class="sr-only">80% Complete</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p>Data Duplication Check <span class="label-percent">100%</span></p>
                                    <div class="progress progress-xs">
                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                                            <span class="sr-only">Success</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p>Server Check <span class="label-percent">45%</span></p>
                                    <div class="progress progress-xs">
                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
                                            <span class="sr-only">45% Complete</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p>Mobile App Development <span class="label-percent">10%</span></p>
                                    <div class="progress progress-xs">
                                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%">
                                            <span class="sr-only">10% Complete</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- END TASKS -->
                </div>
                <div class="col-md-6">
                    <!-- VISIT CHART -->
                    <div class="panel">
                        <div class="panel-heading">
                            <h3 class="panel-title">Website Visits</h3>
                            <div class="right">
                                <button type="button" class="btn-toggle-collapse"><i class="lnr lnr-chevron-up"></i></button>
                                <button type="button" class="btn-remove"><i class="lnr lnr-cross"></i></button>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div id="visits-chart" class="ct-chart"></div>
                        </div>
                    </div>
                    <!-- END VISIT CHART -->
                </div>

            </div>
    <!-- END MAIN CONTENT -->

@stop


@push('js')

<script>
    $(function() {
        var data, options;

        // headline charts
        data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            series: [
                [23, 29, 24, 40, 25, 24, 35],
                [14, 25, 18, 34, 29, 38, 44],
            ]
        };

        options = {
            height: 300,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
                showGrid: false
            },
            lineSmooth: false,
        };

        new Chartist.Line('#headline-chart', data, options);



        // visits chart
        data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            series: [
                [6384, 6342, 5437, 2764, 3958, 5068, 7654]
            ]
        };

        options = {
            height: 300,
            axisX: {
                showGrid: false
            },
        };

        new Chartist.Bar('#visits-chart', data, options);

    });
</script>

@endpush