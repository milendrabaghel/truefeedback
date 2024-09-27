import { Message } from "@/model/User";

/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success - Indicates if the response is successful.
 * @property {string} message - The message associated with the response.
 * @property {boolean} [isAcceptingMessages] - Optional flag indicating if messages are accepted.
 * @property {Message[]} [messages] - Optional array of messages.
 */
