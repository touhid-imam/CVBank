@extends('layouts.backend.master')


@section('title', 'Job Posts')


@push('css')

    <link rel="stylesheet" href="//cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/sweetalert2@8.13.6/dist/sweetalert2.min.css">

    <style>
        tbody tr td{
            text-align: center;
        }
        tbody tr td a{
            padding:5px 5px!important;
        }
    </style>

@endpush


@section('content')

    <div class="row">
        <div class="col-md-12">
            @if($jobs->count() > 0)
                <div class="row">
                    <div class="panel panel-heading">
                        <div class="panel-body">
                            <div class="col-md-6">
                                <h1>All Job Posts <span style="font-size: 22px" class="badge"> {{ $jobs->count() }}</span></h1>

                            </div>
                            <div class="col-md-6">
                                <h1 style="text-align: right">
                                    <a href="{{ route('admin.jobs.create') }}" class="btn btn-primary btn-md"><span class="lnr lnr-pencil left"></span>Post Job</a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel">
                    <div class="panel-body">
                        <div class="wrapper">
                            <table id="myTable" class="table table-striped table-bordered" style="width:100%">
                                <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Author</th>
                                    <th>Title</th>
                                    <th>Company</th>
                                    <th>Location</th>
                                    <th>Approval</th>
                                    <th>Status</th>
                                    <th>Create At</th>
                                    <th>Update At</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($jobs as $key => $job)
                                    <tr>
                                        <td>{{ $key + 1 }}</td>
                                        <td>{{ $job->user->name }}</td>
                                        <td>{{ str_limit($job->title, '25') }}</td>
                                        <td>{{ str_limit($job->company, 30) }}</td>
                                        <td>{{ $job->location }}</td>
                                        <td>
                                            <span class="label label-{{ $job->is_approved == true ? 'success' : 'default' }}">{{ $job->is_approved == true ? 'Approved' : 'Pending' }}</span>
                                        </td>
                                        <td>
                                            <span class="label label-{{ $job->status == true ? 'success' : 'default' }}">{{ $job->status == true ? 'Published' : 'Pending' }}</span>
                                        </td>

                                        <td>{{ $job->created_at ? $job->created_at->diffForHumans() : ' ' }}</td>
                                        <td>{{ $job->updated_at ? $job->updated_at->diffForHumans() : ' ' }}</td>
                                        <td class="text-center" style="padding-left: 5px;">
                                            <ul class="tbl-action-btn">
                                                <li>
                                                    <a href="{{ route ('admin.jobs.show', $job->id) }}" class="btn btn-success btn-xs text-center">
                                                        <span class="lnr lnr-eye left tb-btn"></span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="{{ route ('admin.jobs.edit', $job->id) }}" class="btn btn-info btn-xs text-center">
                                                        <span class="lnr lnr-sync left tb-btn"></span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a class="btn btn-danger btn-xs" onclick="deleteJob({{ $job->id }})"><span class="lnr lnr-trash left tb-btn"></span></a>

                                                    <form id="delete-form-{{ $job->id }}" action="{{ route('admin.jobs.destroy', $job->id)}}" method="POST" style="display: none;">
                                                        @csrf
                                                        @method('DELETE')
                                                    </form>
                                                </li>

                                            </ul>
                                        </td>
                                    </tr>

                                @endforeach
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>No.</th>
                                    <th>Author</th>
                                    <th>Title</th>
                                    <th>Company</th>
                                    <th>Location</th>
                                    <th>Approval</th>
                                    <th>Status</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>

                    </div>
                </div> <!-- panel -->
            @endif



            @if($adminJobs->count() > 0)
                <div class="row">
                    <div class="panel panel-heading-">
                        <div class="panel-body">
                            <div class="col-md-6">
                                <h1>My Job Board <span style="font-size: 22px" class="badge"> {{ $adminJobs->count() }}</span></h1>

                            </div>
                            <div class="col-md-6">
                                <h1 style="text-align: right">
                                    <a href="{{ route('admin.jobs.create') }}" class="btn btn-primary btn-md"><span class="lnr lnr-pencil left"></span>Post Job</a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel">
                    <div class="panel-body">
                        <div class="wrapper">
                                <table id="myTable" class="table table-striped table-bordered" style="width:100%">
                                    <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Author</th>
                                        <th>Title</th>
                                        <th>Company</th>
                                        <th>Location</th>
                                        <th>Approval</th>
                                        <th>Status</th>
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($adminJobs as $key => $adminJob)
                                        <tr>
                                            <td>{{ $key + 1 }}</td>
                                            <td>{{ $adminJob->user->name }}</td>
                                            <td>{{ str_limit($adminJob->title, '25') }}</td>
                                            <td>{{ str_limit($adminJob->company, 30) }}</td>
                                            <td>{{ $adminJob->location }}</td>
                                            <td>
                                                <span class="label label-{{ $adminJob->is_approved == true ? 'success' : 'default' }}">{{ $adminJob->is_approved == true ? 'Approved' : 'Pending' }}</span>
                                            </td>
                                            <td>
                                                <span class="label label-{{ $adminJob->status == true ? 'success' : 'default' }}">{{ $adminJob->status == true ? 'Published' : 'Pending' }}</span>
                                            </td>

                                            <td>{{ $adminJob->created_at ? $adminJob->created_at->diffForHumans() : ' ' }}</td>
                                            <td>{{ $adminJob->updated_at ? $adminJob->updated_at->diffForHumans() : ' ' }}</td>
                                            <td class="text-center" style="padding-left: 5px;">
                                                <ul class="tbl-action-btn">
                                                    <li>
                                                        <a href="{{ route ('admin.jobs.edit', $adminJob->id) }}" class="btn btn-info btn-xs text-center">
                                                            <span class="lnr lnr-sync left tb-btn"></span>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a class="btn btn-danger btn-xs" onclick="deleteJob({{ $adminJob->id }})"><span class="lnr lnr-trash left tb-btn"></span></a>

                                                        <form id="delete-form-{{ $adminJob->id }}" action="{{ route('admin.jobs.destroy', $adminJob->id)}}" method="POST" style="display: none;">
                                                            @csrf
                                                            @method('DELETE')
                                                        </form>
                                                    </li>

                                                </ul>
                                            </td>
                                        </tr>

                                    @endforeach
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <th>No.</th>
                                        <th>Author</th>
                                        <th>Title</th>
                                        <th>Company</th>
                                        <th>Location</th>
                                        <th>Approval</th>
                                        <th>Status</th>
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                        <th>Action</th>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>

                    </div>
                </div> <!-- panel -->
            @endif
        </div> <!-- col-md-12 -->
    </div>


@stop



@push('js')
    <script src="//cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@8.13.6/dist/sweetalert2.all.min.js"></script>


    <script>
        $(document).ready( function () {
            $('#myTable').DataTable();
        } );

        function deleteJob(id){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                document.getElementById('delete-form-' + id).submit();

            }
        })

        }
    </script>

@endpush