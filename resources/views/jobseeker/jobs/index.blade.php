@extends('layouts.backend.master')


@section('title', 'Favourite Jobs')


@push('css')

    <link rel="stylesheet" href="//cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/sweetalert2@8.13.6/dist/sweetalert2.min.css">

    <style>
        tbody tr td, thead tr th{
            text-align: center;
        }
    </style>

@endpush


@section('content')

    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="panel panel-heading-">
                    <div class="panel-body">
                        <div class="col-md-6">
                            <h1>All Messages <span style="font-size: 22px" class="badge"> {{ $fav_posts->count() }}</span></h1>

                        </div>
                    </div>
                </div>
            </div>

            <div class="panel">
                <div class="panel-body">
                    @if($fav_posts)
                        <div class="wrapper">
                            <table id="myTable" class="table table-striped table-bordered" style="width:100%">
                                <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Job Title</th>
                                    <th>Company</th>
                                    <th>Location</th>
                                    <th>Job Type</th>
                                    <th>Job Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($fav_posts as $key => $fav_post)
                                    <tr>
                                        <td>{{ $key + 1 }}</td>
                                        <td>
                                            {{ $fav_post->title }}
                                        </td>
                                        <td>
                                            {{ $fav_post->company }}
                                        </td>
                                        <td>
                                            {{ $fav_post->location }}
                                        </td>
                                        <td>
                                            {{ $fav_post->job_type->name }}
                                        </td>
                                        <td>
                                            <span class="badge bg-{{ $fav_post->status == 1 ? 'success' : 'danger' }}">{{ $fav_post->status == 1 ? 'Open' : 'Closed' }}</span>
                                        </td>
                                        <td>
                                            <ul class="tbl-action-btn">
                                                <li>
                                                    <a href="#" class="btn btn-info btn-xs text-center">
                                                        <span class="lnr lnr-eye left tb-btn"></span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <button class="btn btn-danger btn-xs" onclick="deleteMessage({{ $fav_post->id }})"><span class="lnr lnr-trash left tb-btn"></span></button>

                                                    <form id="delete-form-{{ $fav_post->id }}" action="{{ route('jobseeker.job.update', $fav_post->id) }}" method="POST" style="display: none;">
                                                        @csrf
                                                        @method('patch')
                                                        <input type="hidden" name="fav_update" value="{{ $fav_post->id }}">
                                                    </form>

                                            </ul>
                                        </td>

                                            </ul>
                                        </td>
                                    </tr>


                                @endforeach
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>No.</th>
                                    <th>Job Title</th>
                                    <th>Company</th>
                                    <th>Location</th>
                                    <th>Job Type</th>
                                    <th>Job Status</th>
                                    <th>Action</th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    @endif
                </div>
            </div> <!-- panel -->
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



        function deleteMessage(id){
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