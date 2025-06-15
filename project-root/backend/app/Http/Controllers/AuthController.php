<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
<<<<<<< HEAD
use Illuminate\Support\Facades\Cookie;
=======
use Illuminate\Validation\ValidationException;
>>>>>>> 3d9fbeb966ba2697fba56bdca679014d45790701

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
<<<<<<< HEAD
            'password' => 'required|string|min:8',
=======
            'password' => 'required',
>>>>>>> 3d9fbeb966ba2697fba56bdca679014d45790701
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

<<<<<<< HEAD
        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ])->withCookie(Cookie::make(
            'auth_token',
            $token,
            config('session.lifetime'),
            '/',
            config('session.domain'),
            config('session.secure'),
            true,
            false,
            'Strict'
        ));
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        
        return response()->json(['message' => 'Logged out'])
            ->withoutCookie('auth_token');
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
=======
        $request->session()->regenerate();

        return response()->json([
            'user' => Auth::user(),
            'csrf_token' => csrf_token()
        ]);
>>>>>>> 3d9fbeb966ba2697fba56bdca679014d45790701
    }
}