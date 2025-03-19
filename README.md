# 🖼️ Text-to-Image Generation using Hugging Face API

## 📌 Overview
This project generates images from text prompts using the **Hugging Face Inference API**. It is built with **HTML, CSS, and JavaScript** and provides a simple interface for users to input text and receive an AI-generated image.

## 🚀 Features
✅ **User-friendly interface** to generate images from text prompts.  
✅ **Uses the Hugging Face API** for image generation.  
✅ **Allows downloading** generated images.  
✅ **Responsive design** for desktop and mobile users.  

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **API:** Hugging Face Inference API  

## ⚙️ Usage
1. **Enter** a text prompt in the input field.
2. **Click "Generate"** to fetch the AI-generated image.
3. **Download** the generated image using the **download button**.
4. **Click "Reset"** to clear the input and start again.

## 📸 Screenshots
### **User Interface**
![Text-to-Image UI](screenshots/user_interface.png)

### **Example Generated Image**
![Generated Image](screenshots/Generated_image.png)

## 🔧 Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/AnjuMau8418/Text-To-Image-Generator.git
   ```
2. **Navigate into the project directory:**
   ```sh
   cd Text-To-Image-Generator
   ```
3. **Open `index.html`** in a browser to start using the tool.

## 🔗 API Integration
This project uses the **Hugging Face Inference API** for image generation. To integrate it:
1. **Get an API key** from [Hugging Face](https://huggingface.co/).
2. **Update the JavaScript file** with your API key:
   ``` js
   const Key = "your_huggingface_api_key";
   ```
