<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Dr.Abdulwahid') }}</title>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead

    {{-- ro deal with laravel blade functionality we provided this amazing functions --}}
    <script>
        function trans(word = "") {
            if (word.length < 1) {
                return "";
            }
            word = "en." + word;
            return `{{ __('${word}') }}`;
        }

        function resource(link) {
            if (link.length < 1) {
                return "";
            }
            let mlink = `assets/${link}`;
            return `{{ asset('${mlink}') }}`;
        }
    </script>
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
