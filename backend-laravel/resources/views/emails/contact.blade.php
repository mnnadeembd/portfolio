<!DOCTYPE html>
<html>
<head>
    <title>New Contact Message</title>
</head>

<body style="margin:0; padding:0; background:#26619C; font-family:'Times New Roman', Times, serif;">

    <!-- Main Container -->
    <div style="max-width:600px; margin:40px auto; background:#0b1b33; border-radius:12px; overflow:hidden;">

        <!-- Header -->
        <div style="background:#1f4f7a; padding:22px; text-align:center; border-bottom:1px solid rgba(255,255,255,0.08);">
            <h2 style="margin:0; color:#38bdf8; font-size:22px;">
                New Contact Message
            </h2>
            <p style="margin:6px 0 0; color:#e2e8f0; font-size:13px;">
                Message received from your portfolio website
            </p>
        </div>

        <!-- Body -->
        <div style="padding:25px; color:#e2e8f0;">

            <p style="margin-bottom:15px;">
                <strong style="color:#7dd3fc;">Name: </strong>
                {{ $name }}
            </p>

            <p style="margin-bottom:15px;">
                <strong style="color:#7dd3fc;">Email: </strong>
                {{ $email }}
            </p>

            <div style="margin-top:20px;">
                <strong style="color:#7dd3fc;">Message:</strong>

                <div style="margin-top:10px; padding:15px; background:#071425; border-left:4px solid #38bdf8; border-radius:8px; color:#cbd5e1; line-height:1.6;">
                    {{ $msg }}
                </div>

            </div>

        </div>

        <!-- Footer -->
        <div style="padding:15px; text-align:center; font-size:12px; color:#dbeafe; border-top:1px solid rgba(255,255,255,0.08); background:#1f4f7a;">
            © {{ date('Y') }} Portfolio Contact System
        </div>

    </div>

</body>
</html>