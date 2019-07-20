@extends('layouts.backend.master')

@section('title', 'Users Information')

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
                                <a href="{{ route('admin.hobbies-facts.create') }}" class="btn btn-primary btn-md"><span class="lnr lnr-pencil left"></span>Create User</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="panel-body">
                    {{--@if($users)--}}
                        <div class="wrapper">
                            <table id="myTable" class="table table-striped table-bordered" style="width:100%">
                                <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Author</th>
                                    <th>Hobby Icon</th>
                                    <th>Hobby Text</th>
                                    <th>Hobby Status</th>
                                    <th>Fact Icon</th>
                                    <th>Fact Heading</th>
                                    <th>Fact Status</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {{--@foreach($users as $user)--}}
                                    {{--@if(Auth::user()->id != $user->id)--}}
                                        {{--<tr>--}}
                                            {{--<td>{{ $user->name }}</td>--}}
                                            {{--<td>{{ $user->role->name }}</td>--}}
                                            {{--<td>{{ $user->email }}</td>--}}
                                            {{--<td>{{ $user->phone }}</td>--}}
                                            {{--<td>{{ $user->availability == 0 ? 'Unavailable' : 'Available' }}</td>--}}
                                            {{--<td>{{ $user->created_at ? $user->created_at->diffForHumans() : ' ' }}</td>--}}
                                            {{--<td>{{ $user->updated_at ? $user->updated_at->diffForHumans() : ' ' }}</td>--}}
                                            {{--<td class="text-center" style="padding-left: 5px;">--}}
                                                {{--<ul class="tbl-action-btn">--}}
                                                    {{--<li>--}}
                                                        {{--<a href="{{ route('admin.users.show', $user->id) }}" class="btn btn-primary btn-xs text-center">--}}
                                                            {{--<span class="lnr lnr-eye tb-btn"></span>--}}

                                                        {{--</a>--}}
                                                    {{--</li>--}}
                                                    {{--<li>--}}
                                                        {{--<a href="{{ route('admin.users.edit', $user->id) }}" class="btn btn-info btn-xs text-center"><span class="lnr lnr-sync left tb-btn"></span></a>--}}
                                                    {{--</li>--}}
                                                    {{--@if(!($user->role->id == 1))--}}
                                                        {{--<li>--}}
                                                            {{--<button class="btn btn-danger btn-xs" onclick="deleteUser({{ $user->id }})"><span class="lnr lnr-trash left tb-btn"></span></button>--}}

                                                            {{--<form id="delete-form-{{ $user->id }}" action="{{ route('admin.users.destroy', $user->id)}}" method="POST" style="display: none;">--}}
                                                                {{--@csrf--}}
                                                                {{--@method('DELETE')--}}
                                                            {{--</form>--}}
                                                        {{--</li>--}}
                                                    {{--@else--}}
                                                        {{--<button id="admin-delete" class="btn btn-danger btn-xs" disabled>--}}
                                                            {{--<span class="lnr lnr-trash left tb-btn"></span>--}}
                                                        {{--</button>--}}
                                                    {{--@endif--}}
                                                {{--</ul>--}}
                                            {{--</td>--}}
                                        {{--</tr>--}}
                                    {{--@endif--}}
                                {{--@endforeach--}}
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>No.</th>
                                    <th>Author</th>
                                    <th>Hobby Icon</th>
                                    <th>Hobby Text</th>
                                    <th>Hobby Status</th>
                                    <th>Fact Icon</th>
                                    <th>Fact Heading</th>
                                    <th>Fact Status</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    {{--@endif--}}
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

        $("#admin-delete").tooltip({ 'trigger' : 'hover', 'title' : 'can not delete admin!!'  });

        function deleteUser(id){
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
