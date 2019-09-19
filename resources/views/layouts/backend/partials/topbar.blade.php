<nav class="navbar navbar-default navbar-fixed-top">
    <div class="brand">

        @if(Auth::user()->role_id == 1)
            <a href="{{route('admin.dashboard') }}">
        @elseif(Auth::user()->role_id == 2)
            <a href="{{route('manager.dashboard') }}">
        @else
            <a href="{{route('jobseeker.dashboard') }}">
        @endif
        <img src="{{ asset ('public/backend/assets/img/logo-dark.png') }}" alt="Klorofil Logo" class="img-responsive logo"></a>
    </div>
    <div class="container-fluid">
        <div class="navbar-btn">
            <button type="button" class="btn-toggle-fullwidth"><i class="lnr lnr-arrow-left-circle"></i></button>
        </div>
        <form class="navbar-form navbar-left">
            <div class="input-group">
                <input type="text" value="" class="form-control" placeholder="Search dashboard...">
                <span class="input-group-btn"><button type="button" class="btn btn-primary">Go</button></span>
            </div>
        </form>

        <div id="navbar-menu">
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle icon-menu" data-toggle="dropdown">
                        <i class="lnr lnr-alarm"></i>
                        @if($userMessages->count() != 0)
                        <span class="badge bg-danger">{{ $userMessages->count() }}
                        @endif
                        </span>

                    </a>
                    @if(count($userMessages) != 0)
                    <ul class="dropdown-menu notifications">
                        @foreach($userMessages as $userMessage)
                            <li><a href="@if($userMessage->user->role_id == 1){{ route('admin.messageShow', $userMessage->id) }} @elseif($userMessage->user->role_id == 3) {{ route('jobseeker.messageShow', $userMessage->id) }} @endif" class="notification-item"><span class="dot bg-{{ $userMessage->status == 1 ? 'success' : 'danger' }}"></span>{{ $userMessage->name }} | {{ $userMessage->email }}</a></li>

                        @endforeach
                    </ul>
                    @endif
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="lnr lnr-question-circle"></i> <span>Help</span> <i class="icon-submenu lnr lnr-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Basic Use</a></li>
                        <li><a href="#">Working With Data</a></li>
                        <li><a href="#">Security</a></li>
                        <li><a href="#">Troubleshooting</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><img src="{{ Storage::disk('public')->url('profile/' . Auth::user()->image)  }}" class="img-circle" alt="Avatar"> <span>{{ Auth::user()->name }}</span> <i class="icon-submenu lnr lnr-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="@if(Auth::user()->role_id == 1){{ route ('admin.profile') }} @elseif(Auth::user()->role_id == 1) {{ route ('manager.profile') }} @else {{ route ('jobseeker.profile') }} @endif"><i class="lnr lnr-user"></i> <span>My Profile</span></a></li>
                        <li><a href="@if(Auth::user()->role_id == 1)
                                        {{ route('admin.messages') }}
                                    @elseif(Auth::user()->role_id == 3)
                                        {{ route('jobseeker.messages') }}
                                    @endif"><i class="lnr lnr-envelope"></i> <span>Message</span>@if($userMessages->count() != 0)<span style="position: relative; left: 10px;" class="badge bg-danger">{{ $userMessages->count() }}@endif</a></li>
                        <li><a href="#"><i class="lnr lnr-cog"></i> <span>Settings</span></a></li>
                        <li><a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();" ><i class="lnr lnr-exit"></i> <span>{{ __('Logout') }}</span></a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>

                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    </div>
</nav>