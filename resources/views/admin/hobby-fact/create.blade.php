@extends('layouts.backend.master')

@section('title', 'Create Hobby & Fact')

@push('css')

    <style>
        .checkbox {
            position: relative;
            left: 26px;
        }
    </style>

@endpush


@section('content')
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <div class="panel panel-headline">
                <div class="row">
                    <div class="col-md-6">
                        <div class="panel-body">
                            <h1>New Hobby & Fact</h1>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="panel-body">
                            <h1 style="text-align: right">
                                <a href="{{ route('admin.hobbies-facts.index') }}" class="btn btn-success btn-md"><span class="lnr lnr-arrow-left"></span>Back</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel panel-headline">
                <div class="panel-heading">
                    <h2 class="panel-title"></h2>
                </div>

                <div class="panel-body">
                    <form method="POST" action="{{ route('admin.hobbies-facts.store') }}">
                        @csrf

                        <div class="checkbox">
                            <input type="checkbox" name="hobby_status" id="hobby_status" checked="checked"> Add Hobby
                        </div>

                        <div class="hobby-wrapper">
                            <h3 class="text-center">Hobby Section</h3>
                            <div class="form-group">
                                <select class="form-control" name="hobby_icon" id="hobby_icon">
                                @if($icon_options)
                                    @foreach($icon_options as $key => $icon_option)
                                    <option value="{{ $key }}">{{ $icon_option }}</option>
                                    @endforeach
                                @endif
                                </select>
                            </div>

                            <div class="form-group">
                                <input type="text" name="hobby_text" class="form-control" placeholder="Hobby Text...">
                            </div>
                        </div> <!-- hobby-wrapper -->

                        <div style="padding-top: 15px;" class="checkbox">
                            <input type="checkbox" name="fact_status" id="fact_status" checked="checked"> Add Fact
                        </div>
                        <div class="fact-wrapper">
                            <h3 class="text-center">Fact Section</h3>
                            <div class="form-group">
                                <select class="form-control" name="hobby_icon" id="hobby_icon">
                                    @if($icon_options)
                                        @foreach($icon_options as $key => $icon_option)
                                            <option value="{{ $key }}">{{ $icon_option }}</option>
                                        @endforeach
                                    @endif
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="text" name="fact_heading" class="form-control" placeholder="Fact Heading...">
                            </div>
                            <div class="form-group">
                                <input type="text" name="fact_tagline" class="form-control" placeholder="Fact Tagline...">
                            </div>
                        </div> <!-- fact-wrapper -->
                        <input type="submit" value="SUBMIT" class="btn btn-primary">
                    </form>
                </div>
            </div>
        </div> {{-- col-md-8--}}
        <div class="col-md-2"></div>
    </div>
@stop

@push('js')

    <script>

//        const hobby_btn = $('#hobby_status');
//        const hobby_wrap = $('.hobby-wrapper');
//        $(hobby_btn).on('click', function(){
//
//            if(($(this).attr('checked', 'checked')) === true){
//                hobby_wrap.css({'display' : 'none'});
//            }
//
//
//
//        });

        $(document).ready(function(){
            const hobby_status = $('#hobby_status');
            const fact_status = $('#fact_status');

            hobby_status.on('click',function(){
                if(this.checked){
                    $('.hobby-wrapper').show();
                }
                else{
                    $('.hobby-wrapper').hide();
                }

            });

            fact_status.on('click',function(){
                if(this.checked){
                    $('.fact-wrapper').show();
                }
                else{
                    $('.fact-wrapper').hide();
                }

            });
        });



    </script>

@endpush
