<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        // ✅ Validation
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required'
        ]);

        // ✅ Mail send
        Mail::raw(
            "Name: " . $request->name . "\n" .
                "Email: " . $request->email . "\n\n" .
                "Message:\n" . $request->message,
            function ($mail) use ($request) {
                $mail->to('your@email.com') // 👉 তোমার email
                    ->subject('New Contact Message');
            }
        );

        return response()->json([
            'success' => true,
            'message' => 'Message sent successfully'
        ]);
    }
}
