@extends('layouts.backend.master')


@section('title', 'Admin Review')


@push('css')
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/sweetalert2@8.13.6/dist/sweetalert2.min.css">

    <style>
        .badge-success{
            background: #7DC438;
        }
        .badge-danger{
            background: #CA0828;
        }
    </style>

@endpush


@section('content')

    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-heading">
                <div class="panel-body">
                    <h1>Job Approval - <span style="font-size: 22px" class="badge badge-{{ $jobPost->is_approved == true ? "success" : "danger" }}"> {{ $jobPost->is_approved == true ? "Approved" : "Waiting for admin approval" }}</span></h1>
                </div>
            </div>

            <div class="row">
                <div class="col-md-8">
                    <div class="panel">
                        <div class="panel-body">
                            <div class="content-wrapper">
                                <div class="form-group">
                                    <h5 style="font-weight: bold">Job Title:</h5>
                                    {{ $jobPost->title }}
                                </div>

                                <div class="form-group">
                                    <h5 style="font-weight: bold">Author:</h5>
                                <p>{{ $jobPost->user->name }}</p>
                                </div>

                                <div class="form-group">
                                    <h5 style="font-weight: bold">Company Name:</h5>
                                    <p>{{ $jobPost->company }}</p>
                                </div>

                                <div class="form-group">
                                    <h5 style="font-weight: bold">Location:</h5>
                                    {{ $jobPost->location }}
                                </div>

                                <div class="form-group">
                                    <h5 style="font-weight: bold">Description:</h5>
                                    <p>{{ $jobPost->desc }}</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="panel panel-body">
                        <h3>Featured Image</h3>
                        <img class="img-responsive" src="{{Storage::disk('public')->url('jobs/' . $jobPost->image)}}" alt="">
                    </div>
                </div>
            </div>

        </div>
    </div>

@endsection


@push('js')
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@8.13.6/dist/sweetalert2.all.min.js"></script>
    <script>
        function approveJob(id){
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to approve this job!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Approve it!'
            }).then((result) => {
                if (result.value) {
                document.getElementById('approve-form-' + id).submit();

            }
        })

        }

        function rejectJob(id){
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to reject this job!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Reject it!'
            }).then((result) => {
                if (result.value) {
                document.getElementById('reject-form-' + id).submit();

            }
        })

        }
    </script>

@endpush