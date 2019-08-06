@extends('layouts.backend.master')


@section('title', 'Categories')


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
                <div class="panel-body">
                    <h1>Categories Management</h1>
                </div>
            </div>
        </div>
        <div class="col-md-7">

            <div class="panel">
                <div class="panel-body">
                    @if($categories)
                        <div class="wrapper">
                            <table id="myTable" class="table table-striped table-bordered" style="width:100%">
                                <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Category Name</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($categories as $key => $category)
                                    <tr>
                                        <td>{{ $key + 1 }}</td>
                                        <td>{{ $category->name }}</td>

                                        <td>{{ $category->created_at ? $category->created_at->diffForHumans() : ' ' }}</td>
                                        <td>{{ $category->updated_at ? $category->updated_at->diffForHumans() : ' ' }}</td>
                                        <td class="text-center" style="padding-left: 5px;">
                                            <ul class="tbl-action-btn">
                                                <li>
                                                    <button class="btn btn-info btn-xs text-center" data-toggle="modal" data-target="#myModal-{{ $category->id }}">
                                                        <span class="lnr lnr-sync left tb-btn"></span>
                                                    </button>
                                                </li>

                                                <li>
                                                    <button class="btn btn-danger btn-xs" onclick="deleteCategory({{ $category->id }})"><span class="lnr lnr-trash left tb-btn"></span></button>

                                                    <form id="delete-form-{{ $category->id }}" action="{{ route('admin.category.destroy', $category->id)}}" method="POST" style="display: none;">
                                                        @csrf
                                                        @method('DELETE')
                                                    </form>
                                                </li>

                                            </ul>
                                        </td>
                                    </tr>

                                    <div class="modal fade" id="myModal-{{ $category->id }}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                    <h4 class="modal-title" id="myModalLabel">Update Category</h4>
                                                </div>
                                                <div class="modal-body">

                                                    <form method="POST" action="{{ route('admin.category.update', $category->id) }}">
                                                        @csrf
                                                        @method('PATCH')
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" name="name" placeholder="Update Category Name..." value="{{ $category->name }}">
                                                        </div>
                                                        <input type="submit" value="Update" class="btn btn-success">
                                                    </form>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                @endforeach
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>No.</th>
                                    <th>Category Name</th>
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
        </div> <!-- col-md-6 -->
        <div class="col-md-5">
            <div class="panel panel-heading">
                <h3 style="margin-left: 25px;">Create Category</h3>
                <div class="panel-body">
                    <form method="POST" action="{{ route ('admin.category.store') }}">
                        @csrf
                        <div class="form-group">
                            <input type="text" name="name" class="form-control" placeholder="Enter Category Name...">
                        </div>
                        <input type="submit" value="Create" class="btn btn-primary">


                    </form>
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

        function deleteCategory(id){
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