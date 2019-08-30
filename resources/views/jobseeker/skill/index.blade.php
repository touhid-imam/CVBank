@extends('layouts.backend.master')


@section('title', 'All Skill')


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
                            <h1>All Skill <span style="font-size: 22px" class="badge"> {{ $skills->count() }}</span></h1>

                        </div>
                        <div class="col-md-6">
                            <h1 style="text-align: right">
                                <a href="{{ route('jobseeker.skill.create') }}" class="btn btn-primary btn-md"><span class="lnr lnr-pencil left"></span>Create Skill</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="panel">
                <div class="panel-body">
                    @if($skills)
                        <div class="wrapper">
                            <table id="myTable" class="table table-striped table-bordered" style="width:100%">
                                <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Author</th>
                                    <th>Skill Level</th>
                                    <th>Experience</th>
                                    <th>Short Decs</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($skills as $key => $skill)

                                    <tr>
                                        <td>{{ $key + 1 }}</td>
                                        <td>{{ $skill->user->name }}</td>
                                        <td>{{ $skill->skill_level }}</td>
                                        <td>{{ $skill->experience }}</td>
                                        <td>{{ str_limit($skill->short_decs, '30') }}</td>

                                        <td>{{ $skill->created_at ? $skill->created_at->diffForHumans() : ' ' }}</td>
                                        <td>{{ $skill->updated_at ? $skill->updated_at->diffForHumans() : ' ' }}</td>
                                        <td class="text-center" style="padding-left: 5px;">
                                            <ul class="tbl-action-btn">
                                                <li>
                                                    <a href="{{ route ('jobseeker.skill.edit', $skill->id) }}" class="btn btn-info btn-xs text-center">
                                                        <span class="lnr lnr-sync left tb-btn"></span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <button class="btn btn-danger btn-xs" onclick="deleteSkill({{ $skill->id }})"><span class="lnr lnr-trash left tb-btn"></span></button>

                                                    <form id="delete-form-{{ $skill->id }}" action="{{ route('jobseeker.skill.destroy', $skill->id)}}" method="POST" style="display: none;">
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
                                    <th>Skill Level</th>
                                    <th>Experience</th>
                                    <th>Short Decs</th>
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

        function deleteSkill(id){
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