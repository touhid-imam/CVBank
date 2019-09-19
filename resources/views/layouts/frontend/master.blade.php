@include('layouts.frontend.partials.header')

<main role="main">
@stack('css')

@yield('search-area')

@yield('main-content')

</main>

@stack('js')
@include('layouts.frontend.partials.footer')

