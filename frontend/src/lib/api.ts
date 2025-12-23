/**
 * Submits an email address to the waitlist by making a POST request to the backend API.
 *
 * @param email - The email address to be added to the waitlist.
 * @throws {Error} Throws an error if the request fails or the server responds with a non-OK status.
 */
export const submitWaitlist = async(email: string) => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email}),
    });

    if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Request failed");
    }
}

