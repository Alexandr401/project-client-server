import 'dotenv/config';
import express from "express";
import OpenAI from 'openai';

const router = express.Router();

const openai = new OpenAI({
        apiKey: `${process.env.OPENAI_API_KEY}`,
        organization: 'org-8tGsmHfqLqCpB8sqPsLNCZiO'
});

router.post("/", async (req, res) => {
        const { message } = req.body;
        console.log(message, "!!!!!!!!!!!");
        try {
                const chatCompletion = await openai.chat.completions.create({
                        model: "gpt-3.5-turbo",
                        messages: [
                                { role: 'assistant', content: message}
                        ]
                });
                console.log('20', chatCompletion.choices[0].message);
                res.send(chatCompletion.choices[0].message);
        } catch (error) {
                console.log('[conversation.route]', error);
                res.status(500).send("Internal Server Error");
        }
});

export default router;
