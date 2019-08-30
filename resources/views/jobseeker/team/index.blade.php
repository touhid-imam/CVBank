@extends('layouts.backend.master')

@section('title', 'Team List')


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
                            <h1>All Team Member</h1>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="panel-body">
                            <h1 style="text-align: right">
                                <a href="{{ route('jobseeker.team.create') }}" class="btn btn-primary btn-md"><span class="lnr lnr-pencil left"></span>Create Team</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


            <div class="panel">
                <div class="panel-body">
                    @if($teams)
                        <div class="wrapper">
                            <table id="myTable" class="table table-striped table-bordered" style="width:100%">
                                <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Author</th>
                                    <th>Member Photo</th>
                                    <th>Member Name</th>
                                    <th>Member Position</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($teams as $key => $team)
                                    <tr>
                                        <td>{{ $key + 1 }}</td>
                                        <td>{{ $team->user->name }}</td>
                                        <td>
                                            <img width="60px" height="60px" src="{{ Storage::disk('public')->url('team/' . $team->image) }}" alt="{{ $team->image }}">
                                        </td>
                                        <td>
                                            {{ $team->name }}
                                        </td>
                                        <td>
                                            {{ $team->position }}
                                        </td>
                                        <td>{{ $team->created_at ? $team->created_at->diffForHumans() : ' ' }}</td>
                                        <td>{{ $team->updated_at ? $team->updated_at->diffForHumans() : ' ' }}</td>
                                        <td class="text-center" style="padding-left: 5px;">
                                            <ul class="tbl-action-btn">
                                                <li>
                                                    <a href="{{ route('jobseeker.team.edit', $team->id) }}" class="btn btn-info btn-xs text-center"><span class="lnr lnr-sync left tb-btn"></span></a>
                                                </li>

                                                <li>
                                                    <button class="btn btn-danger btn-xs" onclick="deleteTeam({{ $team->id }})"><span class="lnr lnr-trash left tb-btn"></span></button>

                                                    <form id="delete-form-{{ $team->id }}" action="{{ route('jobseeker.team.destroy', $team->id)}}" method="POST" style="display: none;">
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
                                    <th>Member Photo</th>
                                    <th>Member Name</th>
                                    <th>Member Position</th>
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

        function deleteTeam(id){
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