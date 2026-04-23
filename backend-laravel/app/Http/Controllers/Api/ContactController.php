<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\AutoReplyMail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        // Validation
        $validated = $request->validate([
            'name' => 'required|string|max:150',
            'email' => 'required|email',
            'message' => 'required|string'
        ]);

        // Prepare data
        $data = [
            'name' => $validated['name'],
            'email' => $validated['email'],
            'msg' => $validated['message']
        ];

        try {
            // Send to Admin
            Mail::send('emails.contact', $data, function ($mail) {
                $mail->to('mnnadeembd@gmail.com')
                    ->subject('New Portfolio Contact Message');
            });

            // Auto Reply to User
            Mail::to($validated['email'])
                ->send(new AutoReplyMail($validated['name']));

            return response()->json([
                'success' => true,
                'message' => 'I’ve received your message and will get back to you as soon as possible.'
            ]);
        } catch (\Exception $e) {

            return response()->json([
                'success' => false,
                'message' => 'Failed to send message. Please try again later.'
            ], 500);
        }
    }
}
