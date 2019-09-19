@extends('layouts.backend.master')


@section('title', 'Messages')


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
                            <h1>All Messages <span style="font-size: 22px" class="badge"> {{ count($messages) }}</span></h1>

                        </div>
                    </div>
                </div>
            </div>

            <div class="panel">
                <div class="panel-body">
                    @if($messages)
                        <div class="wrapper">
                            <table id="myTable" class="table table-striped table-bordered" style="width:100%">
                                <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Client</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                    <th>Status</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($messages as $key => $message)
                                    <tr>
                                        <td>{{ $key + 1 }}</td>
                                        <td>
                                            {{ $message->name }}
                                        </td>
                                        <td>
                                            {{ $message->email }}
                                        </td>
                                        <td>
                                            {{ str_limit($message->message, 40) }}
                                        </td>
                                        <td>
                                            <span class="badge bg-{{ $message->status == 0 ? 'danger' : 'success' }}"><i class="fa fa-envelope{{ $message->status == 1 ? '-open' : '' }}" aria-hidden="true"></i>
</span></td>
                                        <td>{{ $message->created_at ? $message->created_at->diffForHumans() : ' ' }}</td>
                                        <td>{{ $message->updated_at ? $message->updated_at->diffForHumans() : ' ' }}</td>
                                        <td class="text-center" style="padding-left: 5px;">
                                            <ul class="tbl-action-btn">
                                                <li>
                                                    <a href="{{ route('admin.messageShow', $message->id) }}" class="btn btn-{{ $message->status == 0 ? 'danger' : 'info' }} btn-xs text-center">
                                                                                                     <span class="lnr lnr-envelope left tb-btn"></span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <button class="btn btn-danger btn-xs" onclick="deleteMessage({{ $message->id }})"><span class="lnr lnr-trash left tb-btn"></span></button>

                                                    <form id="delete-form-{{ $message->id }}" action="{{ route('admin.messageDelete', $message->id) }}" method="POST" style="display: none;">
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
                                    <th>Client</th>
                                    <th>Email</th>
                                    <th>Message</th>
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