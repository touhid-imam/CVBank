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
                    <li>
                        <a {{ Request::is('admin/hobbies-facts*') ? 'class=active' : 'class=collapsed'}} href="#hobby-fact" data-toggle="collapse"><i class="lnr lnr-thumbs-up"></i> <span>Facts Management</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                        <div id="hobby-fact" {{ Request::is('admin/hobbies-facts*') ? 'class="collapse in"' : 'class=collapse'}}>
                            <ul class="nav">
                                <li><a {{ Request::is('admin/hobbies-facts') ? 'class=active' : ' '}} href="{{ route('admin.hobbies-facts.index') }}">All Hobby & Fact</a></li>
                                <li><a {{ Request::is('admin/hobbies-facts/create') ? 'class=active' : ' '}} href="{{ route ('admin.hobbies-facts.create') }}">Create Hobby & Fact</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a {{ Request::is('admin/resumes*') ? 'class=active' : 'class=collapsed'}} href="#resume-fact" data-toggle="collapse"><i class="lnr lnr-layers"></i> <span>Resume Management</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                        <div id="resume-fact" {{ Request::is('admin/resumes*') ? 'class="collapse in"' : 'class=collapse'}}>
                            <ul class="nav">
                                <li><a {{ Request::is('admin/resumes') ? 'class=active' : ' '}} href="{{ route('admin.resumes.index') }}">All Resume</a></li>
                                <li><a {{ Request::is('admin/resumes/create') ? 'class=active' : ' '}} href="{{ route ('admin.resumes.create') }}">Create Resume</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a {{ Request::is('admin/team*') ? 'class=active' : 'class=collapsed'}} href="#team-fact" data-toggle="collapse"><i class="lnr lnr-users"></i> <span>Team Management</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                        <div id="team-fact" {{ Request::is('admin/team*') ? 'class="collapse in"' : 'class=collapse'}}>
                            <ul class="nav">
                                <li><a {{ Request::is('admin/team') ? 'class=active' : ' '}} href="{{ route('admin.team.index') }}">Team Members</a></li>
                                <li><a {{ Request::is('admin/team/create') ? 'class=active' : ' '}} href="{{ route ('admin.team.create') }}">Create Team</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <a {{ Request::is('admin/post*') ? 'class=active' : 'class=collapsed'}} href="#posts" data-toggle="collapse"><i class="lnr lnr-users"></i> <span>Posts</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                        <div id="posts" {{ Request::is('admin/post*') ? 'class="collapse in"' : 'class=collapse'}}>
                            <ul class="nav">
                                <li><a {{ Request::is('admin/post') ? 'class=active' : ' '}} href="{{ route('admin.post.index') }}">All Posts</a></li>
                                <li><a {{ Request::is('admin/post/create') ? 'class=active' : ' '}} href="{{ route ('admin.post.create') }}">Create Post</a></li>

                            </ul>
                        </div>
                    </li>
                    <li>
                        <a {{ Request::is('admin/work*') ? 'class=active' : 'class=collapsed'}} href="#works" data-toggle="collapse"><i class="lnr lnr-briefcase"></i> <span>Works</span> <i class="icon-submenu lnr lnr-chevron-left"></i></a>
                        <div id="works" {{ Request::is('admin/work*') ? 'class="collapse in"' : 'class=collapse'}}>
                            <ul class="nav">
                                <li><a {{ Request::is('admin/work') ? 'class=active' : ' '}} href="{{ route('admin.work.index') }}">Work List</a></li>
                                <li><a {{ Request::is('admin/work/create') ? 'class=active' : ' '}} href="{{ route ('admin.work.create') }}">Create Work</a></li>

                            </ul>
                        </div>
                    </li>
                    <br/>
                    <hr/>

                    <li><a {{ Request::is('admin/category*') ? 'class=active' : 'class=collapsed'}} href="{{ route ('admin.category.index') }}" class=""><i class="lnr lnr-list"></i> <span>Categories</span></a></li>
                    <li><a {{ Request::is('admin/tags*') ? 'class=active' : 'class=collapsed'}} href="{{ route ('admin.tag.index') }}" class=""><i class="lnr lnr-sort-amount-asc"></i> <span>Tags</span></a></li>




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