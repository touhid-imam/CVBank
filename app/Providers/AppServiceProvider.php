<?php

namespace App\Providers;


use App\UserMessage;
use Carbon\Carbon;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\View\Factory as ViewFactory;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */

    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);


        view()->composer('layouts.backend.master', function($view){
            $view->with('userMessages', UserMessage::where('user_id', Auth::user()->id)->where('status', 0)->latest()->paginate(5));
        });


        VerifyEmail::toMailUsing(function ($notifiable) {
            $verifyUrl = URL::temporarySignedRoute(
                'verification.verify', Carbon::now()->addMinute (60), ['id' => $notifiable->getKey()]
            );

            // Return your mail here...
            return (new MailMessage)
                ->subject('Verify your email address')
                ->line('Please verify your email address to secure your account')
                ->action ('Verify it!', $verifyUrl);
        });
    }


}
