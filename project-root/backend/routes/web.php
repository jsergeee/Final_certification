<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function () {
    return 'Простой текст без зависимостей';
});

Route::post('/login', [AuthController::class, 'login']);