@extends('layouts.backend.master')

@section('title', 'Hobby & Fact')

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
            <div class="panel panel-headline">
                <div class="row">
                    <div class="col-md-6">
                        <div class="panel-body">
                            <h1>All Users Information</h1>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="panel-body">
                            <h1 style="text-align: right">
                                <a href="{{ route('jobseeker.hobbies-facts.create') }}" class="btn btn-primary btn-md"><span class="lnr lnr-pencil left"></span>Create User</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="panel-body">
                    @if($hobbyFacts)
                        <div class="wrapper">
                            <table id="myTable" class="table table-striped table-bordered" style="width:100%">
                                <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Author</th>
                                    <th>Hobby Status</th>
                                    <th>Hobby Icon</th>
                                    <th>Fact Status</th>
                                    <th>Fact Icon</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($hobbyFacts as $key => $hobbyFact)
                                        <tr>
                                            <td>{{ $key + 1 }}</td>
                                            <td>{{ $hobbyFact->user->name }}</td>
                                            <td>
                                                <span class="label label-{{ $hobbyFact->hobby_status == 1 ? 'success' : 'danger'}}">{{ $hobbyFact->hobby_status == 1 ? 'Active' : 'Not Active'}}</span>
                                            </td>
                                            <td><i class="{{ $hobbyFact->hobby_icon}}"></i></td>
                                            <td>
                                                <span class="label label-{{ $hobbyFact->fact_status == 1 ? 'success' : 'danger'}}">{{ $hobbyFact->fact_status == 1 ? 'Active' : 'Not Active'}}</span>
                                            </td>
                                            <td><i class="{{ $hobbyFact->fact_icon}}"></i></td>
                                            <td>{{ $hobbyFact->created_at ? $hobbyFact->created_at->diffForHumans() : ' ' }}</td>
                                            <td>{{ $hobbyFact->updated_at ? $hobbyFact->updated_at->diffForHumans() : ' ' }}</td>
                                            <td class="text-center" style="padding-left: 5px;">
                                                <ul class="tbl-action-btn">
                                                    <li>
                                                        <a href="{{ route('jobseeker.hobbies-facts.edit', $hobbyFact->id) }}" class="btn btn-info btn-xs text-center"><span class="lnr lnr-sync left tb-btn"></span></a>
                                                    </li>

                                                        <li>
                                                            <button class="btn btn-danger btn-xs" onclick="deleteHobbyFact({{ $hobbyFact->id }})"><span class="lnr lnr-trash left tb-btn"></span></button>

                                                            <form id="delete-form-{{ $hobbyFact->id }}" action="{{ route('jobseeker.hobbies-facts.destroy', $hobbyFact->id)}}" method="POST" style="display: none;">
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
                                    <th>Hobby Status</th>
                                    <th>Hobby Icon</th>
                                    <th>Fact Status</th>
                                    <th>Fact Icon</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    @endif
                </div>
            </div>
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

        function deleteHobbyFact(id){
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
