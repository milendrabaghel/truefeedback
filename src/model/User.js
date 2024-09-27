import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

/**
 * @typedef {Object} Message
 * @property {string} content - The content of the message.
 * @property {Date} createdAt - The date the message was created.
 */

/**
 * Message schema definition
 */
const MessageSchema = new Schema(
    {
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now, required: true }
    }
);

/**
 * @typedef {Object} User
 * @property {string} username - The username of the user.
 * @property {string} email - The email of the user.
 * @property {string} password - The password of the user.
 * @property {string} verifyCode - The verification code for the user.
 * @property {Date} verifyCodeExpires - The expiry date of the verification code.
 * @property {boolean} isVerified - Whether the user is verified.
 * @property {boolean} isAcceptingMessages - Whether the user is accepting messages.
 * @property {Message[]} messages - The messages of the user.
 */

/**
 * User schema definition
 */
const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            match: [/.+\@.+\..+/, "Please fill a valid email address"]
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        verifyCode: {
            type: String,
            required: [true, "Verify code is required"]
        },
        verifyCodeExpires: {
            type: Date,
            required: [true, "Verify code expiry date is required"]
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        isAcceptingMessages: {
            type: Boolean,
            default: true,
        },
        messages: [MessageSchema]
    }
);

/**
 * User model
 */
const UsersModel = models.User || model("User", UserSchema);
export { MessageSchema as Message };
export default UsersModel;
