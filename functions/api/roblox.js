export async function onRequestGet(context) {

    const { searchParams } = new URL(context.request.url);

    const universeId = searchParams.get("universeId");

    if (!universeId) {
        return new Response(
            JSON.stringify({
                error: "Missing universeId"
            }),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            }
        );
    }

    const response = await fetch(
        `https://games.roblox.com/v1/games?universeIds=${universeId}`
    );

    const text = await response.text();

    return new Response(text, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });
}
