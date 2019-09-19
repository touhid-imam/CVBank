@extends('layouts.backend.master')

@section('title', 'Resume List')


@push('css')

    <link rel="stylesheet" href="//cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/sweetalert2@8.13.6/dist/sweetalert2.min.css">

    <style>
        tbody tr td{
            text-align: center;
        }
    </style>

@endpush


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-heading">
                <div class="row">
                    <div class="col-md-6">
                        <div class="panel-body">
                            <h1>All Resumes - <span style="font-size: 22px" class="badge">{{ $resumes->count() }}</h1>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="panel-body">
                            <h1 style="text-align: right">
                                <a href="{{ route('admin.resumes.create') }}" class="btn btn-primary btn-md"><span class="lnr lnr-pencil left"></span>Create Resume</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


            <div class="panel">
                <div class="panel-body">
                    @if($resumes)
                    <div class="wrapper">
                        <table id="myTable" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                            <tr>
                                <th>No.</th>
                                <th>Author</th>
                                <th>Resume Category</th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($resumes as $key => $resume)
                                <tr>
                                    <td>{{ $key + 1 }}</td>
                                    <td>{{ $resume->user->name }}</td>
                                    <td>
                                        @if($resume->option == 1)
                                            {{ "Education" }}
                                        @elseif($resume->option == 2)
                                            {{ "Academic & Professional" }}
                                        @else
                                            {{ "Honors & Awards" }}
                                        @endif
                                    </td>
                                    <td>{{ $resume->title }}</td>
                                    <td>
                                        {{ $resume->location }}
                                    </td>
                                    <td>{{ $resume->created_at ? $resume->created_at->diffForHumans() : ' ' }}</td>
                                    <td>{{ $resume->updated_at ? $resume->updated_at->diffForHumans() : ' ' }}</td>
                                    <td class="text-center" style="padding-left: 5px;">
                                        <ul class="tbl-action-btn">
                                            <li>
                                                <a href="{{ route('admin.resumes.edit', $resume->id) }}" class="btn btn-info btn-xs text-center"><span class="lnr lnr-sync left tb-btn"></span></a>
                                            </li>

                                            <li>
                                                <button class="btn btn-danger btn-xs" onclick="deleteResume({{ $resume->id }})"><span class="lnr lnr-trash left tb-btn"></span></button>

                                                <form id="delete-form-{{ $resume->id }}" action="{{ route('admin.resumes.destroy', $resume->id)}}" method="POST" style="display: none;">
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
                                <th>Resume Category</th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                                <th>Action</th>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                    @endif
                </div>
            </div> <!-- panel -->
        </div>
    </div>

@stop

@push('js')

    <script src="//cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@8.13.6/dist/sweetalert2.all.min.js"></script>


    <script>
        $(document).ready( function () {
            $('#myTable').DataTable();
        } );

        function deleteResume(id){
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