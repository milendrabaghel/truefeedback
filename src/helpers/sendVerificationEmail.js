import { resend } from "../lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "../types/ApiResponse";

export async function sendVerificationEmail(email, username, verifyCode) {
    try {
        await resend.emails.send({
            from: 'dev@hiteshchoudhary.com',
            to: email,
            subject: 'Mystery Message | Verification Code',
            react: VerificationEmail({ username, otp: verifyCode }),
        });
        return {
            success: true,
            message: "verification email sent successfully"
        };
    } catch (emailError) {
        console.error("error sending verification email", emailError);
        return {
            success: false,
            message: "failed to send verification email"
        };
    }
}
