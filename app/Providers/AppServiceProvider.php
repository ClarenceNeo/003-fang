<?php

namespace App\Providers;

use Laravel\Passport\Passport;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        require_once(app_path('Utils/helper.php'));
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Passport::routes();

        Passport::tokensExpireIn(now()->addMinutes(30));

        Passport::refreshTokensExpireIn(now()->addDays(10));
    }
}
