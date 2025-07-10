/**
 What is Authentication? 
Authentication is the process of recognizing a user's identity.

Username and password combination is the most popular authentication mechanism, and it is also known as password authentication.  
  
In simple terms, authentication is the process of verifying who a user is, while authorization is the process of verifying what they have access to.

-------------------------------------------------------------------------------------------------

Q1:  What is Authorization ? 
Authorization is the process of identifying (determining) what resources or actions a verified user is allowed to access or perform.

----------------------------------------------------------------------------------------------

There are four types of Authorization – API keys, Basic Auth, HMAC, and OAuth.  
1: API keys.

 API key like a special ID card. When we want to use a service (like an app or website feature), we include this key in our request. we usually get this key by signing up with the service.

An application programming interface key is a unique identifier used to authenticate a user

2: Basic Auth 
 Uses a username and password, encoded (Base64) and sent securely via HTTPS to verify access.

 3: HMAC
HMAC stands for Hash-based Message Authentication Code.
A digital signature using a hash algorithm (e.g., MD5, SHA-1) to ensure data integrity and authenticity.

4: OAuth 
A way to let apps or websites use our data from other platforms (like Google or Facebook) without giving them our password.

🔹 Why it’s good:
our password stays safe and secret.
You can control what data they can see.

🔹 Example:
When you click “Sign in with Google” on a website, it uses OAuth to log you in safely.
--------------------------------------------------------------------------------------------------------------

Q3😊 What Is JWT? 
JWT (JSON Web Token) is a compact, self-contained way to securely transmit information between parties, often used for authentication and authorization. It’s like a digital passport that proves who we are and what we’re allowed to do.

A JWT is a string of characters that contains three parts, separated by dots (.):

🔹 Header: Information about the token and how it is secured.
🔹 Payload: The actual data or claims inside the token.
🔹 Signature: A security code to check if the token is safe and unmodified.

These parts are encoded in Base64 and look like this: header.payload.signature.

Cons:
1. Tokens can’t be revoked easily unless stored server-side or using short expiration times.
2. Sensitive data in the payload can be read (it’s Base64-encoded, not encrypted) unless encrypted separately.

-------------------------------------------------------------------------------------------------------------
What is a token? 
A token is a string of characters that represents a piece of information, often used for authentication or authorization in systems (like APIs or web applications).

(In the context of JWT (JSON Web Token), a token is a digitally signed string that contains encoded data (like user identity or permissions) and is used to verify a user’s identity or access rights securely.)
-------------------------------------------------------------------------------------------------------------

Q4😊 What Is JSON?  
JSON (JavaScript Object Notation) is a lightweight, text-based format for storing and exchanging data.

JSON is like a structured way to organize data using key-value pairs. It’s commonly used to send data between a server and a client (e.g., in web apps or APIs).

{
  "user": {
    "name": "Alice",
    "age": 25,
    "isStudent": true,
    "hobbies": ["reading", "gaming"]
  }
}
  Relation to JWT:
JWT uses JSON to structure its header and payload (e.g., user info or permissions), which are then encoded in Base64 and signed to create a secure token.
---------------------------------------------------------------------------------------------

 */

