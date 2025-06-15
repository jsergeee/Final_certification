<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
<<<<<<< HEAD
        \Event::listen('composing: backpack::auth.login', function ($view) {
            dd($view->getPath());
        });
=======
        //
>>>>>>> 3d9fbeb966ba2697fba56bdca679014d45790701
    }
}
