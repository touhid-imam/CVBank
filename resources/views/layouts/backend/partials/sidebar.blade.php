<div id="sidebar-nav" class="sidebar">
    <div class="sidebar-scroll">
        <nav>
            <ul class="nav">
               @if(Request::is('admin*'))

                    <li><a {{ Request::is('admin/dashboard') ? 'class=active' : ''}} href="{{ route('admin.dashboard') }}"><i class="lnr lnr-home"></i> <span>{{ __('Dashboard') }}</span></a></li>


                    <li>
                        <a {{ Request::is('admin/users*') ? 'class=active' : 'class=collapsed'}} href="#userManagement" data-toggle="collapse"><i class="lnr lnr lnr-users"></i> <span>Users Management</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                        <div id="userManagement" {{ Request::is('admin/users*') ? 'class="collapse in"' : 'class=collapse'}}>
                            <ul class="nav">
                                <li><a {{ Request::is('admin/users') ? 'class=active' : ' '}} href="{{ route('admin.users.index') }}">All Users</a></li>
                                <li><a {{ Request::is('admin/users/create') ? 'class=active' : ' '}} href="{{ route ('admin.users.create') }}">Create User</a></li>
                            </ul>
                        </div>
                    </li>


                    <li><a href="elements.html" class=""><i class="lnr lnr-code"></i> <span>Elements</span></a></li>

                    <li>
                        <a href="#subPages" data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <span>Pages</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                        <div id="subPages" class="collapse ">
                            <ul class="nav">
                                <li><a href="page-profile.html" class="">Profile</a></li>
                                <li><a href="page-login.html" class="">Login</a></li>
                                <li><a href="page-lockscreen.html" class="">Lockscreen</a></li>
                            </ul>
                        </div>
                    </li>
                @endif
               @if(Request::is('manager*'))

                   <li><a href="{{ route('manager.dashboard') }}" class="active"><i class="lnr lnr-home"></i> <span>{{ __('HR Dashboard') }}</span></a></li>

                   <li>
                       <a href="#subPages" data-toggle="collapse" class="collapsed"><i class="lnr lnr-file-empty"></i> <span>Pages</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                       <div id="subPages" class="collapse ">
                           <ul class="nav">
                               <li><a href="page-profile.html" class="">Profile</a></li>
                               <li><a href="page-login.html" class="">Login</a></li>
                               <li><a href="page-lockscreen.html" class="">Lockscreen</a></li>
                           </ul>
                       </div>
                   </li>
               @endif
               @if(Request::is('jobseeker*'))

                   <li><a href="{{ route('jobseeker.dashboard') }}" class="active"><i class="lnr lnr-home"></i> <span>{{ __('Dashboard') }}</span></a></li>

               @endif
            </ul>
        </nav>
    </div>
</div>