/**
-----------------------------------------------------------------------------------------------
HTTP status codes are three-digit numbers returned by a server to indicate the outcome of a client’s request 

They tell us whether the request was successful, failed, or needs further action. They’re grouped into five categories:

Simple Breakdown of Status Code Categories:
1xx (Informational): Request received, processing continues (rarely seen by users).
2xx (Success): Request was successfully received, understood, and completed.
3xx (Redirection): Client needs to take additional action (e.g., follow a redirect).
4xx (Client Error): Request has an error (e.g., bad URL or unauthorized access).
5xx (Server Error): Server failed to fulfill a valid request (e.g., server crash).

-----------------------------------------------------------------------------------------------
HTTP STATUS CODE : 
1xx: Informational

100 Continue: The server has received the request headers, and the client should proceed to send the body.
101 Switching Protocols: The server is switching protocols (e.g., upgrading to WebSocket).
102 Processing: The server is processing the request but hasn’t completed it yet (used in WebDAV).
103 Early Hints: Used to return preliminary headers before the final response (e.g., for preloading resources).

---------------------------------------------------------------------------------------------------------

2xx: Success
These codes indicate that the request was successfully received, understood, and accepted.

-- 200 OK: The request was successful, and the response contains the requested data.
--201 Created:  new resource being created.
202 Accepted: The request has been accepted for processing, but processing is not complete.
203 Non-Authoritative Information: The response contains data from a third party, not the original server.
--204 No Content: The request was successful, but there’s no content to return (e.g., after a DELETE request).
205 Reset Content: The client should reset the document view (e.g., clear a form).
206 Partial Content: The server is delivering only part of the resource due to a range request (e.g., for resumable downloads).
207 Multi-Status: Multiple status codes for different parts of a request (used in WebDAV).
208 Already Reported: Used in WebDAV to avoid repeating resources in a response.

--226 IM Used: The server successfully processed a request, and the response shows the result of one or more changes to the resource


3xx: Redirection
These codes indicate that further action is needed to complete the request, often involving redirection.

300 Multiple Choices: Multiple options are available for the resource, and the client may need to choose.
-- 301 Moved Permanently: The resource has been permanently moved to a new URL.
--302 Found: The resource is temporarily located at a different URL (also known as "temporary redirect").
303 See Other: The response to the request can be found at a different URL using a GET request.
304 Not Modified: The resource hasn’t changed since the last request (used for caching).
305 Use Proxy: The requested resource must be accessed through a proxy (deprecated).
307 Temporary Redirect: Similar to 302, but the client must use the same HTTP method for the redirected request.
308 Permanent Redirect: Similar to 301, but the client must use the same HTTP method for the redirected request.

4xx: Client Errors
These codes indicate an error caused by the client, such as invalid requests or permissions issues.

--400 Bad Request: Server can’t understand the request (e.g., malformed data).
--401 Unauthorized:Client needs to authenticate (e.g., log in).

402 Payment Required: Reserved for future use (e.g., for paid APIs, rarely used).

-- 403 Forbidden: The client is authenticated but lacks permission to access the resource.
-- 404 Not Found: The requested resource could not be found on the server.

405 Method Not Allowed: The HTTP method used is not supported for the resource (e.g., using POST on a GET-only endpoint).
406 Not Acceptable: The server cannot produce a response matching the client’s Accept headers.
407 Proxy Authentication Required: Authentication is required for the proxy.
408 Request Timeout: The server timed out waiting for the client’s request.
409 Conflict: The request conflicts with the current state of the resource (e.g., trying to create a duplicate resource).
410 Gone: The resource is permanently unavailable and will not be available again.
411 Length Required: The request lacks a valid Content-Length header.
412 Precondition Failed: A precondition specified in the request headers (e.g., If-Match) failed.
413 Payload Too Large: The request payload is too large for the server to process.
414 URI Too Long: The request URI is too long for the server to handle.
415 Unsupported Media Type: The request’s media type (e.g., Content-Type) is not supported.
416 Range Not Satisfiable: The requested range of the resource cannot be provided.
417 Expectation Failed: The server cannot meet the requirements of the Expect header.
418 I’m a Teapot: A humorous code defined in an April Fools’ RFC (not widely used).
421 Misdirected Request: The request was directed to a server that cannot produce a response.
422 Unprocessable Entity: The request is well-formed but cannot be processed due to semantic errors (used in WebDAV).
423 Locked: The resource is locked (used in WebDAV).
424 Failed Dependency: The request failed because a dependent request failed (used in WebDAV).

-- 426 Upgrade Required: The client must use a different protocol (e.g., upgrade to TLS).
428 Precondition Required: The server requires conditional headers (e.g., If-Match) to process the request.
--429 Too Many Requests: The client has exceeded the rate limit (used for rate limiting, as you previously asked).
431 Request Header Fields Too Large: The request headers are too large for the server to process.
451 Unavailable For Legal Reasons: The resource is unavailable due to legal restrictions (e.g., censorship).
-------------------------------------------------------------------------------------------------------------

5xx: Server Errors
These codes indicate that the server failed to fulfill a valid request due to an error on its end.

--500 Internal Server Error: A generic error indicating the server encountered an unexpected issue.
501 Not Implemented: The server does not support the functionality required to fulfill the request.
 502 Bad Gateway: The server, acting as a gateway, received an invalid response from an upstream server.
--503 Service Unavailable: The server is temporarily unavailable, often due to maintenance or overloading.
--504 Gateway Timeout: The server, acting as a gateway, did not receive a timely response from an upstream server.
--505 HTTP Version Not Supported: The server does not support the HTTP protocol version used in the request.
**506 Variant Also Negotiates: A server configuration error related to content negotiation.
--507 Insufficient Storage: The server lacks sufficient storage to complete the request (used in WebDAV).
508 Loop Detected: The server detected an infinite loop while processing the request (used in WebDAV).
510 Not Extended: Further extensions to the request are required (rarely used).
511 Network Authentication Required: The client must authenticate to access the network (e.g., for captive portals).

--------------------------------------------------------------------------------------------------------------

Encryption and hashing are cryptographic techniques used to secure data, but they serve different purposes

Encryption
 Encryption transforms data into an unreadable format (ciphertext) using a key, which can be reversed (decrypted) back to the original data (plaintext) with the correct key.

Purpose: Ensures confidentiality by protecting data from unauthorized access. Only those with the decryption key can access the original information.

Types:
Symmetric Encryption: Uses the same key for encryption and decryption (e.g., AES, DES).
Asymmetric Encryption: Uses a pair of keys— public for encryption, private for decryption (e.g., RSA, ECC).

Hashing
 Hashing converts data into a fixed-length string (hash value or digest) using a hash function. It’s a one-way process, meaning the original data cannot be retrieved from the hash.

Purpose: Ensures data integrity and is commonly used for password storage, digital signatures, and verifying file authenticity.

Key Characteristics:
Irreversible (cannot be decrypted).
Deterministic: Same input always produces the same hash.
Collision-resistant: Hard to find two different inputs producing the same hash.
Common algorithms: SHA-256, MD5 (outdated), bcrypt (for passwords).

*/
console.log([] + [], "11")/// empty string ""
console.log([] + {}, "12") //[object Object]
console.log({} + {}, "13") //[object Object][object Object]
console.log({} + 2, "14") //[object Object]2
console.log([] + 2, "15") //2

