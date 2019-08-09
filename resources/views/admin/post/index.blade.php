@extends('layouts.backend.master')


@section('title', 'Publication')


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
            <div class="row">
                <div class="panel panel-heading-">
                    <div class="panel-body">
                        <div class="col-md-6">
                            <h1>All Posts <span style="font-size: 22px" class="badge"> {{ $posts->count() }}</span></h1>

                        </div>
                        <div class="col-md-6">
                            <h1 style="text-align: right">
                            <a href="{{ route('admin.post.create') }}" class="btn btn-primary btn-md"><span class="lnr lnr-pencil left"></span>Create Post</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="panel">
                <div class="panel-body">
                    @if($posts)
                        <div class="wrapper">
                            <table id="myTable" class="table table-striped table-bordered" style="width:100%">
                                <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Is Approved</th>
                                    <th>Status</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($posts as $key => $post)
                                    <tr>
                                        <td>{{ $key + 1 }}</td>
                                        <td>{{ str_limit($post->title, '25') }}</td>
                                        <td>{{ $post->user->name }}</td>
                                        <td>
                                            <span class="label label-{{ $post->is_approved == true ? 'success' : 'default' }}">{{ $post->is_approved == true ? 'Approved' : 'Pending' }}</span>
                                        </td>
                                        <td>
                                            <span class="label label-{{ $post->status == true ? 'success' : 'default' }}">{{ $post->status == true ? 'Published' : 'Pending' }}</span>
                                        </td>

                                        <td>{{ $post->created_at ? $post->created_at->diffForHumans() : ' ' }}</td>
                                        <td>{{ $post->updated_at ? $post->updated_at->diffForHumans() : ' ' }}</td>
                                        <td class="text-center" style="padding-left: 5px;">
                                            <ul class="tbl-action-btn">
                                                <li>
                                                    <a href="{{ route ('admin.post.edit', $post->id) }}" class="btn btn-info btn-xs text-center">
                                                        <span class="lnr lnr-sync left tb-btn"></span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <button class="btn btn-danger btn-xs" onclick="deletePost({{ $post->id }})"><span class="lnr lnr-trash left tb-btn"></span></button>

                                                    <form id="delete-form-{{ $post->id }}" action="{{ route('admin.post.destroy', $post->id)}}" method="POST" style="display: none;">
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
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Is Approved</th>
                                    <th>Status</th>
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

        function deletePost(id){
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