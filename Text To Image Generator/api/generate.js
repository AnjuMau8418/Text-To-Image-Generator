export default async function handler(req, res) {
    const API_URL = "https://router.huggingface.co/hf-inference/models/ZB-Tech/Text-to-Image";
    const API_KEY = process.env.HUGGING_FACE_API_KEY; // Fetch securely from Vercel

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { Authorization: `Bearer ${API_KEY}` },
        body: JSON.stringify({ inputs: req.body.prompt }),
    });

    const imageBlob = await response.blob();
    res.setHeader("Content-Type", "image/png");
    res.send(imageBlob);
}
