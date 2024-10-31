export const faqCategories = ['basics', 'technical', 'applications', 'ethics', 'development'] as const;

export type FAQCategory = typeof faqCategories[number];

export interface FAQItem {
    question: string;
    answer: string;
}

export type FAQData = {
    [K in FAQCategory]: FAQItem[];
}

export const faqData = {
    basics: [
        {
            question: "What is Generative AI?",
            answer: "Generative AI creates new content similar to its training data, like text, images, or audio."
        },
        {
            question: "How does Generative AI work?",
            answer: "It learns patterns from data and uses models to generate new outputs based on those patterns."
        },
        {
            question: "What makes Generative AI different from traditional AI?",
            answer: "Traditional AI classifies data; Generative AI creates new data by mimicking patterns."
        },
        {
            question: "What are some applications of Generative AI?",
            answer: "Content creation, image generation, virtual assistants, and code generation are popular uses."
        },
        {
            question: "Why is Generative AI popular?",
            answer: "It can automate tasks and create unique content, making it valuable across industries."
        },
        {
            question: "What data is needed to train Generative AI models?",
            answer: "Large datasets representing the type of content the model should generate."
        },
        {
            question: "How long does it take to train a Generative AI model?",
            answer: "Depending on data and model size, training can take hours to weeks."
        },
        {
            question: "What are pre-trained models?",
            answer: "These models are trained on extensive data and can be adapted for specific tasks."
        },
        {
            question: "What is few-shot learning?",
            answer: "It's teaching a model a task with minimal examples instead of full retraining."
        },
        {
            question: "What are some limitations of Generative AI?",
            answer: "High computational needs, potential for bias, and the risk of misinformation."
        }
    ],
    technical: [
        {
            question: "What are GANs?",
            answer: "GANs are models with two networks—generator and discriminator—that work together to produce realistic outputs."
        },
        {
            question: "What is a Variational Autoencoder (VAE)?",
            answer: "VAEs are models that encode data into simpler representations, ideal for generating varied outputs."
        },
        {
            question: "What are transformer models?",
            answer: "Transformers process sequential data, making them ideal for language generation tasks."
        },
        {
            question: "How do diffusion models work?",
            answer: "Diffusion models add and then remove noise in data to create realistic images."
        },
        {
            question: "What are autoregressive models?",
            answer: "They predict the next data point in a sequence, commonly used in text generation."
        },
        {
            question: "What is fine-tuning in Generative AI?",
            answer: "It's adapting a pre-trained model to a specific dataset to improve its accuracy."
        },
        {
            question: "What is NLP in Generative AI?",
            answer: "Natural Language Processing enables AI to understand and generate human language."
        },
        {
            question: "How does GPT create text?",
            answer: "By predicting the next word in a sequence using patterns learned from data."
        },
        {
            question: "What is a prompt in text generation?",
            answer: "A prompt is input text guiding the model to produce specific outputs."
        },
        {
            question: "How is AI used in synthetic data generation?",
            answer: "It generates data that mimics real datasets, useful for training and testing models."
        }
    ],
    applications: [
        {
            question: "What is text generation in Generative AI?",
            answer: "Text generation is creating human-like text based on input prompts or questions."
        },
        {
            question: "How does Generative AI create images?",
            answer: "By learning patterns in visual data and producing images that reflect those patterns."
        },
        {
            question: "What is text-to-image generation?",
            answer: "Creating images from text descriptions using models like DALL-E."
        },
        {
            question: "What is AI-generated art?",
            answer: "Artwork created by AI models trained on visual data to generate creative visuals."
        },
        {
            question: "What is style transfer in Generative AI?",
            answer: "Applying the style of one image to another, often used in art and design."
        },
        {
            question: "What is music generation?",
            answer: "Creating original music by analyzing patterns in existing musical data."
        },
        {
            question: "How is Generative AI used in game design?",
            answer: "It creates game assets, NPC dialogue, and even entire virtual environments."
        },
        {
            question: "What is code generation?",
            answer: "Using AI to assist or automate writing code, often with models like Codex."
        },
        {
            question: "What is language translation in AI?",
            answer: "Translating text from one language to another using NLP models."
        },
        {
            question: "How is Generative AI used in healthcare?",
            answer: "It assists in drug discovery, diagnosis support, and personalized medicine."
        }
    ],
    ethics: [
        {
            question: "What are the risks of using Generative AI?",
            answer: "Risks include bias, privacy issues, and the potential for creating harmful content."
        },
        {
            question: "Can Generative AI produce biased outputs?",
            answer: "Yes, if the training data has biases, the outputs may reflect them."
        },
        {
            question: "How is bias managed in Generative AI?",
            answer: "By carefully selecting training data and applying fairness checks during development."
        },
        {
            question: "What are the ethical concerns with Generative AI?",
            answer: "Privacy, data security, and responsible usage are major concerns."
        },
        {
            question: "What is responsible AI?",
            answer: "AI developed and deployed in a way that ensures ethical, fair, and safe use."
        },
        {
            question: "What is deepfake technology?",
            answer: "Deepfake uses AI to create realistic, altered videos or images of people."
        },
        {
            question: "Are deepfakes harmful?",
            answer: "They can be used maliciously, but also have valid applications in entertainment."
        },
        {
            question: "How does Generative AI impact jobs?",
            answer: "It may automate certain tasks, but also creates new opportunities in tech fields."
        },
        {
            question: "How accurate are AI translators?",
            answer: "They are often very accurate but may struggle with context or idioms."
        },
        {
            question: "How accurate is AI-generated code?",
            answer: "Accuracy varies, but AI can create functional code for many standard programming tasks."
        }
    ],
    development: [
        {
            question: "Can Generative AI create human-like conversations?",
            answer: "Yes, conversational models like ChatGPT can simulate human dialogue."
        },
        {
            question: "How does AI create realistic faces?",
            answer: "By analyzing and reproducing facial patterns from a large dataset of images."
        },
        {
            question: "How does AI assist in image editing?",
            answer: "AI can automate tasks like removing backgrounds, enhancing images, and applying filters."
        },
        {
            question: "Can AI compose songs?",
            answer: "Yes, Generative AI can create music that mimics various styles and genres."
        },
        {
            question: "Can Generative AI understand programming languages?",
            answer: "Yes, some models are trained on large codebases to understand multiple languages."
        },
        {
            question: "How does AI summarize text?",
            answer: "By extracting key points or generating condensed versions of long texts."
        },
        {
            question: "What is conversational AI?",
            answer: "AI that can hold human-like conversations, often used in chatbots."
        },
        {
            question: "Can AI create realistic animations?",
            answer: "Yes, Generative AI can automate animation processes for more realistic visuals."
        },
        {
            question: "How does AI support content creators?",
            answer: "It helps by generating text, images, music, and even video content."
        },
        {
            question: "Why is training Generative AI expensive?",
            answer: "Training requires significant computational resources and large amounts of data."
        }
    ]
}